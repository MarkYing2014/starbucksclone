import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface PromoSlide {
  image: string
  headline: string
  subheadline: string
  buttonText: string
  buttonLink: string
}

const promoSlides: PromoSlide[] = [
  {
    image: "/placeholder.svg?height=400&width=1200&text=Promo+1",
    headline: "Discover our new summer collection",
    subheadline: "Refresh your day with our cool and vibrant drinks",
    buttonText: "Order Now",
    buttonLink: "#",
  },
  {
    image: "/placeholder.svg?height=400&width=1200&text=Promo+2",
    headline: "Join Starbucks Rewards",
    subheadline: "Earn Stars and get rewarded for your purchases",
    buttonText: "Learn More",
    buttonLink: "#",
  },
  {
    image: "/placeholder.svg?height=400&width=1200&text=Promo+3",
    headline: "Introducing our new food menu",
    subheadline: "Delicious and nutritious options for any time of day",
    buttonText: "View Menu",
    buttonLink: "#",
  },
]

export function PromoCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % promoSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + promoSlides.length) % promoSlides.length)
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {promoSlides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0">
              <div className="relative h-[400px]">
                <img
                  src={slide.image}
                  alt={slide.headline}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center p-4">
                  <h2 className="text-4xl font-bold mb-2">{slide.headline}</h2>
                  <p className="text-xl mb-4">{slide.subheadline}</p>
                  <Button asChild>
                    <a href={slide.buttonLink}>{slide.buttonText}</a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  )
}

