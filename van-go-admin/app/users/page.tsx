"use client"

import React from "react"

import { AppSidebar } from "@/components/app-sidebar"
import { DataTable, defaultColumns } from "@/components/data-table"  // <-- import defaultColumns
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"

import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import data from '../users/data.json'
import { ColumnDef } from "@tanstack/react-table"

type UserData = {
  header: string
  type: string
  status: string
  id: number
  target: string
  limit: string
  reviewer: string
}

// Cast defaultColumns to the correct type if needed
const baseColumns = defaultColumns as ColumnDef<UserData>[]

// Safely map columns and update headers by checking accessorKey existence
// Filter out the "reviewer" column before mapping
const customColumns: ColumnDef<UserData>[] = baseColumns
  .filter(
  (col): col is ColumnDef<UserData> & { accessorKey: keyof UserData } =>
    'accessorKey' in col && col.accessorKey !== "reviewer"
)
  .map((col) => {
    if ("accessorKey" in col && col.accessorKey) {
      switch (col.accessorKey) {
        case "header":
          return { ...col, header: "Users" }
        case "type":
          return { ...col, header: "Email" }
        case "status":
          return { ...col, header: "Status" }
        case "target":
          return { ...col, header: "Join Date" }
        case "limit":
          return { ...col, header: "Last Activity" }
      }
    }
    return col
  })

export default function Page() {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
              <div className="px-4 lg:px-6"></div>
              {/* Pass custom columns here */}
              <DataTable data={data} columns={customColumns} showTabs={true} />
            </div>
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}
