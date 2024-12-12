"use client"

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface TabNavigationProps {
  tabs: string[]
  activeTab: string
  onTabChange: (tab: string) => void
}

export function TabNavigation({ tabs, activeTab, onTabChange }: TabNavigationProps) {
  return (
    <div className="relative flex items-center">
      <Button variant="ghost" size="icon" className="absolute left-0 z-10">
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <div className="overflow-x-auto scrollbar-hide mx-8">
        <div className="flex space-x-8 min-w-max px-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={cn(
                "px-1 py-4 text-sm font-medium border-b-2 transition-colors",
                activeTab === tab
                  ? "border-[#00704A] text-[#00704A]"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              )}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
      <Button variant="ghost" size="icon" className="absolute right-0 z-10">
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  )
}

