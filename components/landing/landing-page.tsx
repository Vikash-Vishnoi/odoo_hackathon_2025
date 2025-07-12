"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Search, User, ShoppingBag, Heart, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"

const categories = [
  { id: 1, name: "Men's Clothing", image: "/placeholder.svg?height=200&width=200", count: 245 },
  { id: 2, name: "Women's Clothing", image: "/placeholder.svg?height=200&width=200", count: 389 },
  { id: 3, name: "Kids Clothing", image: "/placeholder.svg?height=200&width=200", count: 156 },
  { id: 4, name: "Accessories", image: "/placeholder.svg?height=200&width=200", count: 98 },
  { id: 5, name: "Shoes", image: "/placeholder.svg?height=200&width=200", count: 167 },
  { id: 6, name: "Bags", image: "/placeholder.svg?height=200&width=200", count: 89 },
]

const featuredListings = [
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
  },
  {
    id: 2,
    title: "Designer Handbag",
    brand: "Coach",
    size: "One Size",
    condition: "Like New",
    points: 120,
    image: "/placeholder.svg?height=300&width=300",
    owner: "Emma K.",
    rating: 4.9,
  },
  {
    id: 3,
    title: "Running Sneakers",
    brand: "Nike",
    size: "9",
    condition: "Good",
    points: 75,
    image: "/placeholder.svg?height=300&width=300",
    owner: "Mike R.",
    rating: 4.7,
  },
  {
    id: 4,
    title: "Wool Sweater",
    brand: "Uniqlo",
    size: "L",
    condition: "Excellent",
    points: 40,
    image: "/placeholder.svg?height=300&width=300",
    owner: "Lisa T.",
    rating: 4.6,
  },
]

export default function LandingPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const router = useRouter()

  const handleCategoryClick = (categoryId: number) => {
    router.push(`/category/${categoryId}`)
  }

  const handleListingClick = (listingId: number) => {
    router.push(`/listing/${listingId}`)
  }

  // Update the points display in the header to show user has points
  const userPoints = 345 // 245 + 100 welcome bonus

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-green-700">ReWear</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/dashboard" className="text-gray-700 hover:text-green-600">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-green-600">
                About
              </Link>
              <Link href="/profile" className="text-gray-700 hover:text-green-600">
                Profile
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center bg-blue-50 px-3 py-1 rounded-full">
                <span className="text-sm font-medium text-blue-700">{userPoints} points</span>
              </div>
              <Button variant="ghost" size="sm">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="sm">
                <ShoppingBag className="h-5 w-5" />
              </Button>
              <Link href="/profile">
                <Button variant="ghost" size="sm">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Search */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Sustainable Fashion Exchange</h2>
          <p className="text-xl mb-8">Swap, Buy, or Redeem with Points - Give Your Clothes a New Life</p>

          <div className="max-w-2xl mx-auto">
            <div className="flex">
              <Input
                type="text"
                placeholder="Search for clothing, brands, or categories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 text-gray-900"
              />
              <Button className="ml-2 bg-white text-green-600 hover:bg-gray-100">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12">Shop by Category</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <Card
                key={category.id}
                className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105"
                onClick={() => handleCategoryClick(category.id)}
              >
                <CardContent className="p-4 text-center">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    width={120}
                    height={120}
                    className="mx-auto mb-4 rounded-lg"
                  />
                  <h4 className="font-semibold mb-2">{category.name}</h4>
                  <p className="text-sm text-gray-600">{category.count} items</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Listings */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center mb-12">Featured Listings</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredListings.map((listing) => (
              <Card
                key={listing.id}
                className="cursor-pointer hover:shadow-xl transition-all duration-300 hover:scale-105"
                onClick={() => handleListingClick(listing.id)}
              >
                <CardContent className="p-0">
                  <Image
                    src={listing.image || "/placeholder.svg"}
                    alt={listing.title}
                    width={300}
                    height={300}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold mb-2">{listing.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">
                      {listing.brand} • Size {listing.size}
                    </p>
                    <p className="text-sm text-green-600 mb-2">Condition: {listing.condition}</p>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-bold text-blue-600">{listing.points} points</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">by {listing.owner}</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm ml-1">{listing.rating}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">ReWear</h4>
              <p className="text-gray-300">Promoting sustainable fashion through clothing exchange and reuse.</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Quick Links</h5>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/how-it-works" className="text-gray-300 hover:text-white">
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-300 hover:text-white">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Categories</h5>
              <ul className="space-y-2">
                <li>
                  <Link href="/category/1" className="text-gray-300 hover:text-white">
                    Men's Clothing
                  </Link>
                </li>
                <li>
                  <Link href="/category/2" className="text-gray-300 hover:text-white">
                    Women's Clothing
                  </Link>
                </li>
                <li>
                  <Link href="/category/3" className="text-gray-300 hover:text-white">
                    Kids Clothing
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Support</h5>
              <ul className="space-y-2">
                <li>
                  <Link href="/help" className="text-gray-300 hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/safety" className="text-gray-300 hover:text-white">
                    Safety
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-300 hover:text-white">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-300">&copy; 2024 ReWear. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
