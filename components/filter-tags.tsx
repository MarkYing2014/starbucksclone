"use client"

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface FilterTagsProps {
  tags: string[]
  activeTags: string[]
  onTagToggle: (tag: string) => void
}

export function FilterTags({
  tags,
  activeTags,
  onTagToggle
}: FilterTagsProps) {
  return (
    <div className="relative flex items-center border-b bg-white">
      <Button variant="ghost" size="icon" className="absolute left-0 z-10">
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <div className="overflow-x-auto scrollbar-hide mx-8">
        <div className="flex gap-2 min-w-max px-4 py-2">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => onTagToggle(tag)}
              className={cn(
                "px-3 py-1 text-sm rounded-full transition-colors",
                activeTags.includes(tag)
                  ? "bg-[#00704A] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              )}
            >
              {tag}
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

