'use client'
import { useState, useEffect } from "react"
import { useSearchParams } from 'next/navigation'
import Link from "next/link"
import { ChevronRight } from 'lucide-react'
import { useProductFilter } from "@/hooks/use-product-filter"
import { StoreSelectionBar } from "@/components/store-selection-bar"
import { CategoryNav } from "@/components/category-nav"
import { DrinkSubcategoryNav } from "@/components/drink-subcategory-nav"
import { FilterTags } from "@/components/filter-tags"
import { ProductCard } from "@/components/product-card"
import { Product } from "@/types/products"
import { NoMatches } from "@/components/no-matches"

const mainCategories = ["Bestseller", "Drinks", "Food", "Merchandise", "Coffee At Home", "Ready to Eat"]

const drinkCategories = ["Espresso", "Frappuccino", "Other Beverages", "Brewed Coffee", "Tea", "Cold Brew"]
const drinkFilterTags = ["Hot", "Cold", "Customizable", "Caffeine Free", "Vegan", "Dairy Free"]

const foodCategories = ["Croissants & More", "Cookies & Desserts", "Puffs & Pies", "Bakery", "Cakes"]
const foodFilterTags = ["Vegetarian", "Non-Vegetarian", "Vegan", "Gluten Free", "Egg Free"]

const merchandiseCategories = ["Festive Gifting", "Mugs", "Cups", "Tumblers"]
const merchandiseFilterTags = ["Core Essential", "Seasonal Collection", "Been There Series", "Ceramic", "Stainless Steel", "Reusable Cups", "Coasters", "Cup Clips", "Note Books"]

const coffeeAtHomeCategories = ["Blend", "Blonde Roast", "Dark Roast", "Medium Roast", "Single Origin"]
const coffeeAtHomeFilterTags = ["Wholebeans", "Ground", "Instant Coffee", "Seasonal", "Limited Edition"]

const readyToEatCategories = ["Festive Indulgence", "Quick Bites"]
const readyToEatFilterTags = ["Chocolate", "Mint", "Nuts"]

const products: Product[] = [
// Bestseller products
{
  id: "best-1",
  name: "Caffe Latte",
  description: "Rich, full-bodied espresso in steamed milk, lightly topped with foam.",
  price: 299.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "TALL(354 ML)",
  calories: "134 kcal",
  isVeg: true,
  categories: ["Bestseller", "Drinks", "Espresso"],
  attributes: ["Hot", "Customizable"]
},
{
  id: "best-2",
  name: "Cappuccino",
  description: "Dark, rich espresso lies in wait under a smoothed and stretched layer of thick foam.",
  price: 299.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "TALL(354 ML)",
  calories: "104 kcal",
  isVeg: true,
  categories: ["Bestseller", "Drinks", "Espresso"],
  attributes: ["Hot", "Customizable"]
},
{
  id: "best-3",
  name: "Java Chip Frappuccino",
  description: "We blend mocha sauce and Frappuccino® chips with coffee and milk and ice, then top with whipped cream and mocha drizzle.",
  price: 379.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "TALL(354 ML)",
  calories: "392 kcal",
  isVeg: true,
  categories: ["Bestseller", "Drinks", "Frappuccino"],
  attributes: ["Cold", "Customizable"]
},
{
  id: "best-4",
  name: "Chocolate Chip Cookie",
  description: "A classic chocolate chip cookie with a soft and chewy texture, loaded with chocolate chips.",
  price: 179.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "1 PC",
  calories: "310 kcal",
  isVeg: true,
  categories: ["Bestseller", "Food", "Cookies & Desserts"],
  attributes: ["Vegetarian"]
},
{
  id: "best-5",
  name: "Chicken Puff",
  description: "A flaky pastry filled with seasoned chicken, perfect for a savory snack.",
  price: 149.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "1 PC",
  calories: "320 kcal",
  isVeg: false,
  categories: ["Bestseller", "Food", "Puffs & Pies"],
  attributes: ["Non-Vegetarian"]
},
// Drinks products
{
  id: "drink-1",
  name: "Caramel Macchiato",
  description: "Freshly steamed milk with vanilla-flavored syrup, marked with espresso and finished with caramel sauce.",
  price: 349.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "TALL(354 ML)",
  calories: "204 kcal",
  isVeg: true,
  categories: ["Drinks", "Espresso"],
  attributes: ["Hot", "Customizable"]
},
{
  id: "drink-2",
  name: "Java Chip Frappuccino",
  description: "We blend mocha sauce and Frappuccino® chips with coffee and milk and ice, then top with whipped cream and mocha drizzle.",
  price: 379.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "TALL(354 ML)",
  calories: "392 kcal",
  isVeg: true,
  categories: ["Drinks", "Frappuccino"],
  attributes: ["Cold", "Customizable"]
},
// Food products
{
  id: "food-1",
  name: "Butter Croissant",
  description: "A classic butter croissant with a crisp, flaky outside and a soft, buttery inside.",
  price: 199.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "1 PC",
  calories: "280 kcal",
  isVeg: true,
  categories: ["Food", "Croissants & More"],
  attributes: ["Vegetarian"]
},
{
  id: "food-2",
  name: "Chocolate Chip Cookie",
  description: "A classic chocolate chip cookie with a soft and chewy texture, loaded with chocolate chips.",
  price: 179.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "1 PC",
  calories: "310 kcal",
  isVeg: true,
  categories: ["Food", "Cookies & Desserts"],
  attributes: ["Vegetarian"]
},
// Puffs & Pies
{
  id: "food-3",
  name: "Chicken Puff",
  description: "A flaky pastry filled with seasoned chicken, perfect for a savory snack.",
  price: 149.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "1 PC",
  calories: "320 kcal",
  isVeg: false,
  categories: ["Food", "Puffs & Pies"],
  attributes: ["Non-Vegetarian"]
},
{
  id: "food-4",
  name: "Veg Spinach Pie",
  description: "A delicious pie filled with spinach and cheese, encased in a crispy crust.",
  price: 169.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "1 PC",
  calories: "280 kcal",
  isVeg: true,
  categories: ["Food", "Puffs & Pies"],
  attributes: ["Vegetarian"]
},
// Bakery
{
  id: "food-5",
  name: "Blueberry Muffin",
  description: "A moist muffin packed with juicy blueberries and topped with a crumbly streusel.",
  price: 189.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "1 PC",
  calories: "380 kcal",
  isVeg: true,
  categories: ["Food", "Bakery"],
  attributes: ["Vegetarian"]
},
{
  id: "food-6",
  name: "Cheese Danish",
  description: "A flaky pastry filled with smooth cream cheese and a hint of vanilla.",
  price: 199.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "1 PC",
  calories: "290 kcal",
  isVeg: true,
  categories: ["Food", "Bakery"],
  attributes: ["Vegetarian"]
},
// Cakes
{
  id: "food-7",
  name: "Red Velvet Cake",
  description: "A rich and moist red velvet cake layered with cream cheese frosting.",
  price: 299.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "1 SLICE",
  calories: "420 kcal",
  isVeg: true,
  categories: ["Food", "Cakes"],
  attributes: ["Vegetarian"]
},
{
  id: "food-8",
  name: "Chocolate Truffle Cake",
  description: "A decadent chocolate cake with layers of rich chocolate ganache.",
  price: 319.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "1 SLICE",
  calories: "450 kcal",
  isVeg: true,
  categories: ["Food", "Cakes"],
  attributes: ["Vegetarian"]
},
// Merchandise products
{
  id: "merch-1",
  name: "Starbucks Diwali Barista Keychain",
  description: "Our iconic bear in a traditional attire celebrating by light...",
  price: 390.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "ONE SIZE",
  calories: "N/A",
  isVeg: true,
  categories: ["Merchandise", "Festive Gifting"],
  attributes: ["Seasonal Collection"]
},
{
  id: "merch-2",
  name: "Starbucks Iced Latte Candle",
  description: "An exclusive iced latte candle with notes of coffee and vani...",
  price: 750.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "ONE SIZE",
  calories: "N/A",
  isVeg: true,
  categories: ["Merchandise", "Festive Gifting"],
  attributes: ["Seasonal Collection"]
},
{
  id: "merch-3",
  name: "Starbucks Diwali Basket FY25",
  description: "Inspired by the iconic siren, the elements in gold make for ...",
  price: 390.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "ONE SIZE",
  calories: "N/A",
  isVeg: true,
  categories: ["Merchandise", "Festive Gifting"],
  attributes: ["Seasonal Collection"]
},
{
  id: "merch-4",
  name: "Starbucks Barista Bear",
  description: "Adorned in a traditional festive attire our Barista is read...",
  price: 900.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "ONE SIZE",
  calories: "N/A",
  isVeg: true,
  categories: ["Merchandise", "Festive Gifting"],
  attributes: ["Seasonal Collection"]
},
// Mugs
{
  id: "mug-1",
  name: "MUG HOLIDAY CARNIVAL TREE 295 ML",
  description: "Sip your beverages this holiday with our festive mugs, tumbler and cold cups collection.",
  price: 2800.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "295 ML",
  calories: "N/A",
  isVeg: true,
  categories: ["Merchandise", "Mugs"],
  attributes: ["Ceramic", "Seasonal Collection"]
},
{
  id: "mug-2",
  name: "MUG CARNIVAL NIGHT 414 ML",
  description: "Sip your beverages this holiday with our festive mugs, tumbler and cold cups collection.",
  price: 2300.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "414 ML",
  calories: "N/A",
  isVeg: true,
  categories: ["Merchandise", "Mugs"],
  attributes: ["Ceramic", "Seasonal Collection"]
},
{
  id: "mug-3",
  name: "MUG HOLIDAY CIRCUS 473 ML",
  description: "Sip your beverages this holiday with our festive mugs, tumbler and cold cups collection.",
  price: 2000.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "473 ML",
  calories: "N/A",
  isVeg: true,
  categories: ["Merchandise", "Mugs"],
  attributes: ["Ceramic", "Seasonal Collection"]
},
{
  id: "mug-4",
  name: "MUG CARNIVAL DRUM 88 ML",
  description: "Sip your beverages this holiday with our festive mugs, tumbler and cold cups collection.",
  price: 1050.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "88 ML",
  calories: "N/A",
  isVeg: true,
  categories: ["Merchandise", "Mugs"],
  attributes: ["Ceramic", "Seasonal Collection"]
},
// Cups
{
  id: "cup-1",
  name: "HOLIDAY HCUP REU FY25 473 ML",
  description: "Global holiday reusable cup is here! Enjoy your beverages on the go with this festive cup.",
  price: 350.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "473 ML",
  calories: "N/A",
  isVeg: true,
  categories: ["Merchandise", "Cups"],
  attributes: ["Reusable Cups", "Seasonal Collection"]
},
{
  id: "cup-2",
  name: "HOLIDAY CCUP REU FY25 473 ML",
  description: "Global holiday reusable cup is here! Enjoy your beverages on the go with this festive cup.",
  price: 375.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "473 ML",
  calories: "N/A",
  isVeg: true,
  categories: ["Merchandise", "Cups"],
  attributes: ["Reusable Cups", "Seasonal Collection"]
},
{
  id: "cup-3",
  name: "HOLIDAY REU CCUP COL CHNG FY25 709 ML",
  description: "Global holiday reusable cup is here! Enjoy your beverages on the go with this color-changing cup.",
  price: 700.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "709 ML",
  calories: "N/A",
  isVeg: true,
  categories: ["Merchandise", "Cups"],
  attributes: ["Reusable Cups", "Seasonal Collection"]
},
{
  id: "cup-4",
  name: "KEYCHAIN RED CUP FY25",
  description: "Carry a little Starbucks with you everywhere with this charming cup keychain.",
  price: 1250.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "ONE SIZE",
  calories: "N/A",
  isVeg: true,
  categories: ["Merchandise", "Cups"],
  attributes: ["Seasonal Collection"]
},
{
  id: "cup-5",
  name: "ORNAMENT CCUP MAGENTA",
  description: "Carry a little Starbucks with you everywhere with this ornamental cup in magenta.",
  price: 850.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "ONE SIZE",
  calories: "N/A",
  isVeg: true,
  categories: ["Merchandise", "Cups"],
  attributes: ["Seasonal Collection"]
},
{
  id: "cup-6",
  name: "ORNAMENT RED CUP FY25",
  description: "Carry a little Starbucks with you everywhere with this ornamental red cup.",
  price: 650.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "ONE SIZE",
  calories: "N/A",
  isVeg: true,
  categories: ["Merchandise", "Cups"],
  attributes: ["Seasonal Collection"]
},
// Other Beverages
{
  id: "drink-3",
  name: "Chai Tea Latte",
  description: "Black tea infused with cinnamon, clove, and other warming spices is combined with steamed milk and topped with foam.",
  price: 299.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "TALL(354 ML)",
  calories: "190 kcal",
  isVeg: true,
  categories: ["Drinks", "Other Beverages"],
  attributes: ["Hot", "Customizable"]
},
{
  id: "drink-4",
  name: "Green Tea Latte",
  description: "Smooth and creamy matcha sweetened just right and served with steamed milk.",
  price: 319.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "TALL(354 ML)",
  calories: "210 kcal",
  isVeg: true,
  categories: ["Drinks", "Other Beverages"],
  attributes: ["Hot", "Customizable"]
},
// Brewed Coffee
{
  id: "drink-5",
  name: "Caffe Misto",
  description: "A one-to-one combination of fresh-brewed coffee and steamed milk add up to one distinctly delicious coffee drink.",
  price: 269.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "TALL(354 ML)",
  calories: "80 kcal",
  isVeg: true,
  categories: ["Drinks", "Brewed Coffee"],
  attributes: ["Hot", "Customizable"]
},
{
  id: "drink-6",
  name: "Pour-Over Brewed Coffee",
  description: "Expertly roasted, freshly ground and brewed to order, our pour-over is a true testament to the art of handcrafted coffee.",
  price: 289.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "TALL(354 ML)",
  calories: "5 kcal",
  isVeg: true,
  categories: ["Drinks", "Brewed Coffee"],
  attributes: ["Hot"]
},
// Tea
{
  id: "drink-7",
  name: "Emperor's Clouds & Mist",
  description: "This gently smoky, softly sweet green tea is cultivated at 3,500 feet, shrouded in ethereal clouds and mist.",
  price: 299.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "TALL(354 ML)",
  calories: "0 kcal",
  isVeg: true,
  categories: ["Drinks", "Tea"],
  attributes: ["Hot"]
},
{
  id: "drink-8",
  name: "Mint Citrus Tea",
  description: "A blend of mint and lemongrass creates a refreshing flavor that's both uplifting and soothing.",
  price: 309.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "TALL(354 ML)",
  calories: "0 kcal",
  isVeg: true,
  categories: ["Drinks", "Tea"],
  attributes: ["Hot"]
},
// Cold Brew
{
  id: "drink-9",
  name: "Cold Brew",
  description: "Handcrafted in small batches daily, slow-steeped in cool water for 20 hours, without touching heat.",
  price: 339.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "TALL(354 ML)",
  calories: "5 kcal",
  isVeg: true,
  categories: ["Drinks", "Cold Brew"],
  attributes: ["Cold"]
},
{
  id: "drink-10",
  name: "Vanilla Sweet Cream Cold Brew",
  description: "Our slow-steeped custom blend of Cold Brew coffee accented with vanilla and topped with a delicate float of house-made vanilla sweet cream.",
  price: 359.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "TALL(354 ML)",
  calories: "110 kcal",
  isVeg: true,
  categories: ["Drinks", "Cold Brew"],
  attributes: ["Cold", "Customizable"]
},
// Adding new Tumbler products
{
  id: "tumbler-1",
  name: "TMBL CARNVL CIRCUS 355 ML",
  description: "Sip your beverages this holiday with our festive mugs, tumbler and cold cups collection.",
  price: 2700.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "355 ML",
  calories: "N/A",
  isVeg: true,
  categories: ["Merchandise", "Tumblers"],
  attributes: ["Stainless Steel", "Seasonal Collection"]
},
{
  id: "tumbler-2",
  name: "TMBL CARNIVAL FRIENDS 355 ML",
  description: "Sip your beverages this holiday with our festive mugs, tumbler and cold cups collection.",
  price: 1900.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "355 ML",
  calories: "N/A",
  isVeg: true,
  categories: ["Merchandise", "Tumblers"],
  attributes: ["Stainless Steel", "Seasonal Collection"]
},
// Adding Coffee At Home products
{
  id: "coffee-1",
  name: "VIA Christmas Blend",
  description: "Starbucks Premium Instant Coffee: VIA Christmas Blend. This seasonal favorite brings warmth to your holidays.",
  price: 1000.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "1 BOX",
  calories: "N/A",
  isVeg: true,
  categories: ["Coffee At Home", "Blend"],
  attributes: ["Instant Coffee", "Seasonal"]
},
{
  id: "coffee-2",
  name: "250G Christmas Blend",
  description: "This seasonal favourite is back with aged Sumatran coffees lending cedar-spicy notes to this holiday blend.",
  price: 2000.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "250G",
  calories: "N/A",
  isVeg: true,
  categories: ["Coffee At Home", "Blend"],
  attributes: ["Wholebeans", "Seasonal"]
},
{
  id: "coffee-3",
  name: "Diwali Blend",
  description: "Celebrate this Diwali in the best way we know how - with coffee! A special blend for festive moments.",
  price: 1100.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "1 BOX",
  calories: "N/A",
  isVeg: true,
  categories: ["Coffee At Home", "Blend"],
  attributes: ["Ground", "Limited Edition"]
},
{
  id: "coffee-4",
  name: "250G Voyage Blend",
  description: "Medium roast coffee from Brazil, Sumatra, and Zambia with notes of herbs and complex flavors.",
  price: 1700.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "250G",
  calories: "N/A",
  isVeg: true,
  categories: ["Coffee At Home", "Medium Roast"],
  attributes: ["Wholebeans"]
},
{
  id: "coffee-5",
  name: "250G Diwali Blend",
  description: "Starbucks is celebrating Diwali the best way we know how - with a special blend that brings warmth to your festivities.",
  price: 1100.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "250G",
  calories: "N/A",
  isVeg: true,
  categories: ["Coffee At Home", "Blend"],
  attributes: ["Wholebeans", "Limited Edition"]
},
// Add Blonde Roast products
{
  id: "coffee-6",
  name: "250G Veranda Blend",
  description: "Lightly roasted coffee that's soft, mellow and flavorful. Subtle notes of toasted nuts and light cocoa.",
  price: 1500.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "250G",
  calories: "N/A",
  isVeg: true,
  categories: ["Coffee At Home", "Blonde Roast"],
  attributes: ["Wholebeans"]
},
{
  id: "coffee-7",
  name: "250G Blonde Espresso Roast",
  description: "A lighter roast that's smooth and subtly sweet with notes of citrus and caramel.",
  price: 1600.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "250G",
  calories: "N/A",
  isVeg: true,
  categories: ["Coffee At Home", "Blonde Roast"],
  attributes: ["Wholebeans"]
},
{
  id: "coffee-8",
  name: "VIA Veranda Blend",
  description: "Our lightest instant coffee roast with mellow and lightly roasted notes.",
  price: 950.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "1 BOX",
  calories: "N/A",
  isVeg: true,
  categories: ["Coffee At Home", "Blonde Roast"],
  attributes: ["Instant Coffee"]
},
// Add these new Dark Roast products to the products array
{
  id: "coffee-9",
  name: "250G Italian Roast",
  description: "This intense, full-bodied blend with a rich, dark color features the bold flavors of Italian Roasting.",
  price: 1800.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "250G",
  calories: "N/A",
  isVeg: true,
  categories: ["Coffee At Home", "Dark Roast"],
  attributes: ["Wholebeans"]
},
{
  id: "coffee-10",
  name: "250G Espresso Roast",
  description: "A rich, dark roast that brings out the full flavor and body of the beans, perfect for making espresso.",
  price: 1700.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "250G",
  calories: "N/A",
  isVeg: true,
  categories: ["Coffee At Home", "Dark Roast"],
  attributes: ["Wholebeans"]
},
{
  id: "coffee-11",
  name: "250G Caffe Verona",
  description: "A dark, full-bodied blend of Latin American and Asia/Pacific coffees with Italian Roast.",
  price: 1900.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "250G",
  calories: "N/A",
  isVeg: true,
  categories: ["Coffee At Home", "Dark Roast"],
  attributes: ["Wholebeans"]
},
{
  id: "coffee-12",
  name: "VIA Italian Roast",
  description: "Our classic instant Italian Roast with sweet smokiness, arriving in a ready-to-brew format.",
  price: 1000.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "1 BOX",
  calories: "N/A",
  isVeg: true,
  categories: ["Coffee At Home", "Dark Roast"],
  attributes: ["Instant Coffee"]
},
// Add Ready to Eat products
{
  id: "rte-1",
  name: "Festive Indulgence Dry Fruit and Nut Fudge - Small",
  description: "Celebrate the festival of lights with this indulgent box of traditional dry fruit and nut fudge.",
  price: 950.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "1 BOX",
  calories: "Serving size 15g Calories per serving: refer description",
  isVeg: true,
  categories: ["Ready to Eat", "Festive Indulgence"],
  attributes: ["Nuts"]
},
{
  id: "rte-2",
  name: "Festive Indulgence Dry Fruit and Nut Fudge - Large",
  description: "Celebrate the festival of lights with this indulgent box of traditional dry fruit and nut fudge.",
  price: 1550.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "1 BOX",
  calories: "Serving size 15g Calories per serving: refer description",
  isVeg: true,
  categories: ["Ready to Eat", "Festive Indulgence"],
  attributes: ["Nuts"]
},
{
  id: "rte-3",
  name: "Coffee Choco Barks",
  description: "Experience the perfect blend of Bombay Sweet Shop's iconic chocolate bark with our signature coffee.",
  price: 350.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "1 BOX",
  calories: "Serving size 25g Calories per serving: 145kcal",
  isVeg: true,
  categories: ["Ready to Eat", "Festive Indulgence"],
  attributes: ["Chocolate"]
},
{
  id: "rte-4",
  name: "Almond Biscotti",
  description: "Delicious on its own or a perfect pairing with your favorite coffee. A classic Italian cookie with a delightful crunch.",
  price: 160.00,
  image: "/placeholder.svg?height=200&width=200",
  size: "1 PC",
  calories: "PER SERVE (50 g) - 409 kcal",
  isVeg: true,
  categories: ["Ready to Eat", "Quick Bites"],
  attributes: ["Nuts"]
}
]

export default function OrderPage() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get('category')

  const [mainCategory, setMainCategory] = useState("Bestseller")
  const {
    selectedCategory,
    setSelectedCategory,
    selectedAttributes,
    toggleAttribute,
    filteredProducts
  } = useProductFilter(products)

  const [orderType, setOrderType] = useState<'dine-in' | 'takeaway'>('dine-in')

  useEffect(() => {
    if (categoryParam) {
      const category = categoryParam.charAt(0).toUpperCase() + categoryParam.slice(1).replace(/-/g, ' ')
      setMainCategory(category)
      setSelectedCategory(getInitialSubcategory(category))
    }
  }, [categoryParam])

  const getInitialSubcategory = (category: string) => {
    switch (category) {
      case "Drinks":
        return "Espresso"
      case "Food":
        return "Croissants & More"
      case "Merchandise":
        return "Festive Gifting"
      case "Coffee At Home":
        return "Blend"
      case "Ready to Eat":
        return "Festive Indulgence"
      default:
        return "Bestseller"
    }
  }

  const getCategoryDescription = (category: string) => {
    switch (category) {
      case "Bestseller":
        return "Our most popular items, loved by Starbucks fans across India."
      case "Espresso":
        return "Our smooth signature Espresso Roast with rich flavor and caramelly sweetness is at the very heart of everything we do."
      case "Frappuccino":
        return "Indulge in our delicious coffee, milk and ice blended beverages. Enjoy your favorite Frappuccino blended beverage."
      case "Other Beverages":
        return "Explore our range of unique and refreshing beverages crafted to perfection."
      case "Brewed Coffee":
        return "Our freshly brewed coffees are made from 100% arabica beans, sourced from the finest coffee-growing regions."
      case "Tea":
        return "Discover our selection of premium teas, from bold black teas to soothing herbal infusions."
      case "Cold Brew":        return "Handcrafted in small batches daily, slow-steeped in cool water for 20 hours, without touching heat."
      case "Croissants & More":
        return "Indulge in our flaky, buttery croissants and other delightful pastries."
      case "Cookies & Desserts":
        return "Satisfy your sweet tooth with our selection of cookies and desserts."
      case "Puffs & Pies":
        return "Enjoy our savory puffs and pies, perfect for a quick snack or light meal."
      case "Bakery":
        return "Explore our freshly baked goods, from artisanal breads to sweet treats."
      case "Cakes":
        return "Celebrate with our delicious cakes, perfect for any occasion."
      case "Festive Gifting":
        return "Celebrate special moments with our exclusive festive collection."
      case "Mugs":
        return "Take home our signature mugs and make every sip special."
      case "Cups":
        return "Explore our collection of cups for your favorite beverages."
      case "Tumblers":
        return "Keep your drinks at the perfect temperature with our premium tumblers."
      case "Coffee At Home":
        return "Explore our range of coffee for your home."
      case "Blonde Roast":
        return "Explore our range of Blonde Roast coffee for your home."
      case "Dark Roast":
        return "Bold, robust coffees with notes of caramelized sugar and a smooth, dark chocolate finish."
      case "Single Origin":
        return "Experience the unique flavors of coffee sourced from specific regions around the world."
      case "Festive Indulgence":
        return "Celebrate special moments with our curated selection of festive treats and delicacies."
      case "Quick Bites":
        return "Perfect snacks for any time of day, carefully selected for your enjoyment."
      default:
        return "Discover our handcrafted items made just for you."
    }
  }

  const getSubcategories = () => {
    switch (mainCategory) {
      case "Drinks":
        return drinkCategories
      case "Food":
        return foodCategories
      case "Merchandise":
        return merchandiseCategories
      case "Coffee At Home":
        return coffeeAtHomeCategories
      case "Ready to Eat":
        return readyToEatCategories
      default:
        return []
    }
  }

  const getFilterTags = () => {
    switch (mainCategory) {
      case "Drinks":
        return drinkFilterTags
      case "Food":
        return foodFilterTags
      case "Merchandise":
        return merchandiseFilterTags
      case "Coffee At Home":
        return coffeeAtHomeFilterTags
      case "Ready to Eat":
        return readyToEatFilterTags
      default:
        return []
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="flex items-center text-sm text-gray-600 px-6 py-4">
        <Link href="/" className="hover:text-gray-900">
          Home
        </Link>
        <ChevronRight className="h-4 w-4 mx-2" />
        <span className="text-gray-900">Order</span>
      </nav>

      <StoreSelectionBar
        orderType={orderType}
        onOrderTypeChange={setOrderType}
      />

      <CategoryNav
        categories={mainCategories}
        activeCategory={mainCategory}
        onCategoryChange={setMainCategory}
      />

      {(mainCategory === "Drinks" || mainCategory === "Food" || mainCategory === "Merchandise" || mainCategory === "Coffee At Home" || mainCategory === "Ready to Eat") && (
        <>
          <DrinkSubcategoryNav
            categories={getSubcategories()}
            activeCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          <FilterTags
            tags={getFilterTags()}
            activeTags={selectedAttributes}
            onTagToggle={toggleAttribute}
          />
        </>
      )}

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            {selectedCategory}
          </h1>
          <p className="text-gray-600 mt-1">
            {getCategoryDescription(selectedCategory)}
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {selectedCategory === "Single Origin" ? (
            <div className="md:col-span-2">
              <NoMatches />
            </div>
          ) : (
            filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
              />
            ))
          )}
        </div>
      </main>
    </div>
  )
}

