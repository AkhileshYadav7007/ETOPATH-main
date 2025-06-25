import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Path2Ecom - eCommerce Training for Indian Sellers",
  description:
    "Learn eCommerce from experts who have helped 300+ brands. Live training, real implementation, lifetime support. Start your Amazon, Flipkart journey today.",
  keywords:
    "ecommerce training, amazon seller course, flipkart seller training, online business course, ecommerce course india",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
