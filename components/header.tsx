"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Search, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { LoginDialog } from './login-dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ProfileDropdown } from './profile-dropdown'

export default function Header() {
  const [showLoginDialog, setShowLoginDialog] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-XW9chBZxBmrPnkzai540t3LTPES8Ul.png"
              alt="Starbucks"
              className="h-10 w-10"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium text-[#00704A] border-b-2 border-[#00704A]">
              Home
            </Link>
            <Link href="/gift" className="text-sm font-medium text-gray-500 hover:text-[#00704A] transition-colors">
              Gift
            </Link>
            <Link href="/order" className="text-sm font-medium text-gray-500 hover:text-[#00704A] transition-colors">
              Order
            </Link>
            <button
              onClick={() => setShowLoginDialog(true)}
              className="text-sm font-medium text-gray-500 hover:text-[#00704A] transition-colors"
            >
              Pay
            </button>
            <Link href="/store" className="text-sm font-medium text-gray-500 hover:text-[#00704A] transition-colors">
              Store
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Looking for something specific?"
              className="w-[300px] pl-8"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <User className="h-5 w-5" />
                <span className="sr-only">User account</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-64 p-0">
              <ProfileDropdown />
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <LoginDialog 
        open={showLoginDialog} 
        onOpenChange={setShowLoginDialog}
      />
    </header>
  )
}

