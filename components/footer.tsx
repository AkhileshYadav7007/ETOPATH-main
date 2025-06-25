import Link from "next/link"
import Image from 'next/image';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Youtube } from "lucide-react"

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Courses", href: "/courses" },
  { name: "Contact", href: "/contact" },
]

const courses = [
  { name: "Starter Track", href: "/courses/starter-track" },
  { name: "Growth Track", href: "/courses/growth-track" },
  { name: "Pro Track", href: "/courses/pro-track" },
]

const socialLinks = [
  { name: "Facebook", href: "#", icon: <Facebook className="h-5 w-5" /> },
  { name: "Twitter", href: "#", icon: <Twitter className="h-5 w-5" /> },
  { name: "Instagram", href: "#", icon: <Instagram className="h-5 w-5" /> },
  { name: "YouTube", href: "#", icon: <Youtube className="h-5 w-5" /> },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
            src={"logo.svg"}
            alt="e2path logo"
            width={70} 
            height={70} />
            <p className="text-gray-300 text-sm">
              Empowering Indian sellers with practical, affordable eCommerce training. Learn from experts who have
              helped 300+ brands succeed.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link key={social.name} href={social.href} className="text-gray-400 hover:text-white transition-colors">
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Courses */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Our Courses</h3>
            <ul className="space-y-2">
              {courses.map((course) => (
                <li key={course.name}>
                  <Link href={course.href} className="text-gray-300 hover:text-white transition-colors text-sm">
                    {course.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  Mumbai, Maharashtra
                  <br />
                  India
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <div className="text-gray-300 text-sm">+91 90123456789</div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <div className="text-gray-300 text-sm">support@path2ecom.com</div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-semibold text-lg mb-2">Stay Updated</h3>
              <p className="text-gray-300 text-sm">
                Get the latest eCommerce tips and course updates delivered to your inbox.
              </p>
            </div>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-400"
              />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm">© 2025 Path2Ecom. All rights reserved.</div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Refund Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
