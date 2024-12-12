import { useState, useMemo } from 'react'
import type { Product } from '@/types/products'

export function useProductFilter(products: Product[]) {
  const [selectedCategory, setSelectedCategory] = useState<string>('Espresso')
  const [selectedAttributes, setSelectedAttributes] = useState<string[]>([])

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      // Check if product matches the selected category
      const matchesCategory = product.categories.includes(selectedCategory)

      // If no attributes are selected, only check category
      if (selectedAttributes.length === 0) {
        return matchesCategory
      }

      // Check if product matches any of the selected attributes
      const matchesAttributes = selectedAttributes.some(attr => 
        product.attributes.includes(attr)
      )

      return matchesCategory && matchesAttributes
    })
  }, [products, selectedCategory, selectedAttributes])

  const toggleAttribute = (attribute: string) => {
    setSelectedAttributes(prev =>
      prev.includes(attribute)
        ? prev.filter(a => a !== attribute)
        : [...prev, attribute]
    )
  }

  return {
    selectedCategory,
    setSelectedCategory,
    selectedAttributes,
    toggleAttribute,
    filteredProducts
  }
}

