import { MapPin, Clock } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface StoreSelectionBarProps {
  selectedStore?: string
  deliveryTime?: string
  orderType: 'dine-in' | 'takeaway'
  onOrderTypeChange: (type: 'dine-in' | 'takeaway') => void
}

export function StoreSelectionBar({
  selectedStore,
  deliveryTime = "00 mins",
  orderType,
  onOrderTypeChange
}: StoreSelectionBarProps) {
  return (
    <div className="bg-[#1E3932] text-white py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            <span className="text-sm">{selectedStore || "No Store Selected"}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5" />
            <span className="text-sm">{deliveryTime}</span>
          </div>
        </div>
        <div className="flex gap-2">
          <Button
            variant="ghost"
            className={cn(
              "text-white hover:text-white",
              orderType === 'dine-in' && "bg-white/20"
            )}
            onClick={() => onOrderTypeChange('dine-in')}
          >
            <svg
              className="mr-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Dine-In
          </Button>
          <Button
            variant="ghost"
            className={cn(
              "text-white hover:text-white",
              orderType === 'takeaway' && "bg-white/20"
            )}
            onClick={() => onOrderTypeChange('takeaway')}
          >
            <svg
              className="mr-2 h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
            Takeaway
          </Button>
        </div>
      </div>
    </div>
  )
}

