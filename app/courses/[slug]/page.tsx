import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Clock, Users, Globe, Star, Play, ArrowLeft, BookOpen } from "lucide-react"

const courseData = {
  "starter-track": {
    id: "starter-track",
    name: "Starter Track",
    duration: "45 Days",
    marketplaces: ["Amazon.in"],
    idealFor: "New sellers setting up their first store",
    fee: "₹5,999",
    level: "Beginner",
    description:
      "Perfect for beginners who want to start their eCommerce journey on Amazon.in. Learn everything from account setup to your first sale.",
    modules: [
      {
        week: "Week 1-2",
        title: "Foundation & Setup",
        topics: [
          "Amazon seller account creation and verification",
          "Understanding Amazon's policies and guidelines",
          "GST registration and tax compliance",
          "Setting up your seller dashboard",
        ],
      },
      {
        week: "Week 3-4",
        title: "Product Research & Listing",
        topics: [
          "Product research techniques and tools",
          "Competitor analysis strategies",
          "Creating compelling product listings",
          "Product photography basics",
        ],
      },
      {
        week: "Week 5-6",
        title: "Inventory & Operations",
        topics: [
          "Inventory management fundamentals",
          "FBA vs FBM decision making",
          "Shipping and logistics setup",
          "Customer service best practices",
        ],
      },
    ],
    bonuses: [
      "Product research template",
      "Listing optimization checklist",
      "Customer service scripts",
      "30-day action plan",
    ],
  },
  "growth-track": {
    id: "growth-track",
    name: "Growth Track",
    duration: "60 Days",
    marketplaces: ["Amazon.in", "Flipkart"],
    idealFor: "Sellers scaling to multiple platforms",
    fee: "₹9,999",
    level: "Intermediate",
    description:
      "Scale your business across multiple platforms with advanced strategies for Amazon.in and Flipkart. Perfect for sellers ready to grow.",
    modules: [
      {
        week: "Week 1-2",
        title: "Multi-Platform Strategy",
        topics: [
          "Platform comparison and selection",
          "Account setup for multiple marketplaces",
          "Cross-platform inventory management",
          "Unified brand strategy",
        ],
      },
      {
        week: "Week 3-5",
        title: "Advanced Marketing",
        topics: [
          "Amazon PPC campaigns mastery",
          "Flipkart advertising strategies",
          "SEO optimization for marketplaces",
          "Brand building fundamentals",
        ],
      },
      {
        week: "Week 6-8",
        title: "Scaling & Optimization",
        topics: [
          "Analytics and performance tracking",
          "Inventory forecasting and planning",
          "Customer retention strategies",
          "Profit optimization techniques",
        ],
      },
    ],
    bonuses: [
      "Multi-platform management dashboard",
      "Advanced PPC templates",
      "Brand building toolkit",
      "Scaling roadmap",
    ],
  },
  "pro-track": {
    id: "pro-track",
    name: "Pro Track",
    duration: "90 Days",
    marketplaces: ["Amazon.in", "Flipkart", "Meesho", "Amazon Global"],
    idealFor: "Serious entrepreneurs building long-term brands",
    fee: "₹15,999",
    level: "Advanced",
    description:
      "Complete mastery of eCommerce across all major platforms including international expansion. Build a sustainable, scalable business.",
    modules: [
      {
        week: "Week 1-3",
        title: "Enterprise Foundation",
        topics: [
          "Business structure and legal setup",
          "Advanced account management",
          "Multi-platform integration strategies",
          "Team building and delegation",
        ],
      },
      {
        week: "Week 4-7",
        title: "Global Expansion",
        topics: [
          "Amazon Global marketplace setup",
          "International logistics and shipping",
          "Cross-border compliance and regulations",
          "Currency and payment management",
        ],
      },
      {
        week: "Week 8-12",
        title: "Brand Mastery & Automation",
        topics: [
          "Advanced brand building strategies",
          "Marketing automation and tools",
          "Data analytics and business intelligence",
          "Long-term business planning and exit strategies",
        ],
      },
    ],
    bonuses: [
      "International expansion toolkit",
      "Brand building masterclass",
      "Automation setup guide",
      "Business planning templates",
    ],
  },
}

export default async function CoursePage({ params }: { params: { slug: string } }) {
  const { slug } = await params
  const course = courseData[slug as keyof typeof courseData]
  
if (!course) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Course Not Found</h1>
          <Button asChild>
            <Link href="/courses">Back to Courses</Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Button variant="ghost" asChild>
              <Link href="/courses">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Courses
              </Link>
            </Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <Badge variant="secondary">{course.level} Level</Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">{course.name}</h1>
                <p className="text-xl text-gray-600">{course.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-blue-500" />
                  <span>{course.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-blue-500" />
                  <span>Live Training</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-4 w-4 text-blue-500" />
                  <span>{course.marketplaces.join(", ")}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-blue-500" />
                  <span>Lifetime Support</span>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-3xl font-bold text-blue-600">{course.fee}</div>
                    <div className="text-sm text-gray-500">One-time payment</div>
                  </div>
                  <Badge variant="outline" className="text-green-600 border-green-600">
                    Limited Time Offer
                  </Badge>
                </div>
                <Button size="lg" className="w-full mb-3" asChild>
                  <Link href={`/checkout?course=${course.id}`}>Enroll Now - {course.fee}</Link>
                </Button>
                <Button size="lg" variant="outline" className="w-full">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Free Demo
                </Button>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt={`${course.name} Course`}
                width={500}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Course Curriculum</h2>
            <p className="text-xl text-gray-600">Structured learning path designed for maximum results</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {course.modules.map((module, index) => (
                <AccordionItem key={index} value={`module-${index}`} className="bg-gray-50 rounded-lg px-6">
                  <AccordionTrigger className="text-left">
                    <div className="flex items-center gap-4">
                      <div className="bg-blue-100 rounded-full p-2">
                        <BookOpen className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-lg">{module.title}</div>
                        <div className="text-sm text-gray-500">{module.week}</div>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <ul className="space-y-2 ml-12">
                      {module.topics.map((topic, topicIndex) => (
                        <li key={topicIndex} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Exclusive Bonuses</h2>
            <p className="text-xl text-gray-600">Additional resources to accelerate your success</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {course.bonuses.map((bonus, index) => (
              <Card key={index} className="p-6">
                <CardContent className="flex items-center gap-4">
                  <div className="bg-yellow-100 rounded-full p-3">
                    <Star className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{bonus}</h3>
                    <p className="text-sm text-gray-600">Included with your enrollment</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">Join hundreds of successful sellers who started with {course.name}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
              <Link href={`/checkout?course=${slug}`}>Enroll Now - {course.fee}</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 text-white border-white hover:bg-white hover:text-blue-600"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo First
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
