import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function SignupForm() {
  return (
    <form className="flex flex-col gap-6">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Create your account</h1>
        <p className="text-sm text-muted-foreground">
          Enter your details below to create your account
        </p>
      </div>
      <div className="grid gap-4">
        <div className="flex gap-3">
            <div className="w-1/2">
                <Label htmlFor="firstName" className="mb-2 block">First Name</Label>
                <Input id="firstName" type="text" placeholder="John" required/>
            </div>
            <div className="w-1/2">
                <Label htmlFor="lastName" className="mb-2 block">Last Name</Label>
                <Input id="lastName" type="text" placeholder="Smith" required />
            </div>
            </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="m@example.com"required />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" required />
        </div>
        <Button type="submit" className="w-full">
          Sign up
        </Button>
        <p className="text-center text-sm">
          Already have an account?{" "}
          <a href="/" className="underline underline-offset-4">
            Login
          </a>
        </p>
      </div>
    </form>
  )
}
