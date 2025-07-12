"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Star, MapPin, Calendar, Heart, MessageSquare, AlertTriangle, Edit } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const userData = {
  id: 1,
  name: "John Doe",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  location: "San Francisco, CA",
  joinedDate: "March 2023",
  points: 345, // Updated to include welcome bonus
  rating: 4.7,
  totalRatings: 89,
  profileImage: "/placeholder.svg?height=120&width=120",
  stats: {
    totalListings: 23,
    completedSwaps: 15,
    itemsRedeemed: 8,
    pointsEarned: 440,
  },
}

const userListings = [
  {
    id: 1,
    title: "Vintage Denim Jacket",
    brand: "Levi's",
    points: 50,
    status: "available",
    image: "/placeholder.svg?height=200&width=200",
    views: 234,
    likes: 18,
  },
  {
    id: 2,
    title: "Cotton T-Shirt",
    brand: "H&M",
    points: 25,
    status: "pending",
    image: "/placeholder.svg?height=200&width=200",
    views: 89,
    likes: 7,
  },
  {
    id: 3,
    title: "Wool Sweater",
    brand: "Uniqlo",
    points: 40,
    status: "redeemed",
    image: "/placeholder.svg?height=200&width=200",
    views: 156,
    likes: 12,
  },
]

const purchasedItems = [
  {
    id: 1,
    title: "Running Sneakers",
    brand: "Nike",
    swappedWith: "Sarah M.",
    date: "2024-01-15",
    image: "/placeholder.svg?height=200&width=200",
    type: "swap",
  },
  {
    id: 2,
    title: "Designer Handbag",
    brand: "Coach",
    redeemedFrom: "Emma K.",
    date: "2024-01-10",
    pointsUsed: 120,
    image: "/placeholder.svg?height=200&width=200",
    type: "redeemed",
  },
]

export default function ProfilePage() {
  const [feedbackOpen, setFeedbackOpen] = useState(false)
  const [reportOpen, setReportOpen] = useState(false)
  const [feedbackText, setFeedbackText] = useState("")
  const [reportType, setReportType] = useState("")
  const [reportDescription, setReportDescription] = useState("")

  const handleFeedbackSubmit = () => {
    // Handle feedback submission
    console.log("Feedback submitted:", feedbackText)
    setFeedbackText("")
    setFeedbackOpen(false)
  }

  const handleReportSubmit = () => {
    // Handle report submission
    console.log("Report submitted:", { type: reportType, description: reportDescription })
    setReportType("")
    setReportDescription("")
    setReportOpen(false)
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "available":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "sold":
        return "bg-gray-100 text-gray-800"
      case "redeemed":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/dashboard">
                <Button variant="ghost" size="sm" className="mr-4">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </Link>
              <h1 className="text-2xl font-bold text-green-700">ReWear</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
              <Image
                src={userData.profileImage || "/placeholder.svg"}
                alt={userData.name}
                width={120}
                height={120}
                className="rounded-full"
              />
              <div className="flex-1">
                <div className="flex items-center space-x-4 mb-2">
                  <h2 className="text-3xl font-bold">{userData.name}</h2>
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                </div>
                <div className="flex items-center space-x-4 text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span>
                      {userData.rating} ({userData.totalRatings} reviews)
                    </span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span>{userData.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>Joined {userData.joinedDate}</span>
                  </div>
                </div>
                <div className="flex items-center space-x-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">{userData.points}</div>
                    <div className="text-sm text-gray-600">Points</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">{userData.stats.totalListings}</div>
                    <div className="text-sm text-gray-600">Listings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">{userData.stats.completedSwaps}</div>
                    <div className="text-sm text-gray-600">Swaps</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">{userData.stats.itemsRedeemed}</div>
                    <div className="text-sm text-gray-600">Redeemed</div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex space-x-4 mb-8">
          <Dialog open={feedbackOpen} onOpenChange={setFeedbackOpen}>
            <DialogTrigger asChild>
              <Button className="bg-green-600 hover:bg-green-700">
                <MessageSquare className="h-4 w-4 mr-2" />
                Give Feedback
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Share Your Feedback</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="feedback">Your feedback helps us improve ReWear</Label>
                  <Textarea
                    id="feedback"
                    placeholder="Tell us about your experience..."
                    value={feedbackText}
                    onChange={(e) => setFeedbackText(e.target.value)}
                    rows={4}
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => setFeedbackOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleFeedbackSubmit} className="bg-green-600 hover:bg-green-700">
                    Submit Feedback
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog open={reportOpen} onOpenChange={setReportOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="text-red-600 border-red-600 hover:bg-red-50 bg-transparent">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Report Issue
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Report an Issue</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="reportType">Issue Type</Label>
                  <Select value={reportType} onValueChange={setReportType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select issue type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="fraud">Fraud/Scam</SelectItem>
                      <SelectItem value="fake_product">Fake Product</SelectItem>
                      <SelectItem value="no_delivery">No Delivery</SelectItem>
                      <SelectItem value="inappropriate">Inappropriate Content</SelectItem>
                      <SelectItem value="spam">Spam</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="reportDescription">Description</Label>
                  <Textarea
                    id="reportDescription"
                    placeholder="Please describe the issue in detail..."
                    value={reportDescription}
                    onChange={(e) => setReportDescription(e.target.value)}
                    rows={4}
                  />
                </div>
                <div className="flex justify-end space-x-2">
                  <Button variant="outline" onClick={() => setReportOpen(false)}>
                    Cancel
                  </Button>
                  <Button onClick={handleReportSubmit} className="bg-red-600 hover:bg-red-700">
                    Submit Report
                  </Button>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* Add Listing Button */}
          <Link href="/listing/new">
            <Button className="bg-blue-600 hover:bg-blue-700">
              + Add Listing
            </Button>
          </Link>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="listings" className="space-y-6">
          <TabsList>
            <TabsTrigger value="listings">My Listings</TabsTrigger>
            <TabsTrigger value="purchases">My Purchases</TabsTrigger>
          </TabsList>

          <TabsContent value="listings">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userListings.map((listing) => (
                <Card key={listing.id} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <Image
                      src={listing.image || "/placeholder.svg"}
                      alt={listing.title}
                      width={200}
                      height={200}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-semibold">{listing.title}</h4>
                        <Badge className={getStatusColor(listing.status)}>{listing.status}</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{listing.brand}</p>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold text-blue-600">{listing.points} points</span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-gray-600">
                        <div className="flex items-center space-x-4">
                          <span>{listing.views} views</span>
                          <div className="flex items-center">
                            <Heart className="h-4 w-4 mr-1" />
                            <span>{listing.likes}</span>
                          </div>
                        </div>
                        <Button variant="outline" size="sm">
                          Edit
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="purchases">
            <div className="space-y-4">
              {purchasedItems.map((item) => (
                <Card key={item.id}>
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        width={80}
                        height={80}
                        className="rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="font-semibold">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.brand}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-2">
                          <Badge variant={item.type === "swap" ? "default" : "secondary"}>
                            {item.type === "swap" ? "Swapped" : "Redeemed"}
                          </Badge>
                          <span>
                            {item.type === "swap"
                              ? `Swapped with ${item.swappedWith}`
                              : `Redeemed from ${item.redeemedFrom} for ${item.pointsUsed} points`}
                          </span>
                          <span>{new Date(item.date).toLocaleDateString()}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
