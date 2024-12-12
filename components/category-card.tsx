import Link from 'next/link'

interface CategoryCardProps {
  name: string
  image: string
}

export function CategoryCard({ name, image }: CategoryCardProps) {
  const getHref = (name: string) => {
    switch (name) {
      case "Bestseller":
        return "/order"
      case "Drinks":
        return "/order?category=drinks"
      case "Food":
        return "/order?category=food"
      case "Merchandise":
        return "/order?category=merchandise"
      case "Coffee At Home":
        return "/order?category=coffee-at-home"
      case "Ready to Eat":
        return "/order?category=ready-to-eat"
      default:
        return "/order"
    }
  }

  return (
    <Link href={getHref(name)} className="flex flex-col items-center">
      <div className="overflow-hidden rounded-full w-[150px] h-[150px]">
        <img
          alt={name}
          className="h-full w-full object-cover"
          src={image}
        />
      </div>
      <h3 className="mt-4 text-base font-medium text-gray-900">{name}</h3>
    </Link>
  )
}

