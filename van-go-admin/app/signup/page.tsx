// app/signup/page.tsx
import { Truck } from "lucide-react"
import { SignupForm } from "@/components/signup-form"
import Image from "next/image"

export default function SignupPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
            <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
              <Truck className="size-4" />
            </div>
            Van Go Admin.
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-md">
            <SignupForm />
          </div>
        </div>
      </div>
      <div className="bg-muted relative hidden lg:block">
        <Image
          src="/asus.jpg"
          alt="Image"
          fill
          className="absolute inset-0 h-full w-full object-cover pl:10 dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  )
}
