import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface ProductCardProps {
  name: string
  description: string
  price: number
  image: string
  size: string
  calories: string
  isVeg: boolean
}

export function ProductCard({
  name,
  description,
  price,
  image,
  size,
  calories,
  isVeg
}: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-4">
        <div className="flex gap-4">
          <div className="relative">
            <img
              src={image}
              alt={name}
              className="h-24 w-24 rounded-lg object-cover"
            />
            <div className="absolute top-1 left-1">
              <div className={`w-4 h-4 border ${isVeg ? 'border-green-600' : 'border-red-600'}`}>
                <div className={`w-2 h-2 m-0.5 rounded-full ${isVeg ? 'bg-green-600' : 'bg-red-600'}`} />
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between flex-grow">
            <div>
              <h3 className="font-semibold">{name}</h3>
              <p className="text-xs text-gray-500">{size} - {calories}</p>
              <p className="text-sm text-gray-600 line-clamp-2 mt-1">{description}</p>
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="font-semibold">₹{price.toFixed(2)}</span>
              <Button className="bg-[#00704A] hover:bg-[#005c3b]">Add Item</Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

