"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useRouter } from "next/navigation"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const [showWelcome, setShowWelcome] = useState(false)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate login for existing users
    setTimeout(() => {
      setIsLoading(false)
      // Directly redirect to dashboard without popup for existing users
      router.push("/dashboard")
    }, 1000)
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate signup for new users
    setTimeout(() => {
      setIsLoading(false)
      // Show welcome popup only for new users
      setShowWelcome(true)
    }, 1000)
  }

  return (
    <Tabs defaultValue="login" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="signup">Sign Up</TabsTrigger>
      </TabsList>

      <TabsContent value="login">
        <Card>
          <CardHeader>
            <CardTitle>Welcome Back</CardTitle>
            <CardDescription>Sign in to your ReWear account</CardDescription>
          </CardHeader>
          <form onSubmit={handleLogin}>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter your password" required />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isLoading}>
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </TabsContent>

      <TabsContent value="signup">
        <Card>
          <CardHeader>
            <CardTitle>Create Account</CardTitle>
            <CardDescription>Join ReWear and start sustainable fashion exchange</CardDescription>
          </CardHeader>
          <form onSubmit={handleSignup}>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="signupEmail">Email</Label>
                <Input id="signupEmail" type="email" placeholder="john@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="signupPassword">Password</Label>
                <Input id="signupPassword" type="password" placeholder="Create a password" required />
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" disabled={isLoading}>
                {isLoading ? "Creating account..." : "Create Account"}
              </Button>
            </CardFooter>
          </form>
        </Card>
      </TabsContent>
      {/* Welcome Dialog */}
      <Dialog open={showWelcome} onOpenChange={setShowWelcome}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold text-green-700">Welcome to ReWear! 🎉</DialogTitle>
          </DialogHeader>
          <div className="text-center space-y-4 p-4">
            <div className="text-6xl">👕</div>
            <h3 className="text-xl font-semibold">Thank you for joining our community!</h3>
            <p className="text-gray-600">
              ReWear is a sustainable fashion platform where you can exchange clothing through swaps and point-based
              redemption. Together, we're building a circular economy that reduces textile waste and promotes conscious
              consumption.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <h4 className="font-semibold text-green-800 mb-2">🎁 New User Bonus!</h4>
              <p className="text-green-700">
                Congratulations! As a new member, you've earned <span className="font-bold">100 points</span> to start
                your sustainable fashion journey!
              </p>
            </div>
            <Button
              onClick={() => {
                setShowWelcome(false)
                router.push("/dashboard")
              }}
              className="w-full bg-green-600 hover:bg-green-700"
            >
              Start Exploring
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </Tabs>
  )
}
