import Link from 'next/link'
import { User, Gift, CreditCard, MapPin, Settings, LogOut } from 'lucide-react'

export function ProfileDropdown() {
  return (
    <div className="bg-white rounded-md shadow-lg p-4 w-64">
      <div className="flex items-center space-x-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
          <User className="h-6 w-6 text-gray-600" />
        </div>
        <div>
          <h3 className="font-semibold">John Doe</h3>
          <p className="text-sm text-gray-500">Gold Level</p>
        </div>
      </div>
      <div className="space-y-2">
        <Link href="#" className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-md">
          <Gift className="h-5 w-5 text-gray-600" />
          <span>My Rewards</span>
        </Link>
        <Link href="#" className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-md">
          <CreditCard className="h-5 w-5 text-gray-600" />
          <span>Payment Methods</span>
        </Link>
        <Link href="#" className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-md">
          <MapPin className="h-5 w-5 text-gray-600" />
          <span>Address Book</span>
        </Link>
        <Link href="#" className="flex items-center space-x-3 p-2 hover:bg-gray-100 rounded-md">
          <Settings className="h-5 w-5 text-gray-600" />
          <span>Account Settings</span>
        </Link>
      </div>
      <div className="mt-4 pt-2 border-t">
        <button className="flex items-center space-x-3 p-2 w-full hover:bg-gray-100 rounded-md text-left">
          <LogOut className="h-5 w-5 text-gray-600" />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  )
}

