"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Filter, Star, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"

const categoryListings = [
  {
    id: 1,
    title: "Vintage Denim Jacket",
    brand: "Levi's",
    size: "M",
    condition: "Good",
    points: 50,
    image: "/placeholder.svg?height=300&width=300",
    owner: "Sarah M.",
    rating: 4.8,
    location: "San Francisco, CA",
  },
  {
    id: 2,
    title: "Cotton T-Shirt",
    brand: "H&M",
    size: "L",
    condition: "Like New",
    points: 25,
    image: "/placeholder.svg?height=300&width=300",
    owner: "John D.",
    rating: 4.5,
    location: "Los Angeles, CA",
  },
  {
    id: 3,
    title: "Wool Sweater",
    brand: "Uniqlo",
    size: "M",
    condition: "Excellent",
    points: 40,
    image: "/placeholder.svg?height=300&width=300",
    owner: "Lisa T.",
    rating: 4.6,
    location: "New York, NY",
  },
  {
    id: 4,
    title: "Casual Shirt",
    brand: "Gap",
    size: "S",
    condition: "Good",
    points: 30,
    image: "/placeholder.svg?height=300&width=300",
    owner: "Mike R.",
    rating: 4.3,
    location: "Chicago, IL",
  },
  {
    id: 5,
    title: "Hoodie",
    brand: "Nike",
    size: "XL",
    condition: "Fair",
    points: 35,
    image: "/placeholder.svg?height=300&width=300",
    owner: "Emma K.",
    rating: 4.7,
    location: "Seattle, WA",
  },
  {
    id: 6,
    title: "Polo Shirt",
    brand: "Ralph Lauren",
    size: "M",
    condition: "Like New",
    points: 45,
    image: "/placeholder.svg?height=300&width=300",
    owner: "David L.",
    rating: 4.9,
    location: "Miami, FL",
  },
]

export default function CategoryPage({ params }: { params: { id: string } }) {
  const [sortBy, setSortBy] = useState("newest")
  const [filterBy, setFilterBy] = useState("all")
  const router = useRouter()

  const handleListingClick = (listingId: number) => {
    router.push(`/listing/${listingId}`)
  }

  const getCategoryName = (id: string) => {
    const categories = {
      "1": "Men's Clothing",
      "2": "Women's Clothing",
      "3": "Kids Clothing",
      "4": "Accessories",
      "5": "Shoes",
      "6": "Bags",
    }
    return categories[id as keyof typeof categories] || "Category"
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
        {/* Page Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-4">{getCategoryName(params.id)}</h2>
          <p className="text-gray-600">Discover sustainable fashion options in this category</p>
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div className="flex items-center gap-4">
            <Select value={filterBy} onValueChange={setFilterBy}>
              <SelectTrigger className="w-[180px]">
                <Filter className="h-4 w-4 mr-2" />
                <SelectValue placeholder="Filter by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Items</SelectItem>
                <SelectItem value="swap">Available for Swap</SelectItem>
                <SelectItem value="buy">Available to Buy</SelectItem>
                <SelectItem value="points">Point Redemption</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="points-low">Points: Low to High</SelectItem>
              <SelectItem value="points-high">Points: High to Low</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Listings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categoryListings.map((listing) => (
            <Card
              key={listing.id}
              className="cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105 group"
              onClick={() => handleListingClick(listing.id)}
            >
              <CardContent className="p-0">
                <div className="relative">
                  <Image
                    src={listing.image || "/placeholder.svg"}
                    alt={listing.title}
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 bg-white/80 hover:bg-white"
                    onClick={(e) => {
                      e.stopPropagation()
                      // Handle wishlist toggle
                    }}
                  >
                    <Heart className="h-4 w-4" />
                  </Button>
                </div>
                <div className="p-4">
                  <h4 className="font-semibold mb-2 group-hover:text-green-600 transition-colors">{listing.title}</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    {listing.brand} • Size {listing.size}
                  </p>
                  <p className="text-sm text-green-600 mb-2">Condition: {listing.condition}</p>
                  <div className="flex justify-center items-center mb-2">
                    <span className="text-lg font-bold text-blue-600">{listing.points} points</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">by {listing.owner}</span>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm ml-1">{listing.rating}</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500">{listing.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Items
          </Button>
        </div>
      </div>
    </div>
  )
}
