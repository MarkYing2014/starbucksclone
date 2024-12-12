import Link from 'next/link'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#1E3932] text-white">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo */}
          <div>
            <Link href="/">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-Xyx2VbWRonaaixos0OEVSMRcGlIdQL.png"
                alt="Starbucks"
                className="h-20 w-20" // Changed from h-12 w-12 to h-20 w-20
              />
            </Link>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm hover:underline">Our Heritage</Link></li>
              <li><Link href="#" className="text-sm hover:underline">Coffeehouse</Link></li>
              <li><Link href="#" className="text-sm hover:underline">Our Company</Link></li>
            </ul>
          </div>

          {/* Responsibility */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Responsibility</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm hover:underline">Diversity</Link></li>
              <li><Link href="#" className="text-sm hover:underline">Community</Link></li>
              <li><Link href="#" className="text-sm hover:underline">Ethical Sourcing</Link></li>
              <li><Link href="#" className="text-sm hover:underline">Environmental Stewardship</Link></li>
              <li><Link href="#" className="text-sm hover:underline">Learn More</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="#" className="text-sm hover:underline">Privacy Policy</Link></li>
              <li><Link href="#" className="text-sm hover:underline">FAQs</Link></li>
              <li><Link href="#" className="text-sm hover:underline">Starbucks India Mobile App</Link></li>
              <li><Link href="#" className="text-sm hover:underline">Terms of Use</Link></li>
              <li><Link href="#" className="text-sm hover:underline">Customer Service</Link></li>
              <li><Link href="#" className="text-sm hover:underline">Delivery</Link></li>
              <li><Link href="#" className="text-sm hover:underline">Season's Gifting</Link></li>
              <li><Link href="#" className="text-sm hover:underline">Loyalty Program Terms and Conditions</Link></li>
              <li><Link href="#" className="text-sm hover:underline">Classics Combo Offer</Link></li>
              <li><Link href="#" className="text-sm hover:underline">Beverage Subscription</Link></li>
              <li><Link href="#" className="text-sm hover:underline">Holiday Cheers! - 2024</Link></li>
            </ul>
          </div>

          {/* Social Media and App Downloads */}
          <div>
            <h3 className="text-lg font-semibold mb-4">SOCIAL MEDIA</h3>
            <div className="flex gap-4 mb-6">
              <Link href="https://instagram.com/starbucksindia" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="https://facebook.com/starbucksindia" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="https://twitter.com/starbucksindia" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-6 w-6" />
              </Link>
            </div>
            <div className="space-y-4">
              <Link href="https://apps.apple.com/app/starbucks-india/id1210203958" target="_blank" rel="noopener noreferrer">
                <img
                  src="/placeholder.svg?height=40&width=135&text=Download+on+App+Store"
                  alt="Download on App Store"
                  className="h-10"
                />
              </Link>
              <Link href="https://play.google.com/store/apps/details?id=com.starbucks.in" target="_blank" rel="noopener noreferrer">
                <img
                  src="/placeholder.svg?height=40&width=135&text=Get+it+on+Google+Play"
                  alt="Get it on Google Play"
                  className="h-10"
                />
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4">
              <Link href="#" className="text-sm hover:underline">Web Accessibility</Link>
              <span className="text-white/40">|</span>
              <Link href="#" className="text-sm hover:underline">Privacy Statement</Link>
              <span className="text-white/40">|</span>
              <Link href="#" className="text-sm hover:underline">Terms of Use</Link>
              <span className="text-white/40">|</span>
              <Link href="#" className="text-sm hover:underline">Contact Us</Link>
            </div>
            <p className="text-sm">© 2024 Starbucks Coffee Company. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

