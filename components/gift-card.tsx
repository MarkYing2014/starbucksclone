import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface GiftCardProps {
  title: string
  description: string
  image: string
}

export function GiftCard({ title, description, image }: GiftCardProps) {
  return (
    <Card className="overflow-hidden h-full">
      <CardContent className="p-4">
        <div className="space-y-4">
          <img
            src={image}
            alt={title}
            className="w-full h-40 object-cover rounded-lg"
          />
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <img
                src="/placeholder.svg?height=24&width=24"
                alt="Starbucks"
                className="w-6 h-6"
              />
              <h3 className="font-semibold text-lg">{title}</h3>
            </div>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
          <Button className="w-full bg-[#00704A] hover:bg-[#005c3b]">
            Add Item
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

