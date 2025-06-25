import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { CheckCircle, Users, Clock, Globe, Star, Play, ArrowRight } from "lucide-react"

const courses = [
  {
    id: "starter-track",
    name: "Starter Track",
    duration: "45 Days",
    marketplaces: "Amazon.in",
    idealFor: "New sellers setting up their first store",
    fee: "₹5,999",
    level: "Beginner",
  },
  {
    id: "growth-track",
    name: "Growth Track",
    duration: "60 Days",
    marketplaces: "Amazon.in + Flipkart",
    idealFor: "Sellers scaling to multiple platforms",
    fee: "₹9,999",
    level: "Intermediate",
  },
  {
    id: "pro-track",
    name: "Pro Track",
    duration: "90 Days",
    marketplaces: "Amazon.in, Flipkart, Meesho, Amazon Global",
    idealFor: "Serious entrepreneurs building long-term brands",
    fee: "₹15,999",
    level: "Advanced",
  },
]

const successStories = [
  {
    name: "Rohan K.",
    location: "Delhi",
    story:
      "From 0 to 1.2L/month in sales! Path 2 Ecom's live training helped me launch my Amazon store in 30 days - without any agency!",
    image: "success1.jpeg",
  },
  {
    name: "Priya M.",
    location: "Bangalore",
    story:
      "Saved ₹70K/year in agency fees! Now I manage my Flipkart ads myself. The step-by-step demos made it so easy.",
    image: "success2.jpeg",
  },
  {
    name: "Vikram S.",
    location: "Jaipur",
    story:
      "Hindi + English training was a game-changer! No more confusion about GST or logistics. My business is finally profitable.",
    image: "success3.jpeg",
  },
]

const benefits = [
  {
    icon: <Users className="h-6 w-6" />,
    title: "Learn From Industry Experts",
    description: "Get trained directly by eCommerce professionals who have helped over 300+ brands grow and succeed.",
  },
  {
    icon: <Play className="h-6 w-6" />,
    title: "Live, Practical Training",
    description:
      "No boring pre-recorded videos! Our course is conducted through live sessions with real-time interaction.",
  },
  {
    icon: <CheckCircle className="h-6 w-6" />,
    title: "A to Z Business Management",
    description: "From setting up your store to scaling your profits - we cover every important step of eCommerce.",
  },
  {
    icon: <Globe className="h-6 w-6" />,
    title: "No More Dependency on Agencies",
    description: "After completing our course, you'll be confident enough to manage your business independently.",
  },
]

const faqs = [
  {
    question: "Who can join these e-commerce courses?",
    answer:
      "Anyone interested in starting or growing their eCommerce business can join. No prior experience required for our Starter Track.",
  },
  {
    question: "What marketplaces are covered in the courses?",
    answer: "We cover Amazon.in, Flipkart, Meesho, and Amazon Global depending on the course level you choose.",
  },
  {
    question: "Are these live sessions or recorded videos?",
    answer:
      "All courses are conducted through live training sessions with industry experts. This allows for real-time interaction, doubt solving, and practical learning.",
  },
  {
    question: "Can I really manage my eCommerce business without any agency after this course?",
    answer:
      "Our comprehensive training is designed to make you self-reliant. You'll learn everything needed to run your business independently.",
  },
  {
    question: "What if I miss a live session?",
    answer:
      "If you miss a session, you'll get limited-time access to the session recording, so you don't fall behind. However, we encourage attending live sessions for best results.",
  },
  {
    question: "Is there any support available during or after the course?",
    answer:
      "Yes! We provide ongoing support throughout your journey. Get help, guidance, and expert feedback whenever you need it, even after course completion.",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm">
                  300+ Brands Helped | 100+ Success Stories
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Turn Your eCommerce Dreams into Reality
                </h1>
                <p className="text-xl text-gray-600">
                  Learn From 300+ Brand Builders with Live training, Real implementation, and Lifetime support
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Free Demo
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8" asChild>
                  <Link href="/courses">
                    Explore Courses
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              <div className="flex items-center gap-8 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  45-90 Day Programs
                </div>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  Live Training
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="eCommerce Success Illustration"
                width={600}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Who we are
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              We empower Indian sellers with practical, affordable training to ditch costly agencies
            </h2>
            <div className="flex justify-center items-center gap-4 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600">10+</div>
                <div className="text-sm text-gray-600">YEARS</div>
              </div>
              <Star className="h-8 w-8 text-yellow-500 fill-current" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center p-6">
                <CardHeader>
                  <div className="mx-auto mb-4 p-3 bg-blue-100 rounded-full w-fit">{benefit.icon}</div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our eCommerce Courses</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer three carefully designed training programs to suit different levels of sellers - whether you're
              just starting out or looking to scale across multiple platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card key={course.id} className="relative overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant={course.level === "Advanced" ? "default" : "secondary"}>{course.level}</Badge>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">{course.fee}</div>
                    </div>
                  </div>
                  <CardTitle className="text-2xl">{course.name}</CardTitle>
                  <CardDescription className="text-base">{course.idealFor}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="font-medium">Duration:</span>
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Marketplaces:</span>
                      <span className="text-right text-sm">{course.marketplaces}</span>
                    </div>
                  </div>
                  <Button className="w-full" asChild>
                    <Link href={`/courses/${course.id}`}>Buy Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Success Stories</h2>
            <p className="text-xl text-gray-600">
              Over 100 sellers have already completed our training and are now running their eCommerce stores
              independently
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="p-6">
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Image
                      src={story.image || "/placeholder.svg"}
                      alt={story.name}
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <div className="font-semibold">{story.name}</div>
                      <div className="text-sm text-gray-600">{story.location}</div>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 italic">"{story.story}"</blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6">
                  <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Start Your eCommerce Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join 300+ successful sellers who have transformed their businesses with our training
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              <Play className="mr-2 h-5 w-5" />
              Watch Free Demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 text-white border-white hover:bg-white hover:text-blue-600"
              asChild
            >
              <Link href="/courses">Get Started Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
