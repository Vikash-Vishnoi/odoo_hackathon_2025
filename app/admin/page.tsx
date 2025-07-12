"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, Package, ShoppingCart, Search, Filter, MoreHorizontal, CheckCircle, XCircle, Star } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const adminStats = {
  totalUsers: 1247,
  activeUsers: 1089,
  bannedUsers: 23,
  totalListings: 3456,
  activeListings: 2890,
  pendingListings: 234,
  totalOrders: 892,
  completedOrders: 756,
  pendingOrders: 89,
}

const usersData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    status: "active",
    joinDate: "2024-01-15",
    totalListings: 12,
    completedSwaps: 8,
    rating: 4.7,
    warnings: 0,
  },
  {
    id: 2,
    name: "Sarah Smith",
    email: "sarah@example.com",
    status: "active",
    joinDate: "2024-01-10",
    totalListings: 23,
    completedSwaps: 15,
    rating: 4.9,
    warnings: 0,
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike@example.com",
    status: "suspended",
    joinDate: "2023-12-20",
    totalListings: 5,
    completedSwaps: 2,
    rating: 3.2,
    warnings: 2,
  },
]

const listingsData = [
  {
    id: 1,
    title: "Vintage Denim Jacket",
    owner: "John Doe",
    category: "Men's Clothing",
    price: 45,
    status: "active",
    createdDate: "2024-01-20",
    views: 234,
    reports: 0,
  },
  {
    id: 2,
    title: "Designer Handbag",
    owner: "Sarah Smith",
    category: "Accessories",
    price: 180,
    status: "pending",
    createdDate: "2024-01-22",
    views: 89,
    reports: 1,
  },
  {
    id: 3,
    title: "Running Sneakers",
    owner: "Mike Johnson",
    category: "Shoes",
    price: 65,
    status: "reported",
    createdDate: "2024-01-18",
    views: 156,
    reports: 3,
  },
]

const ordersData = [
  {
    id: 1,
    buyer: "Emma Wilson",
    seller: "John Doe",
    item: "Vintage Denim Jacket",
    type: "swap",
    status: "completed",
    date: "2024-01-25",
    value: 45,
  },
  {
    id: 2,
    buyer: "David Brown",
    seller: "Sarah Smith",
    item: "Designer Handbag",
    type: "purchase",
    status: "pending",
    date: "2024-01-26",
    value: 180,
  },
  {
    id: 3,
    buyer: "Lisa Garcia",
    seller: "Mike Johnson",
    item: "Running Sneakers",
    type: "points",
    status: "disputed",
    date: "2024-01-24",
    value: 75,
  },
]

const reportsData = [
  {
    id: 1,
    reportedUser: "Mike Johnson",
    reporterUser: "Sarah Smith",
    type: "fraud",
    description: "User didn't send the item after swap was confirmed",
    status: "investigating",
    date: "2024-01-25",
    evidence: ["screenshot1.jpg"],
  },
  {
    id: 2,
    reportedUser: "John Doe",
    reporterUser: "Emma Wilson",
    type: "fake_product",
    description: "Item received was not as described in listing",
    status: "resolved",
    date: "2024-01-24",
    evidence: [],
  },
  {
    id: 3,
    reportedUser: "Lisa Garcia",
    reporterUser: "David Brown",
    type: "inappropriate_content",
    description: "Inappropriate images in product listing",
    status: "pending",
    date: "2024-01-26",
    evidence: ["report_image.jpg"],
  },
]

const feedbackData = [
  {
    id: 1,
    fromUser: "Sarah Smith",
    feedback: "Great platform! Love the point system and easy swapping process.",
    rating: 5,
    date: "2024-01-25",
    category: "general",
  },
  {
    id: 2,
    fromUser: "John Doe",
    feedback: "Could use better search filters, but overall good experience.",
    rating: 4,
    date: "2024-01-24",
    category: "feature_request",
  },
  {
    id: 3,
    fromUser: "Emma Wilson",
    feedback: "Amazing community! Found so many great items through swaps.",
    rating: 5,
    date: "2024-01-23",
    category: "general",
  },
]

export default function AdminPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-800"
      case "pending":
        return "bg-yellow-100 text-yellow-800"
      case "suspended":
        return "bg-red-100 text-red-800"
      case "banned":
        return "bg-red-100 text-red-800"
      case "completed":
        return "bg-green-100 text-green-800"
      case "disputed":
        return "bg-red-100 text-red-800"
      case "reported":
        return "bg-orange-100 text-orange-800"
      case "investigating":
        return "bg-blue-100 text-blue-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const handleUserAction = (userId: number, action: string) => {
    console.log(`${action} user ${userId}`)
    if (action === "unban") {
      // Handle unban logic
      console.log(`User ${userId} has been unbanned`)
    }
    // Handle other user actions (ban, unban, warn, etc.)
  }

  const handleListingAction = (listingId: number, action: string) => {
    console.log(`${action} listing ${listingId}`)
    // Handle listing actions (approve, reject, remove, etc.)
  }

  const handleOrderAction = (orderId: number, action: string) => {
    console.log(`${action} order ${orderId}`)
    // Handle order actions (resolve, cancel, etc.)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-green-700">ReWear Admin Panel</h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome, Admin</span>
              <Button variant="outline" size="sm">
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{adminStats.totalUsers}</div>
              <p className="text-xs text-muted-foreground">
                {adminStats.activeUsers} active, {adminStats.bannedUsers} banned
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Listings</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{adminStats.totalListings}</div>
              <p className="text-xs text-muted-foreground">
                {adminStats.activeListings} active, {adminStats.pendingListings} pending
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{adminStats.totalOrders}</div>
              <p className="text-xs text-muted-foreground">
                {adminStats.completedOrders} completed, {adminStats.pendingOrders} pending
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Management Tabs */}
        <Tabs defaultValue="users" className="space-y-6">
          <TabsList>
            <TabsTrigger value="users">Manage Users</TabsTrigger>
            <TabsTrigger value="listings">Manage Listings</TabsTrigger>
            <TabsTrigger value="orders">Manage Orders</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
            <TabsTrigger value="feedback">Feedback</TabsTrigger>
          </TabsList>

          <TabsContent value="users">
            <Card>
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <div className="flex items-center space-x-4">
                  <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search users..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger className="w-[180px]">
                      <Filter className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Users</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="suspended">Suspended</SelectItem>
                      <SelectItem value="banned">Banned</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Join Date</TableHead>
                      <TableHead>Listings</TableHead>
                      <TableHead>Rating</TableHead>
                      <TableHead>Warnings</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {usersData.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(user.status)}>{user.status}</Badge>
                        </TableCell>
                        <TableCell>{user.joinDate}</TableCell>
                        <TableCell>{user.totalListings}</TableCell>
                        <TableCell>{user.rating}</TableCell>
                        <TableCell>{user.warnings}</TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem onClick={() => handleUserAction(user.id, "view")}>
                                View Profile
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleUserAction(user.id, "warn")}>
                                Issue Warning
                              </DropdownMenuItem>
                              {user.status === "active" ? (
                                <>
                                  <DropdownMenuItem onClick={() => handleUserAction(user.id, "suspend")}>
                                    Suspend User
                                  </DropdownMenuItem>
                                  <DropdownMenuItem
                                    onClick={() => handleUserAction(user.id, "ban")}
                                    className="text-red-600"
                                  >
                                    Ban User
                                  </DropdownMenuItem>
                                </>
                              ) : (
                                <DropdownMenuItem
                                  onClick={() => handleUserAction(user.id, "unban")}
                                  className="text-green-600"
                                >
                                  Remove Ban
                                </DropdownMenuItem>
                              )}
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="listings">
            <Card>
              <CardHeader>
                <CardTitle>Listing Management</CardTitle>
                <div className="flex items-center space-x-4">
                  <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input placeholder="Search listings..." className="pl-10" />
                  </div>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <Filter className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Listings</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="reported">Reported</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Owner</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Views</TableHead>
                      <TableHead>Reports</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {listingsData.map((listing) => (
                      <TableRow key={listing.id}>
                        <TableCell className="font-medium">{listing.title}</TableCell>
                        <TableCell>{listing.owner}</TableCell>
                        <TableCell>{listing.category}</TableCell>
                        <TableCell>${listing.price}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(listing.status)}>{listing.status}</Badge>
                        </TableCell>
                        <TableCell>{listing.views}</TableCell>
                        <TableCell>{listing.reports}</TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem onClick={() => handleListingAction(listing.id, "view")}>
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleListingAction(listing.id, "approve")}>
                                <CheckCircle className="h-4 w-4 mr-2" />
                                Approve
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() => handleListingAction(listing.id, "reject")}
                                className="text-red-600"
                              >
                                <XCircle className="h-4 w-4 mr-2" />
                                Reject
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() => handleListingAction(listing.id, "remove")}
                                className="text-red-600"
                              >
                                Remove Listing
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders">
            <Card>
              <CardHeader>
                <CardTitle>Order Management</CardTitle>
                <div className="flex items-center space-x-4">
                  <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input placeholder="Search orders..." className="pl-10" />
                  </div>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <Filter className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Orders</SelectItem>
                      <SelectItem value="completed">Completed</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="disputed">Disputed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Order ID</TableHead>
                      <TableHead>Buyer</TableHead>
                      <TableHead>Seller</TableHead>
                      <TableHead>Item</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Value</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {ordersData.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell className="font-medium">#{order.id}</TableCell>
                        <TableCell>{order.buyer}</TableCell>
                        <TableCell>{order.seller}</TableCell>
                        <TableCell>{order.item}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{order.type}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(order.status)}>{order.status}</Badge>
                        </TableCell>
                        <TableCell>${order.value}</TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem onClick={() => handleOrderAction(order.id, "view")}>
                                View Details
                              </DropdownMenuItem>
                              <DropdownMenuItem onClick={() => handleOrderAction(order.id, "resolve")}>
                                <CheckCircle className="h-4 w-4 mr-2" />
                                Resolve
                              </DropdownMenuItem>
                              <DropdownMenuItem
                                onClick={() => handleOrderAction(order.id, "cancel")}
                                className="text-red-600"
                              >
                                <XCircle className="h-4 w-4 mr-2" />
                                Cancel Order
                              </DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <CardTitle>User Reports</CardTitle>
                <div className="flex items-center space-x-4">
                  <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input placeholder="Search reports..." className="pl-10" />
                  </div>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <Filter className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Filter by status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Reports</SelectItem>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="investigating">Investigating</SelectItem>
                      <SelectItem value="resolved">Resolved</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Reported User</TableHead>
                      <TableHead>Reporter</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Description</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {reportsData.map((report) => (
                      <TableRow key={report.id}>
                        <TableCell className="font-medium">{report.reportedUser}</TableCell>
                        <TableCell>{report.reporterUser}</TableCell>
                        <TableCell>
                          <Badge variant="outline">{report.type.replace("_", " ")}</Badge>
                        </TableCell>
                        <TableCell className="max-w-xs truncate">{report.description}</TableCell>
                        <TableCell>
                          <Badge className={getStatusColor(report.status)}>{report.status}</Badge>
                        </TableCell>
                        <TableCell>{report.date}</TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>View Details</DropdownMenuItem>
                              <DropdownMenuItem>Mark as Investigating</DropdownMenuItem>
                              <DropdownMenuItem>Resolve Report</DropdownMenuItem>
                              <DropdownMenuItem className="text-red-600">Dismiss Report</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="feedback">
            <Card>
              <CardHeader>
                <CardTitle>User Feedback</CardTitle>
                <div className="flex items-center space-x-4">
                  <div className="relative flex-1 max-w-sm">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                    <Input placeholder="Search feedback..." className="pl-10" />
                  </div>
                  <Select>
                    <SelectTrigger className="w-[180px]">
                      <Filter className="h-4 w-4 mr-2" />
                      <SelectValue placeholder="Filter by rating" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Ratings</SelectItem>
                      <SelectItem value="5">5 Stars</SelectItem>
                      <SelectItem value="4">4 Stars</SelectItem>
                      <SelectItem value="3">3 Stars</SelectItem>
                      <SelectItem value="2">2 Stars</SelectItem>
                      <SelectItem value="1">1 Star</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Feedback</TableHead>
                      <TableHead>Rating</TableHead>
                      <TableHead>Category</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {feedbackData.map((feedback) => (
                      <TableRow key={feedback.id}>
                        <TableCell className="font-medium">{feedback.fromUser}</TableCell>
                        <TableCell className="max-w-md truncate">{feedback.feedback}</TableCell>
                        <TableCell>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                            <span>{feedback.rating}</span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Badge variant="secondary">{feedback.category.replace("_", " ")}</Badge>
                        </TableCell>
                        <TableCell>{feedback.date}</TableCell>
                        <TableCell>
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button variant="ghost" className="h-8 w-8 p-0">
                                <MoreHorizontal className="h-4 w-4" />
                              </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                              <DropdownMenuItem>View Full Feedback</DropdownMenuItem>
                              <DropdownMenuItem>Mark as Reviewed</DropdownMenuItem>
                              <DropdownMenuItem>Contact User</DropdownMenuItem>
                            </DropdownMenuContent>
                          </DropdownMenu>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
