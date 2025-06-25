"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  ArrowLeft,
  Shield,
  CheckCircle,
  Clock,
  Users,
  Globe,
  CreditCard,
  Lock,
  AlertCircle,
  Phone,
  Mail,
  MapPin,
} from "lucide-react"

const courseData = {
  "starter-track": {
    id: "starter-track",
    name: "Starter Track",
    duration: "45 Days",
    marketplaces: ["Amazon.in"],
    idealFor: "New sellers setting up their first store",
    fee: 5999,
    originalPrice: 7999,
    level: "Beginner",
    features: [
      "Live training sessions",
      "Real account implementation",
      "Lifetime community access",
      "GST and compliance training",
      "Product listing optimization",
      "Customer service fundamentals",
    ],
  },
  "growth-track": {
    id: "growth-track",
    name: "Growth Track",
    duration: "60 Days",
    marketplaces: ["Amazon.in", "Flipkart"],
    idealFor: "Sellers scaling to multiple platforms",
    fee: 9999,
    originalPrice: 12999,
    level: "Intermediate",
    features: [
      "Multi-platform management",
      "Advanced advertising strategies",
      "Brand building fundamentals",
      "Analytics and reporting",
      "Cross-platform logistics",
      "Scaling strategies",
    ],
  },
  "pro-track": {
    id: "pro-track",
    name: "Pro Track",
    duration: "90 Days",
    marketplaces: ["Amazon.in", "Flipkart", "Meesho", "Amazon Global"],
    idealFor: "Serious entrepreneurs building long-term brands",
    fee: 15999,
    originalPrice: 19999,
    level: "Advanced",
    features: [
      "Global marketplace expansion",
      "Advanced brand building",
      "International logistics",
      "Advanced analytics and automation",
      "Team management strategies",
      "Enterprise-level strategies",
    ],
  },
}

interface FormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  whatsapp: string
  address: string
  city: string
  state: string
  pincode: string
  experience: string
  currentBusiness: string
  goals: string
  agreeTerms: boolean
  agreeMarketing: boolean
}

interface FormErrors {
  [key: string]: string
}

export default function CheckoutPage() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const courseId = searchParams.get("course") || "starter-track"
  const course = courseData[courseId as keyof typeof courseData]

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    whatsapp: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    experience: "",
    currentBusiness: "",
    goals: "",
    agreeTerms: false,
    agreeMarketing: false,
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (!course) {
      router.push("/courses")
    }
  }, [course, router])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Required field validation
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required"
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required"
    if (!formData.email.trim()) newErrors.email = "Email is required"
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required"
    if (!formData.address.trim()) newErrors.address = "Address is required"
    if (!formData.city.trim()) newErrors.city = "City is required"
    if (!formData.state.trim()) newErrors.state = "State is required"
    if (!formData.pincode.trim()) newErrors.pincode = "Pincode is required"
    if (!formData.experience) newErrors.experience = "Please select your experience level"
    if (!formData.agreeTerms) newErrors.agreeTerms = "You must agree to the terms and conditions"

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    // Phone validation
    const phoneRegex = /^[6-9]\d{9}$/
    if (formData.phone && !phoneRegex.test(formData.phone)) {
      newErrors.phone = "Please enter a valid 10-digit phone number"
    }

    // Pincode validation
    const pincodeRegex = /^\d{6}$/
    if (formData.pincode && !pincodeRegex.test(formData.pincode)) {
      newErrors.pincode = "Please enter a valid 6-digit pincode"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // First, register the user if not logged in
      // For this example, we'll assume the user is already registered
      
      // Prepare order details for the Payment component
      const orderDetails = {
        courseId: course.id,
        amount: course.fee,
        currency: "INR",
        courseName: course.name,
        customerName: `${formData.firstName} ${formData.lastName}`,
        customerEmail: formData.email,
        customerPhone: formData.phone,
        customerAddress: formData.address,
        notes: {
          city: formData.city,
          state: formData.state,
          pincode: formData.pincode,
          experience: formData.experience
        }
      }
      
      // Import the Payment component dynamically to avoid SSR issues
      const PaymentComponent = (await import('@/components/Payment/Payment')).default
      
      // Dynamically render the Payment component in a portal/modal
      const paymentContainer = document.createElement('div')
      document.body.appendChild(paymentContainer)

      const handleSuccess = (data: any) => {
        console.log("Payment successful:", data)
        router.push("/payment-success")
      }

      const handleFailure = (error: any) => {
        console.error("Payment failed:", error)
        alert("Payment failed: " + (error.message || "Please try again"))
        setIsSubmitting(false)
      }

      // Use ReactDOM to render the Payment component as a React element
      const ReactDOM = await import("react-dom/client")
      const root = ReactDOM.createRoot(paymentContainer)
      root.render(
        <PaymentComponent
          orderDetails={orderDetails}
          onSuccess={handleSuccess}
          onFailure={handleFailure}
        />
      )
    } catch (error) {
      console.error("Error processing payment:", error)
      setIsSubmitting(false)
    }
  }

  if (!course) {
    return <div>Loading...</div>
  }

  const savings = course.originalPrice - course.fee

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/courses">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Courses
            </Link>
          </Button>
          <h1 className="text-3xl font-bold">Complete Your Enrollment</h1>
          <p className="text-gray-600 mt-2">Secure checkout for {course.name}</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    Personal Information
                  </CardTitle>
                  <CardDescription>Please provide your personal details for course enrollment</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="Enter your first name"
                        className={errors.firstName ? "border-red-500" : ""}
                      />
                      {errors.firstName && <p className="text-sm text-red-500">{errors.firstName}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Enter your last name"
                        className={errors.lastName ? "border-red-500" : ""}
                      />
                      {errors.lastName && <p className="text-sm text-red-500">{errors.lastName}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Enter your email address"
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="10-digit mobile number"
                        className={errors.phone ? "border-red-500" : ""}
                      />
                      {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="whatsapp">WhatsApp Number</Label>
                      <Input
                        id="whatsapp"
                        name="whatsapp"
                        type="tel"
                        value={formData.whatsapp}
                        onChange={handleInputChange}
                        placeholder="WhatsApp number (if different)"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Address Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5" />
                    Address Information
                  </CardTitle>
                  <CardDescription>Required for course completion certificate</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="address">Address *</Label>
                    <Textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      placeholder="Enter your complete address"
                      rows={3}
                      className={errors.address ? "border-red-500" : ""}
                    />
                    {errors.address && <p className="text-sm text-red-500">{errors.address}</p>}
                  </div>

                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city">City *</Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        placeholder="Enter city"
                        className={errors.city ? "border-red-500" : ""}
                      />
                      {errors.city && <p className="text-sm text-red-500">{errors.city}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="state">State *</Label>
                      <Input
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        placeholder="Enter state"
                        className={errors.state ? "border-red-500" : ""}
                      />
                      {errors.state && <p className="text-sm text-red-500">{errors.state}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="pincode">Pincode *</Label>
                      <Input
                        id="pincode"
                        name="pincode"
                        value={formData.pincode}
                        onChange={handleInputChange}
                        placeholder="6-digit pincode"
                        className={errors.pincode ? "border-red-500" : ""}
                      />
                      {errors.pincode && <p className="text-sm text-red-500">{errors.pincode}</p>}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Business Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Globe className="h-5 w-5" />
                    Business Information
                  </CardTitle>
                  <CardDescription>Help us customize your learning experience</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="experience">eCommerce Experience *</Label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className={`w-full p-2 border rounded-md ${errors.experience ? "border-red-500" : "border-gray-300"}`}
                    >
                      <option value="">Select your experience level</option>
                      <option value="complete-beginner">Complete Beginner</option>
                      <option value="some-knowledge">Some Knowledge</option>
                      <option value="currently-selling">Currently Selling</option>
                      <option value="experienced">Experienced Seller</option>
                    </select>
                    {errors.experience && <p className="text-sm text-red-500">{errors.experience}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="currentBusiness">Current Business (if any)</Label>
                    <Input
                      id="currentBusiness"
                      name="currentBusiness"
                      value={formData.currentBusiness}
                      onChange={handleInputChange}
                      placeholder="Describe your current business or products"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="goals">Your Goals</Label>
                    <Textarea
                      id="goals"
                      name="goals"
                      value={formData.goals}
                      onChange={handleInputChange}
                      placeholder="What do you want to achieve with this course?"
                      rows={3}
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Terms and Conditions */}
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="agreeTerms"
                      checked={formData.agreeTerms}
                      onCheckedChange={(checked) => handleCheckboxChange("agreeTerms", checked as boolean)}
                    />
                    <div className="space-y-1">
                      <Label
                        htmlFor="agreeTerms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        I agree to the Terms and Conditions *
                      </Label>
                      <p className="text-xs text-gray-500">
                        By checking this box, you agree to our{" "}
                        <Link href="/terms" className="text-blue-600 hover:underline">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-blue-600 hover:underline">
                          Privacy Policy
                        </Link>
                      </p>
                    </div>
                  </div>
                  {errors.agreeTerms && <p className="text-sm text-red-500">{errors.agreeTerms}</p>}

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="agreeMarketing"
                      checked={formData.agreeMarketing}
                      onCheckedChange={(checked) => handleCheckboxChange("agreeMarketing", checked as boolean)}
                    />
                    <Label
                      htmlFor="agreeMarketing"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      I agree to receive marketing communications and course updates
                    </Label>
                  </div>
                </CardContent>
              </Card>

              {/* Submit Button */}
              <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Processing...
                  </>
                ) : (
                  <>
                    <CreditCard className="mr-2 h-4 w-4" />
                    Proceed to Payment
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Course Summary */}
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">{course.name}</h3>
                        <p className="text-sm text-gray-600">{course.idealFor}</p>
                      </div>
                      <Badge variant="secondary">{course.level}</Badge>
                    </div>

                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Globe className="h-4 w-4" />
                        <span>{course.marketplaces.join(", ")}</span>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <h4 className="font-medium">What's Included:</h4>
                    <ul className="space-y-1">
                      {course.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-sm">
                          <CheckCircle className="h-3 w-3 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                      {course.features.length > 4 && (
                        <li className="text-sm text-gray-500">+{course.features.length - 4} more features</li>
                      )}
                    </ul>
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Course Fee</span>
                      <span className="line-through text-gray-500">₹{course.originalPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Discount</span>
                      <span className="text-green-600">-₹{savings.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-lg font-semibold">
                      <span>Total Amount</span>
                      <span>₹{course.fee.toLocaleString()}</span>
                    </div>
                  </div>

                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription className="text-sm">
                      Limited time offer! Save ₹{savings.toLocaleString()} on this course.
                    </AlertDescription>
                  </Alert>
                </CardContent>
              </Card>

              {/* Security Info */}
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Shield className="h-5 w-5 text-green-500" />
                      <div>
                        <p className="font-medium text-sm">Secure Payment</p>
                        <p className="text-xs text-gray-600">256-bit SSL encryption</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Lock className="h-5 w-5 text-blue-500" />
                      <div>
                        <p className="font-medium text-sm">Money Back Guarantee</p>
                        <p className="text-xs text-gray-600">7-day refund policy</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <div>
                        <p className="font-medium text-sm">Instant Access</p>
                        <p className="text-xs text-gray-600">Start learning immediately</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Support Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-sm">Need Help?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-blue-500" />
                    <span>+91 90123456789</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Mail className="h-4 w-4 text-blue-500" />
                    <span>support@path2ecom.com</span>
                  </div>
                  <p className="text-xs text-gray-600">Available Mon-Sat, 9 AM - 7 PM</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
