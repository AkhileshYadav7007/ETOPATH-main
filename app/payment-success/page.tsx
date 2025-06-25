import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Download, Calendar, Users, Mail, Phone } from "lucide-react"

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="mx-auto w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
          </div>

          {/* Success Message */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Payment Successful!</h1>
            <p className="text-xl text-gray-600">Congratulations! You've successfully enrolled in the course.</p>
          </div>

          {/* Order Details */}
          <Card className="mb-8 text-left">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-green-600" />
                Enrollment Confirmed
              </CardTitle>
              <CardDescription>Your course access has been activated</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Order ID</p>
                  <p className="font-semibold">#ORD-{Date.now()}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Payment Date</p>
                  <p className="font-semibold">{new Date().toLocaleDateString()}</p>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">Course Enrolled</h3>
                    <p className="text-sm text-gray-600">eCommerce Training Program</p>
                  </div>
                  <Badge variant="secondary">Active</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card className="mb-8 text-left">
            <CardHeader>
              <CardTitle>What Happens Next?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="bg-blue-100 rounded-full p-2 mt-1">
                    <Mail className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Check Your Email</h4>
                    <p className="text-sm text-gray-600">
                      We've sent you a confirmation email with course access details and next steps.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-green-100 rounded-full p-2 mt-1">
                    <Users className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Join Our Community</h4>
                    <p className="text-sm text-gray-600">
                      You'll receive an invite to our exclusive WhatsApp group for course updates and support.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-purple-100 rounded-full p-2 mt-1">
                    <Calendar className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">First Session</h4>
                    <p className="text-sm text-gray-600">
                      Our team will contact you within 24 hours to schedule your first live training session.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-orange-100 rounded-full p-2 mt-1">
                    <Download className="h-4 w-4 text-orange-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Course Materials</h4>
                    <p className="text-sm text-gray-600">
                      Access to course materials and resources will be provided before your first session.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Support */}
          <Card className="mb-8 text-left">
            <CardHeader>
              <CardTitle>Need Immediate Help?</CardTitle>
              <CardDescription>Our support team is here to assist you</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-500" />
                  <div>
                    <p className="font-medium">Call Us</p>
                    <p className="text-sm text-gray-600">+91 90123456789</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-500" />
                  <div>
                    <p className="font-medium">Email Us</p>
                    <p className="text-sm text-gray-600">support@path2ecom.com</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/">Back to Home</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/courses">View All Courses</Link>
            </Button>
          </div>

          {/* Additional Info */}
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800">
              <strong>Important:</strong> Please save this page or take a screenshot for your records. You can also find
              all details in your confirmation email.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
