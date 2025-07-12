"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ArrowLeft, Heart, Share2, Star, MapPin, User, RefreshCw } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"

const listingData = {
  id: 1,
  title: "Vintage Denim Jacket",
  brand: "Levi's",
  size: "M",
  color: "Blue",
  condition: "Good",
  points: 50,
  images: [
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400",
  ],
  description:
    "Classic blue denim jacket in excellent condition. Perfect for casual wear and layering. Shows minimal signs of wear with authentic vintage character. From a smoke-free home.",
  owner: {
    name: "Sarah M.",
    rating: 4.8,
    totalRatings: 127,
    joinedDate: "March 2023",
    location: "San Francisco, CA",
    avatar: "/placeholder.svg?height=60&width=60",
  },
  availableFor: {
    swap: true,
    pointRedemption: true,
  },
  tags: ["denim", "vintage", "casual", "layering"],
  views: 234,
  likes: 18,
  postedDate: "2 days ago",
}

const similarProducts = [
  {
    id: 2,
    title: "Blue Denim Shirt",
    brand: "Gap",
    points: 30,
    image: "/placeholder.svg?height=200&width=200",
    condition: "Like New",
  },
  {
    id: 3,
    title: "Vintage Leather Jacket",
    brand: "Zara",
    points: 80,
    image: "/placeholder.svg?height=200&width=200",
    condition: "Good",
  },
  {
    id: 4,
    title: "Casual Blazer",
    brand: "H&M",
    points: 45,
    image: "/placeholder.svg?height=200&width=200",
    condition: "Excellent",
  },
  {
    id: 5,
    title: "Cotton Cardigan",
    brand: "Uniqlo",
    points: 40,
    image: "/placeholder.svg?height=200&width=200",
    condition: "Good",
  },
]

export default function ListingPage({ params }: { params: { id: string } }) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [isWishlisted, setIsWishlisted] = useState(false)
  const router = useRouter()

  const handleSimilarProductClick = (productId: number) => {
    router.push(`/listing/${productId}`)
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square rounded-lg overflow-hidden bg-white">
              <Image
                src={listingData.images[selectedImage] || "/placeholder.svg"}
                alt={listingData.title}
                width={500}
                height={500}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex space-x-2">
              {listingData.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? "border-green-500" : "border-gray-200"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${listingData.title} ${index + 1}`}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h1 className="text-3xl font-bold">{listingData.title}</h1>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" onClick={() => setIsWishlisted(!isWishlisted)}>
                    <Heart className={`h-5 w-5 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              <p className="text-xl text-gray-600 mb-4">{listingData.brand}</p>

              <div className="flex items-center space-x-4 mb-4">
                <Badge variant="secondary">Size {listingData.size}</Badge>
                <Badge variant="secondary">{listingData.color}</Badge>
                <Badge variant="outline" className="text-green-600">
                  {listingData.condition}
                </Badge>
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <div className="text-3xl font-bold text-blue-600">{listingData.points} points</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              {listingData.availableFor.swap && (
                <Button className="w-full bg-green-600 hover:bg-green-700" size="lg">
                  <RefreshCw className="h-5 w-5 mr-2" />
                  Propose Swap
                </Button>
              )}
              {listingData.availableFor.pointRedemption && (
                <Button
                  variant="outline"
                  className="w-full text-blue-600 border-blue-600 hover:bg-blue-50 bg-transparent"
                  size="lg"
                >
                  Redeem with Points
                </Button>
              )}
            </div>

            {/* Owner Info */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-4">
                  <Image
                    src={listingData.owner.avatar || "/placeholder.svg"}
                    alt={listingData.owner.name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold">{listingData.owner.name}</h3>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span>
                        {listingData.owner.rating} ({listingData.owner.totalRatings} reviews)
                      </span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>{listingData.owner.location}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    <User className="h-4 w-4 mr-2" />
                    View Profile
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Description</h3>
              <p className="text-gray-700 leading-relaxed">{listingData.description}</p>
            </div>

            {/* Tags */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {listingData.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    #{tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-6 text-sm text-gray-600">
              <span>{listingData.views} views</span>
              <span>{listingData.likes} likes</span>
              <span>Posted {listingData.postedDate}</span>
            </div>
          </div>
        </div>

        <Separator className="my-12" />

        {/* Similar Products */}
        <div>
          <h2 className="text-2xl font-bold mb-8">Similar Items You Might Like</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {similarProducts.map((product) => (
              <Card
                key={product.id}
                className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105"
                onClick={() => handleSimilarProductClick(product.id)}
              >
                <CardContent className="p-0">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.title}
                    width={200}
                    height={200}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold mb-2">{product.title}</h4>
                    <p className="text-sm text-gray-600 mb-2">{product.brand}</p>
                    <p className="text-sm text-green-600 mb-2">Condition: {product.condition}</p>
                    <div className="flex justify-center items-center">
                      <span className="font-bold text-blue-600">{product.points} pts</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
