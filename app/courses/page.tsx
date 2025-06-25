import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Clock, Users, Globe, Star, ArrowRight } from "lucide-react"

const courses = [
  {
    id: "starter-track",
    name: "Starter Track",
    duration: "45 Days",
    marketplaces: ["Amazon.in"],
    idealFor: "New sellers setting up their first store",
    fee: "₹5,999",
    level: "Beginner",
    features: [
      "Account setup and optimization",
      "Product listing and photography",
      "Basic inventory management",
      "Customer service fundamentals",
      "GST and compliance basics",
      "Live support during training",
    ],
    highlights: ["Perfect for beginners", "Step-by-step guidance", "Real account implementation"],
  },
  {
    id: "growth-track",
    name: "Growth Track",
    duration: "60 Days",
    marketplaces: ["Amazon.in", "Flipkart"],
    idealFor: "Sellers scaling to multiple platforms",
    fee: "₹9,999",
    level: "Intermediate",
    features: [
      "Multi-platform management",
      "Advanced advertising strategies",
      "Inventory optimization",
      "Brand building fundamentals",
      "Analytics and reporting",
      "Cross-platform logistics",
    ],
    highlights: ["Multi-platform expertise", "Advanced marketing tactics", "Scaling strategies"],
  },
  {
    id: "pro-track",
    name: "Pro Track",
    duration: "90 Days",
    marketplaces: ["Amazon.in", "Flipkart", "Meesho", "Amazon Global"],
    idealFor: "Serious entrepreneurs building long-term brands",
    fee: "₹15,999",
    level: "Advanced",
    features: [
      "Global marketplace expansion",
      "Advanced brand building",
      "International logistics",
      "Advanced analytics and automation",
      "Team management strategies",
      "Long-term business planning",
    ],
    highlights: ["Complete business mastery", "International expansion", "Enterprise-level strategies"],
  },
]

const courseComparison = [
  { feature: "Live Training Sessions", starter: true, growth: true, pro: true },
  { feature: "Real Account Implementation", starter: true, growth: true, pro: true },
  { feature: "Lifetime Community Access", starter: true, growth: true, pro: true },
  { feature: "Amazon.in Training", starter: true, growth: true, pro: true },
  { feature: "Flipkart Training", starter: false, growth: true, pro: true },
  { feature: "Meesho Training", starter: false, growth: false, pro: true },
  { feature: "Amazon Global Training", starter: false, growth: false, pro: true },
  { feature: "Advanced Advertising", starter: false, growth: true, pro: true },
  { feature: "Brand Building", starter: false, growth: true, pro: true },
  { feature: "International Logistics", starter: false, growth: false, pro: true },
]

export default function CoursesPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Our Training Programs
          </Badge>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Choose Your eCommerce Success Path</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Three carefully designed training programs to suit different levels of sellers. Each course includes live
            training, practical learning, and lifetime support.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {courses.map((course) => (
            <Card
              key={course.id}
              className={`relative overflow-hidden hover:shadow-xl transition-all duration-300 ${course.level === "Advanced" ? "ring-2 ring-blue-500 scale-105" : ""}`}
            >
              {course.level === "Advanced" && (
                <div className="absolute top-0 left-0 right-0 bg-blue-500 text-white text-center py-2 text-sm font-medium">
                  Most Popular
                </div>
              )}

              <CardHeader className={course.level === "Advanced" ? "pt-12" : ""}>
                <div className="flex justify-between items-start mb-4">
                  <Badge variant={course.level === "Advanced" ? "default" : "secondary"}>{course.level}</Badge>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-blue-600">{course.fee}</div>
                    <div className="text-sm text-gray-500">one-time payment</div>
                  </div>
                </div>

                <CardTitle className="text-2xl mb-2">{course.name}</CardTitle>
                <CardDescription className="text-base mb-4">{course.idealFor}</CardDescription>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-blue-500" />
                    <span>{course.duration} Training</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Globe className="h-4 w-4 text-blue-500" />
                    <span>{course.marketplaces.join(", ")}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">What You'll Learn:</h4>
                  <ul className="space-y-2">
                    {course.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Course Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {course.highlights.map((highlight, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full" size="lg" asChild>
                    <Link href={`/checkout?course=${course.id}`}>
                      Enroll Now
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Course Comparison Table */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Course Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse bg-white rounded-lg shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-4 font-semibold">Features</th>
                  <th className="text-center p-4 font-semibold">Starter Track</th>
                  <th className="text-center p-4 font-semibold">Growth Track</th>
                  <th className="text-center p-4 font-semibold">Pro Track</th>
                </tr>
              </thead>
              <tbody>
                {courseComparison.map((row, index) => (
                  <tr key={index} className="border-t">
                    <td className="p-4 font-medium">{row.feature}</td>
                    <td className="text-center p-4">
                      {row.starter ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                    </td>
                    <td className="text-center p-4">
                      {row.growth ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                    </td>
                    <td className="text-center p-4">
                      {row.pro ? (
                        <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Why Choose Our Courses */}
        <div className="bg-blue-50 rounded-2xl p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Our Training?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">300+ Brands Helped</h3>
              <p className="text-sm text-gray-600">Learn from trainers with real success stories</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Star className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">100+ Success Stories</h3>
              <p className="text-sm text-gray-600">Join our community of successful sellers</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Live Training</h3>
              <p className="text-sm text-gray-600">Interactive sessions, not boring videos</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Globe className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Lifetime Support</h3>
              <p className="text-sm text-gray-600">Ongoing guidance even after course completion</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
