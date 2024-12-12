"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { ChevronRight, ChevronLeft } from 'lucide-react'
import { TabNavigation } from "@/components/tab-navigation"
import { GiftCard } from "@/components/gift-card"
import { Button } from "@/components/ui/button"

const tabs = ["Featured", "Anytime", "Congratulations", "Thank You"]

const giftCards = {
  Anytime: [
    {
      title: "India Exclusive",
      description: "Bring in the festive season and make each celebration memorable.",
      image: "/placeholder.svg?height=200&width=350"
    },
    {
      title: "Starbucks Coffee",
      description: "Starbucks is best when shared. Treat your pals to a good cup of coffee.",
      image: "/placeholder.svg?height=200&width=350"
    },
    {
      title: "U Keep Me Warm",
      description: "Captivating, cosy, coffee. Gift your loved ones this Starbucks Gift Card.",
      image: "/placeholder.svg?height=200&width=350"
    },
    {
      title: "Coffee Love",
      description: "Share your love for coffee with this delightful Starbucks Gift Card.",
      image: "/placeholder.svg?height=200&width=350"
    }
  ],
  Congratulations: [
    {
      title: "Celebration Time",
      description: "Celebrate achievements with a special Starbucks treat.",
      image: "/placeholder.svg?height=200&width=350"
    },
    {
      title: "You Did It!",
      description: "Recognize success with this congratulatory Starbucks Gift Card.",
      image: "/placeholder.svg?height=200&width=350"
    },
    {
      title: "Bravo!",
      description: "A perfect way to say 'well done' to someone special.",
      image: "/placeholder.svg?height=200&width=350"
    }
  ],
  "Thank You": [
    {
      title: "Gratitude Blend",
      description: "Express your thanks with a thoughtful Starbucks Gift Card.",
      image: "/placeholder.svg?height=200&width=350"
    },
    {
      title: "Appreciation Roast",
      description: "Show your appreciation with the gift of great coffee.",
      image: "/placeholder.svg?height=200&width=350"
    },
    {
      title: "Thank You Latte",
      description: "A delicious way to say thanks to someone special.",
      image: "/placeholder.svg?height=200&width=350"
    }
  ]
}

export default function GiftPage() {
  const [activeTab, setActiveTab] = useState("Featured")
  const scrollContainers = useRef<{ [key: string]: HTMLDivElement | null }>({})

  const scroll = (category: string, direction: 'left' | 'right') => {
    const container = scrollContainers.current[category]
    if (container) {
      const scrollAmount = direction === 'left' ? -container.offsetWidth : container.offsetWidth
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  const renderCardSection = (category: string, cards: typeof giftCards.Anytime) => (
    <div key={category}>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">{category}</h2>
      <div className="relative">
        <Button 
          variant="outline" 
          size="icon" 
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
          onClick={() => scroll(category, 'left')}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div 
          ref={el => scrollContainers.current[category] = el}
          className="flex overflow-x-auto gap-6 px-8 scrollbar-hide"
        >
          {cards.map((card, index) => (
            <div key={index} className="flex-none w-[300px]">
              <GiftCard
                title={card.title}
                description={card.description}
                image={card.image}
              />
            </div>
          ))}
        </div>
        <Button 
          variant="outline" 
          size="icon" 
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
          onClick={() => scroll(category, 'right')}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container px-4 py-4">
        <nav className="flex items-center text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-gray-900">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span className="text-gray-900">Gift Cards</span>
        </nav>

        <TabNavigation
          tabs={tabs}
          activeTab={activeTab}
          onTabChange={setActiveTab}
        />

        <div className="mt-12 space-y-12">
          {activeTab === "Featured" ? (
            Object.entries(giftCards).map(([category, cards]) => renderCardSection(category, cards))
          ) : (
            renderCardSection(activeTab, giftCards[activeTab as keyof typeof giftCards])
          )}
        </div>
      </div>
    </div>
  )
}

