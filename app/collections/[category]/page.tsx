import type { Metadata } from "next"
import { Filter, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Separator } from "@/components/ui/separator"
import { FeaturedArtwork } from "@/components/featured-artwork"
import { products } from "@/lib/products"

// Get artworks from the products file
const artworks = products.map((product) => ({
  id: product.id,
  title: product.title,
  category: product.category,
  price: product.price,
  image: product.images[0],
  categories: product.category.toLowerCase().includes("mixed technique")
    ? ["techniques", "all"]
    : product.category.toLowerCase().includes("watercolor")
      ? ["watercolors", "all"]
      : product.category.toLowerCase().includes("drawing")
        ? ["drawings", "all"]
        : product.category.toLowerCase().includes("painting")
          ? ["paintings", "all"]
          : ["techniques", "all"],
}))

// Update the categoryData to reflect the new number of watercolor items
const categoryData = {
  all: {
    title: "All Works",
    description: "Explore our complete collection of artworks",
    items: products.length,
  },
  watercolors: {
    title: "Watercolors",
    description: "Fluidity and transparency in every brushstroke",
    items: artworks.filter((artwork) => artwork.categories.includes("watercolors")).length,
  },
  drawings: {
    title: "Drawings",
    description: "Expression through lines and shadows",
    items: artworks.filter((artwork) => artwork.categories.includes("drawings")).length,
  },
  paintings: {
    title: "Paintings",
    description: "Complete works with depth and texture",
    items: artworks.filter((artwork) => artwork.categories.includes("paintings")).length,
  },
  techniques: {
    title: "Mixed Techniques",
    description: "Experimentation with various materials and methods",
    items: artworks.filter((artwork) => artwork.categories.includes("techniques")).length,
  },
}

interface CategoryPageProps {
  params: {
    category: string
  }
}

export function generateMetadata({ params }: CategoryPageProps): Metadata {
  const category = params.category
  const data = categoryData[category as keyof typeof categoryData] || categoryData.all

  return {
    title: `${data.title} | Rodrigo Méndez Gallery`,
    description: data.description,
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = params.category
  const data = categoryData[category as keyof typeof categoryData] || categoryData.all

  // Filter artworks by category
  const filteredArtworks = artworks.filter((artwork) => artwork.categories.includes(category))

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:px-6 md:py-12">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">{data.title}</h1>
        <p className="text-gray-600 mt-2">{data.description}</p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <Button variant="outline" className="flex items-center gap-2">
          <Filter className="h-4 w-4" />
          Filter
        </Button>

        <div className="flex items-center gap-4">
          <p className="text-sm text-gray-500">{data.items} products</p>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-2">
                Sort by: Featured
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Featured</DropdownMenuItem>
              <DropdownMenuItem>Price: Low to High</DropdownMenuItem>
              <DropdownMenuItem>Price: High to Low</DropdownMenuItem>
              <DropdownMenuItem>Newest</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <Separator className="mb-8" />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArtworks.map((artwork) => (
          <FeaturedArtwork
            key={artwork.id}
            title={artwork.title}
            category={artwork.category}
            price={artwork.price}
            image={artwork.image}
            href={`/products/${artwork.id}`}
          />
        ))}
      </div>
    </div>
  )
}
