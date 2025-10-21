"use client"

import { useEffect, useState } from "react"
import { Filter, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { OptimizedArtwork } from "@/components/optimized-artwork"
import { products } from "@/lib/products"

const artworks = products.map((product) => ({
  id: product.id,
  title: product.title,
  category: product.category,
  image: product.images[0],
  technique: product.category.toLowerCase().includes("watercolor")
    ? "Watercolor"
    : product.category.toLowerCase().includes("sketchbook")
      ? "Pen & Ink"
      : product.category.toLowerCase().includes("painting")
        ? "Mixed Media"
        : "Drawing",
  medium: "Paper",
}))

interface CategoryPageProps {
  params: {
    category: string
  }
}

export function CategoryPageClient({ params }: CategoryPageProps) {
  const [filteredArtworks, setFilteredArtworks] = useState<typeof artworks>([])
  const [showFilters, setShowFilters] = useState(false)
  const [selectedTechnique, setSelectedTechnique] = useState<string>("")

  const category = params.category

  useEffect(() => {
    let filtered = artworks.filter((artwork) => {
      const cat = artwork.category.toLowerCase()
      if (category === "watercolors") return cat.includes("watercolor")
      if (category === "sketchbook") return cat.includes("sketchbook")
      if (category === "paintings") return cat.includes("painting")
      if (category === "drawings") return cat.includes("original drawing")
      return true
    })

    if (category === "drawings") {
      const drawingOrder = ["62", "63", "64", "65", "66", "67", "68", "69", "70"]
      filtered = filtered.sort((a, b) => {
        const indexA = drawingOrder.indexOf(a.id)
        const indexB = drawingOrder.indexOf(b.id)
        if (indexA === -1 && indexB === -1) return 0
        if (indexA === -1) return 1
        if (indexB === -1) return -1
        return indexA - indexB
      })
    }

    if (selectedTechnique) {
      filtered = filtered.filter((artwork) => artwork.technique === selectedTechnique)
    }

    setFilteredArtworks(filtered)
  }, [category, selectedTechnique])

  const clearFilters = () => setSelectedTechnique("")
  const availableTechniques = [...new Set(artworks.map((a) => a.technique))]

  const titles: Record<string, string> = {
    watercolors: "Watercolors",
    sketchbook: "Sketchbook Studies",
    paintings: "Paintings",
    drawings: "Drawings",
    all: "All Works",
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8 md:px-6 md:py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">{titles[category] || "Gallery"}</h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <Button
            variant="outline"
            className="flex items-center gap-2 bg-transparent"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="h-4 w-4" />
            Filter
            {selectedTechnique && (
              <span className="bg-black text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                1
              </span>
            )}
          </Button>
          <p className="text-sm text-gray-500">{filteredArtworks.length} products</p>
        </div>

        {showFilters && (
          <div className="mb-8 p-4 bg-gray-50 rounded-lg">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Technique:</label>
                <div className="flex flex-wrap gap-2">
                  {availableTechniques.map((technique) => (
                    <Button
                      key={technique}
                      variant={selectedTechnique === technique ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedTechnique(selectedTechnique === technique ? "" : technique)}
                    >
                      {technique}
                    </Button>
                  ))}
                </div>
              </div>
              {selectedTechnique && (
                <Button variant="ghost" size="sm" onClick={clearFilters} className="flex items-center gap-1">
                  <X className="h-4 w-4" />
                  Clear
                </Button>
              )}
            </div>
          </div>
        )}

        <Separator className="mb-8" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArtworks.map((artwork, index) => (
            <OptimizedArtwork
              key={artwork.id}
              title={artwork.title}
              category={artwork.category}
              image={artwork.image}
              href={`/products/${artwork.id}`}
              index={index}
            />
          ))}
        </div>

        {filteredArtworks.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">No artworks found.</p>
            <Button onClick={clearFilters}>Clear Filters</Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default CategoryPageClient
