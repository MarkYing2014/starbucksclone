import { cn } from "@/lib/utils"

interface CategoryNavProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function CategoryNav({
  categories,
  activeCategory,
  onCategoryChange
}: CategoryNavProps) {
  return (
    <nav className="border-b bg-gray-50">
      <div className="container mx-auto">
        <div className="flex space-x-8 overflow-x-auto scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onCategoryChange(category)}
              className={cn(
                "px-4 py-4 text-sm font-medium border-b-2 whitespace-nowrap transition-colors",
                activeCategory === category
                  ? "border-[#00704A] text-[#00704A]"
                  : "border-transparent text-gray-600 hover:text-gray-900"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}

