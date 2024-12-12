"use client"

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface DrinkSubcategoryNavProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function DrinkSubcategoryNav({
  categories,
  activeCategory,
  onCategoryChange
}: DrinkSubcategoryNavProps) {
  return (
    <div className="relative flex items-center border-b bg-white">
      <Button variant="ghost" size="icon" className="absolute left-0 z-10">
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <div className="overflow-x-auto scrollbar-hide mx-8">
        <div className="flex space-x-8 min-w-max px-4 py-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={cn(
                "px-1 py-2 text-sm font-medium transition-colors whitespace-nowrap",
                activeCategory === category
                  ? "text-[#00704A]"
                  : "text-gray-600 hover:text-gray-900"
              )}
            >
              {category}
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

