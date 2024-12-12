import { useState, useRef, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { ProductCard } from '@/components/product-card'
import { CategoryCard } from "@/components/category-card"
import { PromoCarousel } from '@/components/promo-carousel'

const baristaRecommends = [
  {
    name: "Cappuccino",
    description: "SHORT()",
    price: 283.50,
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    name: "Signature Hot Chocolate",
    description: "SHORT(237 ml) 284 kcal",
    price: 309.75,
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    name: "Vanilla Milkshake",
    description: "TALL(354 ml) PER SERVE (354ml) - 531 Kcal",
    price: 378.00,
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    name: "Caffe Latte",
    description: "SHORT(237 ml) 104 kcal",
    price: 273.00,
    image: "/placeholder.svg?height=200&width=200"
  },
  {
    name: "Caramel Macchiato",
    description: "SHORT(237 ml) 146 kcal",
    price: 320.25,
    image: "/placeholder.svg?height=200&width=200"
  }
]

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    const container = carouselRef.current
    if (container) {
      const scrollAmount = direction === 'left' ? -container.offsetWidth : container.offsetWidth
      container.scrollBy({ left: scrollAmount, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const container = carouselRef.current
    if (container) {
      const handleScroll = () => {
        setScrollPosition(container.scrollLeft)
      }
      container.addEventListener('scroll', handleScroll)
      return () => container.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="flex flex-col gap-12 py-8">
      <PromoCarousel />

      <section className="container px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-[#1E3932]">Barista Recommends</h2>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full" 
              onClick={() => scroll('left')}
              disabled={scrollPosition === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full" 
              onClick={() => scroll('right')}
              disabled={carouselRef.current && scrollPosition >= carouselRef.current.scrollWidth - carouselRef.current.offsetWidth}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="overflow-hidden">
          <div 
            ref={carouselRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {baristaRecommends.map((product, index) => (
              <div key={index} className="flex-none w-[calc(100%-1.5rem)] md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)]" style={{ scrollSnapAlign: 'start' }}>
                <ProductCard
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  image={product.image}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container px-4">
        <h2 className="text-2xl font-bold text-[#1E3932] mb-8">Handcrafted Curations</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
          <CategoryCard
            name="Bestseller"
            image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Bestseller.webp-5HxfWMe0uayxX6eEK0B8Vvx2kcZUpl.jpeg"
          />
          <CategoryCard
            name="Drinks"
            image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Drinks.webp-IEYMnMUYMaAOCO12RKrApamrBkUicv.jpeg"
          />
          <CategoryCard
            name="Food"
            image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Food.webp-7BWvTnZOg20XPlUb18pwAqnHxzszxe.jpeg"
          />
          <CategoryCard
            name="Merchandise"
            image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Merchandise.webp-DCEDX5pzhVtOTLxvRyic0wes73SEh0.jpeg"
          />
          <CategoryCard
            name="Coffee At Home"
            image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CoffeeAtHome.webp-IdCxyqHgkU6nbA58ejbIWHV45rfOGM.jpeg"
          />
          <CategoryCard
            name="Ready to Eat"
            image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ReadyToEat.webp-Ge0pvcbslCqf86pCRzMX0ydEf9HbJ9.jpeg"
          />
        </div>
      </section>

      <section className="bg-[#1E3932] text-white">
        <div className="container flex flex-col gap-4 px-4 py-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold">Learn more about the world of coffee!</h2>
            <p className="mt-2 text-gray-200">Discover our coffee culture and heritage</p>
          </div>
          <div className="mt-8 overflow-hidden rounded-lg">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-VzeMGk1LWhFPnEEF8X6ups5EeO3Cnr.png"
              alt="Coffee extraction"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="text-center mt-4">
            <Button variant="outline" className="bg-transparent text-white border-white hover:bg-white hover:text-[#1E3932]">
              Discover More
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

