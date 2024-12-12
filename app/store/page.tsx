"use client"

import { useState } from "react"
import Link from "next/link"
import { ChevronRight, Search, MapPin, AlertTriangle } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function StorePage() {
  const [isLocationEnabled, setIsLocationEnabled] = useState(false)

  const handleLocationSearch = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setIsLocationEnabled(true)
          // Handle the position data
        },
        () => {
          setIsLocationEnabled(false)
        }
      )
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="flex items-center text-sm text-gray-600 px-6 py-4">
        <Link href="/" className="hover:text-gray-900">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <span className="text-gray-900">Find A Store</span>
      </nav>

      {/* Search Section */}
      <div className="bg-[#1E3932] py-8">
        <div className="container mx-auto px-4">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
            <Input
              type="text"
              placeholder="Find a store near you"
              className="w-full pl-10 pr-4 py-3 text-lg rounded-full border-none"
              onClick={handleLocationSearch}
            />
          </div>
        </div>
      </div>

      {/* Location Permission Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <div className="relative w-32 h-32 mx-auto mb-8">
            <div className="absolute inset-0 bg-[#d4e9e2] rounded-full"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <MapPin className="h-12 w-12 text-[#1E3932]" />
                <div className="absolute -top-1 -right-1 bg-[#d96666] rounded-full p-1">
                  <AlertTriangle className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
          </div>
          <h2 className="text-2xl font-semibold mb-4">
            Sorry! we can&apos;t seem to spot you.
          </h2>
          <p className="text-gray-600 mb-8">
            Please enable your location to find the nearest Starbucks
          </p>
          <Button
            variant="outline"
            className="border-[#00754a] text-[#00754a] hover:bg-[#00754a] hover:text-white"
          >
            Enter Location Manually
          </Button>
        </div>
      </div>
    </div>
  )
}

