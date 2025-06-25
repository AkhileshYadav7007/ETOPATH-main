import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Target, Award, Heart, CheckCircle, Star } from "lucide-react"

const teamMembers = [
  {
    name: "Rajesh Kumar",
    role: "Founder & Lead Trainer",
    experience: "8+ years in eCommerce",
    image: "/placeholder.svg?height=200&width=200",
    description: "Former Amazon category manager with expertise in scaling 100+ brands",
  },
  {
    name: "Priya Sharma",
    role: "Flipkart Specialist",
    experience: "6+ years in marketplace management",
    image: "/placeholder.svg?height=200&width=200",
    description: "Expert in multi-platform strategies and brand building",
  },
  {
    name: "Amit Patel",
    role: "International Markets Expert",
    experience: "5+ years in global expansion",
    image: "/placeholder.svg?height=200&width=200",
    description: "Specialist in Amazon Global and cross-border eCommerce",
  },
]

const achievements = [
  { number: "300+", label: "Brands Helped", icon: <Users className="h-8 w-8" /> },
  { number: "100+", label: "Success Stories", icon: <Star className="h-8 w-8" /> },
  { number: "10+", label: "Years Experience", icon: <Award className="h-8 w-8" /> },
  { number: "₹50L+", label: "Revenue Generated", icon: <Target className="h-8 w-8" /> },
]

const values = [
  {
    title: "Practical Learning",
    description:
      "We believe in learning by doing. Every concept is taught with real implementation on live seller accounts.",
    icon: <CheckCircle className="h-6 w-6" />,
  },
  {
    title: "Affordable Excellence",
    description:
      "Quality training shouldn't cost a fortune. We provide premium education at prices every seller can afford.",
    icon: <Heart className="h-6 w-6" />,
  },
  {
    title: "Lifetime Support",
    description: "Your success is our success. We provide ongoing support even after course completion.",
    icon: <Users className="h-6 w-6" />,
  },
  {
    title: "Indian Market Focus",
    description:
      "Training specifically designed for Indian sellers, covering GST, logistics, and local market dynamics.",
    icon: <Target className="h-6 w-6" />,
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              About Path 2 Ecom
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Empowering Indian Sellers Since 2014</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just trainers - we're eCommerce professionals who have worked behind the scenes with top-selling
              brands. We bring real experience to help you build a successful online business.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    {achievement.icon}
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">{achievement.number}</div>
                    <div className="text-gray-600">{achievement.label}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Path 2 Ecom was born from a simple observation: too many talented Indian entrepreneurs were struggling
                  with eCommerce because they lacked practical, affordable training.
                </p>
                <p>
                  Having worked with 300+ brands across Amazon, Flipkart, and other major marketplaces, our founders
                  realized that most sellers were paying huge amounts to agencies for services they could easily do
                  themselves - if they just knew how.
                </p>
                <p>
                  That's when we decided to bridge this gap. We created comprehensive, practical training programs that
                  teach sellers everything they need to know to run their businesses independently.
                </p>
                <p>
                  Today, over 100 sellers have completed our training and are running profitable eCommerce businesses
                  without depending on expensive agencies.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Our Story"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Values</h2>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 rounded-full p-3 text-blue-600">{value.icon}</div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Meet Our Expert Team</h2>
            <p className="text-xl text-gray-600">Learn from professionals who have real marketplace experience</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center overflow-hidden">
                <CardContent className="p-6">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={150}
                    height={150}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <Badge variant="outline" className="mb-4">
                    {member.experience}
                  </Badge>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl mb-8 opacity-90">
              To empower every Indian eCommerce seller with the knowledge, skills, and confidence to independently
              build, manage, and grow a successful online business.
            </p>
            <div className="bg-white/10 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">Our Vision for the Future</h3>
              <p className="text-lg opacity-90">
                We envision a future where Indian sellers are no longer dependent on costly service providers, but
                instead become self-reliant, profitable entrepreneurs who understand and control every aspect of their
                eCommerce business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Why Sellers Choose Us</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6">
              <CardContent className="space-y-4">
                <div className="bg-green-100 rounded-full p-3 w-fit">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold">Real Success Track Record</h3>
                <p className="text-gray-600 text-sm">
                  Our trainers have actually helped 300+ brands succeed - we're not just theorists.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="space-y-4">
                <div className="bg-blue-100 rounded-full p-3 w-fit">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold">Live, Interactive Training</h3>
                <p className="text-gray-600 text-sm">
                  No boring videos - learn through live sessions with real-time doubt solving.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="space-y-4">
                <div className="bg-purple-100 rounded-full p-3 w-fit">
                  <Heart className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold">Made for Indian Market</h3>
                <p className="text-gray-600 text-sm">
                  Training specifically designed for Indian sellers, covering GST, logistics, and local challenges.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
