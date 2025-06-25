import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react"

const contactMethods = [
  {
    icon: <Phone className="h-6 w-6" />,
    title: "Phone",
    description: "Call us for immediate assistance",
    contact: "+91 90123456789",
    available: "Mon-Sat, 9 AM - 7 PM",
  },
  {
    icon: <Mail className="h-6 w-6" />,
    title: "Email",
    description: "Send us your queries anytime",
    contact: "support@path2ecom.com",
    available: "24/7 Response",
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: "WhatsApp",
    description: "Quick support via WhatsApp",
    contact: "+91 90123456789",
    available: "Mon-Sat, 9 AM - 9 PM",
  },
  {
    icon: <MapPin className="h-6 w-6" />,
    title: "Office",
    description: "Visit our training center",
    contact: "Mumbai, Maharashtra",
    available: "By Appointment",
  },
]

const faqs = [
  {
    question: "How do I enroll in a course?",
    answer:
      "You can enroll directly through our website by clicking the 'Buy Now' button on any course page, or contact us for assistance.",
  },
  {
    question: "Do you offer refunds?",
    answer: "Yes, we offer a 7-day money-back guarantee if you're not satisfied with the course content.",
  },
  {
    question: "Can I switch between courses?",
    answer:
      "Yes, you can upgrade to a higher-level course by paying the difference amount within 30 days of enrollment.",
  },
  {
    question: "Is technical support available?",
    answer:
      "Yes, we provide technical support for all course-related queries and platform issues throughout your learning journey.",
  },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">
              Get In Touch
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">We're Here to Help You Succeed</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Have questions about our courses? Need guidance on which program is right for you? Our team is ready to
              assist you on your eCommerce journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Multiple Ways to Reach Us</h2>
            <p className="text-xl text-gray-600">Choose the method that works best for you</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                    {method.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{method.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{method.description}</p>
                    <div className="font-medium text-blue-600">{method.contact}</div>
                    <div className="text-xs text-gray-500 mt-1">{method.available}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <Card className="p-8">
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
                <CardDescription>Fill out the form below and we'll get back to you within 24 hours</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter your email address" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="Enter your phone number" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="course">Interested Course</Label>
                  <select className="w-full p-2 border border-gray-300 rounded-md">
                    <option value="">Select a course</option>
                    <option value="starter">Starter Track - ₹5,999</option>
                    <option value="growth">Growth Track - ₹9,999</option>
                    <option value="pro">Pro Track - ₹15,999</option>
                    <option value="consultation">Free Consultation</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your eCommerce goals and any specific questions you have"
                    rows={4}
                  />
                </div>

                <Button size="lg" className="w-full">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* FAQ */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
                <p className="text-gray-600 mb-8">Quick answers to common questions about our courses and services</p>
              </div>

              <div className="space-y-6">
                {faqs.map((faq, index) => (
                  <Card key={index} className="p-6">
                    <CardContent>
                      <h3 className="font-semibold mb-3">{faq.question}</h3>
                      <p className="text-gray-600 text-sm">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <Card className="p-6 bg-blue-50 border-blue-200">
                <CardContent>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 rounded-full p-2">
                      <Clock className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-2">Response Time</h3>
                      <p className="text-sm text-gray-600">
                        We typically respond to all inquiries within 2-4 hours during business hours. For urgent
                        matters, please call us directly.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Office Hours</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="p-6">
                <CardContent className="text-center space-y-2">
                  <h3 className="font-semibold">Phone Support</h3>
                  <p className="text-gray-600">Monday - Saturday</p>
                  <p className="text-blue-600 font-medium">9:00 AM - 7:00 PM</p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="text-center space-y-2">
                  <h3 className="font-semibold">WhatsApp Support</h3>
                  <p className="text-gray-600">Monday - Saturday</p>
                  <p className="text-blue-600 font-medium">9:00 AM - 9:00 PM</p>
                </CardContent>
              </Card>

              <Card className="p-6">
                <CardContent className="text-center space-y-2">
                  <h3 className="font-semibold">Email Support</h3>
                  <p className="text-gray-600">24/7 Available</p>
                  <p className="text-blue-600 font-medium">Response within 24hrs</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Ready to Start Your eCommerce Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Don't wait - join hundreds of successful sellers who started with our training
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              View All Courses
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 text-white border-white hover:bg-white hover:text-blue-600"
            >
              Schedule Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
