import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Recycle, Users, Heart, Leaf } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About ReWear</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Building a sustainable future through fashion exchange and community-driven clothing reuse
          </p>
        </div>

        {/* Mission Statement */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <div className="text-center">
              <Leaf className="h-16 w-16 text-green-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                ReWear is dedicated to revolutionizing the fashion industry by creating a sustainable platform where
                clothing gets a second life. We believe that every piece of clothing has value and potential beyond its
                first owner. Through our innovative exchange system, we're building a community that values
                sustainability, creativity, and conscious consumption.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* How It Works */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-12">How ReWear Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Recycle className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="text-xl font-semibold mb-3">List Your Items</h4>
                <p className="text-gray-600">
                  Upload photos and details of clothing items you no longer wear. Set them available for swap, sale, or
                  point redemption.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Connect & Exchange</h4>
                <p className="text-gray-600">
                  Browse items from other users, propose swaps, make purchases, or use earned points to get items you
                  love.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="text-xl font-semibold mb-3">Build Community</h4>
                <p className="text-gray-600">
                  Rate your experiences, build trust within the community, and help create a sustainable fashion
                  ecosystem.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Our Impact */}
        <Card className="mb-12">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-center mb-8">Our Environmental Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">15,000+</div>
                <div className="text-sm text-gray-600">Items Exchanged</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">8,500</div>
                <div className="text-sm text-gray-600">Kg CO2 Saved</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">12,000</div>
                <div className="text-sm text-gray-600">Liters Water Saved</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">3,200</div>
                <div className="text-sm text-gray-600">Active Users</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Our Story */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8">Our Story</h3>
          <div className="prose prose-lg mx-auto text-gray-700">
            <p className="mb-6">
              ReWear was born from a simple observation: our closets are full of clothes we rarely wear, while the
              fashion industry continues to be one of the world's largest polluters. We realized that the solution
              wasn't just about buying less, but about creating a system where clothes could easily find new homes and
              new purposes.
            </p>
            <p className="mb-6">
              Founded in 2023 by a team of sustainability advocates and tech enthusiasts, ReWear started as a small
              community project. We wanted to make clothing exchange as easy as online shopping, while building trust
              and community among users. Today, we're proud to be part of the circular economy movement, helping
              thousands of people give their clothes a second life.
            </p>
            <p>
              Our platform combines the convenience of modern technology with the values of sustainability and
              community. Every swap, every purchase, and every point earned contributes to a more sustainable future for
              fashion.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8">Our Values</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-3 text-green-600">Sustainability First</h4>
                <p className="text-gray-700">
                  Every decision we make is guided by our commitment to environmental sustainability. We measure our
                  success not just in transactions, but in the positive impact we create for our planet.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-3 text-blue-600">Community Trust</h4>
                <p className="text-gray-700">
                  We believe that trust is the foundation of any successful exchange. Our rating system, verification
                  processes, and community guidelines ensure safe and positive experiences for all users.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-3 text-purple-600">Accessibility</h4>
                <p className="text-gray-700">
                  Sustainable fashion should be accessible to everyone. Our point system and diverse exchange options
                  ensure that users from all economic backgrounds can participate in the circular fashion economy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold mb-3 text-orange-600">Innovation</h4>
                <p className="text-gray-700">
                  We continuously innovate to make clothing exchange more convenient, secure, and enjoyable. Technology
                  should serve sustainability, not the other way around.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Join the ReWear Community</h3>
            <p className="text-lg mb-6">
              Be part of the sustainable fashion revolution. Start exchanging, start saving the planet, one piece of
              clothing at a time.
            </p>
            <Link href="/dashboard">
              <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100">
                Get Started Today
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
