"use client"

import { useEffect, useState } from "react"
import { Filter, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { OptimizedArtwork } from "@/components/optimized-artwork"
import { products } from "@/lib/products"
import { shuffleArray } from "@/lib/utils"

// Get artworks from the products file
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
        ? product.details?.includes("Acrylic")
          ? "Acrylic"
          : "Mixed Media"
        : "Drawing",
  medium: product.details?.includes("canvas") ? "Canvas" : "Paper",
  categories: product.category.toLowerCase().includes("watercolor")
    ? ["watercolors", "all"]
    : product.category.toLowerCase().includes("sketchbook")
      ? ["sketchbook", "all"]
      : product.category.toLowerCase().includes("painting")
        ? ["paintings", "all"]
        : product.category.toLowerCase().includes("original drawing")
          ? ["drawings", "all"]
          : ["all"],
}))

const categoryData = {
  all: {
    title: "All Works",
    items: artworks.filter((artwork) => artwork.categories?.includes("all")).length,
    backgroundImage: null,
  },
  watercolors: {
    title: "Watercolors",
    items: artworks.filter((artwork) => artwork.categories?.includes("watercolors")).length,
    backgroundImage: null,
  },
  sketchbook: {
    title: "Sketchbook Studies",
    items: artworks.filter((artwork) => artwork.categories?.includes("sketchbook")).length,
    backgroundImage: null,
  },
  paintings: {
    title: "Paintings",
    items: artworks.filter((artwork) => artwork.categories?.includes("paintings")).length,
    backgroundImage: null,
  },
  drawings: {
    title: "Drawings",
    items: artworks.filter((artwork) => artwork.categories?.includes("drawings")).length,
    backgroundImage: null,
  },
}

interface CategoryPageProps {
  params: {
    category: string
  }
}

export default function CategoryPageClient({ params }: CategoryPageProps) {
  const [shuffledArtworks, setShuffledArtworks] = useState<typeof artworks>([])
  const [filteredArtworks, setFilteredArtworks] = useState<typeof artworks>([])
  const [showFilters, setShowFilters] = useState(false)
  const [selectedTechnique, setSelectedTechnique] = useState<string>("")
  const [selectedMedium, setSelectedMedium] = useState<string>("")

  const category = params.category
  const data = categoryData[category as keyof typeof categoryData] || categoryData.all

  useEffect(() => {
    // Filter artworks by category
    const filtered = artworks.filter((artwork) => artwork.categories && artwork.categories.includes(category))

    // Special handling for paintings category to keep Still Life Series together but in random position
    if (category === "paintings") {
      const stillLifeSeriesIds = ["52", "53", "54", "55"]
      const stillLifeSeries = filtered.filter((artwork) => stillLifeSeriesIds.includes(artwork.id))
      const otherPaintings = filtered.filter((artwork) => !stillLifeSeriesIds.includes(artwork.id))

      const sortedStillLifeSeries = stillLifeSeries.sort((a, b) => {
        const orderA = stillLifeSeriesIds.indexOf(a.id)
        const orderB = stillLifeSeriesIds.indexOf(b.id)
        return orderA - orderB
      })

      const shuffledOtherPaintings = shuffleArray(otherPaintings)
      const randomPosition = Math.floor(Math.random() * (shuffledOtherPaintings.length + 1))

      const finalArray = [
        ...shuffledOtherPaintings.slice(0, randomPosition),
        ...sortedStillLifeSeries,
        ...shuffledOtherPaintings.slice(randomPosition),
      ]

      setShuffledArtworks(finalArray)
      setFilteredArtworks(finalArray)
    } else if (category === "watercolors") {
      // Separate Chromatic Explosion from other watercolors
      const chromaticExplosion = filtered.find((artwork) => artwork.title === "Chromatic Explosion")
      const otherWatercolors = filtered.filter((artwork) => artwork.title !== "Chromatic Explosion")

      // Group other watercolors by landscapes and cityscapes
      const landscapes = otherWatercolors.filter((artwork) => {
        const title = artwork.title.toLowerCase()
        return (
          !title.includes("urban") &&
          !title.includes("historic") &&
          !title.includes("tower") &&
          !title.includes("cathedral") &&
          !title.includes("street") &&
          !title.includes("canal") &&
          !title.includes("quarter") &&
          !title.includes("twilight") &&
          !title.includes("plaza")
        )
      })

      const cityscapes = otherWatercolors.filter((artwork) => {
        const title = artwork.title.toLowerCase()
        return (
          title.includes("urban") ||
          title.includes("historic") ||
          title.includes("tower") ||
          title.includes("cathedral") ||
          title.includes("street") ||
          title.includes("canal") ||
          title.includes("quarter") ||
          title.includes("twilight") ||
          title.includes("plaza")
        )
      })

      const shuffledLandscapes = shuffleArray(landscapes)
      const shuffledCityscapes = shuffleArray(cityscapes)

      // Randomly decide which group goes first
      const landscapesFirst = Math.random() < 0.5
      const mainArray = landscapesFirst
        ? [...shuffledLandscapes, ...shuffledCityscapes]
        : [...shuffledCityscapes, ...shuffledLandscapes]

      // Add Chromatic Explosion at the end
      const finalArray = chromaticExplosion ? [...mainArray, chromaticExplosion] : mainArray

      setShuffledArtworks(finalArray)
      setFilteredArtworks(finalArray)
    } else if (category === "drawings") {
      const drawingOrder = ["62", "63", "64", "65", "66", "67", "68", "69", "70"]

      const orderedDrawings = drawingOrder
        .map((id) => filtered.find((artwork) => artwork.id === id))
        .filter((artwork): artwork is NonNullable<typeof artwork> => artwork !== undefined)

      const remainingDrawings = filtered.filter((artwork) => !drawingOrder.includes(artwork.id))

      const finalArray = [...orderedDrawings, ...remainingDrawings]

      setShuffledArtworks(finalArray)
      setFilteredArtworks(finalArray)
    } else {
      const shuffled = shuffleArray(filtered)
      setShuffledArtworks(shuffled)
      setFilteredArtworks(shuffled)
    }
  }, [category])

  // Apply filters
  useEffect(() => {
    let filtered = [...shuffledArtworks]

    if (selectedTechnique) {
      filtered = filtered.filter((artwork) => artwork.technique === selectedTechnique)
    }

    if (selectedMedium) {
      filtered = filtered.filter((artwork) => artwork.medium === selectedMedium)
    }

    setFilteredArtworks(filtered)
  }, [selectedTechnique, selectedMedium, shuffledArtworks])

  const clearFilters = () => {
    setSelectedTechnique("")
    setSelectedMedium("")
  }

  const hasActiveFilters = selectedTechnique || selectedMedium

  // Get unique techniques and mediums for current category
  const availableTechniques = [...new Set(shuffledArtworks.map((artwork) => artwork.technique))]
  const availableMediums = [...new Set(shuffledArtworks.map((artwork) => artwork.medium))]

  const backgroundStyle = data.backgroundImage
    ? {
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url(${data.backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }
    : {}

  return (
    <div className="min-h-screen" style={backgroundStyle}>
      <div className="max-w-7xl mx-auto px-4 py-8 md:px-6 md:py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">{data.title}</h1>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
          <Button
            variant="outline"
            className="flex items-center gap-2 bg-transparent"
            onClick={() => setShowFilters(!showFilters)}
          >
            <Filter className="h-4 w-4" />
            Filter
            {hasActiveFilters && (
              <span className="bg-black text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">
                {(selectedTechnique ? 1 : 0) + (selectedMedium ? 1 : 0)}
              </span>
            )}
          </Button>

          <div className="flex items-center gap-4">
            <p className="text-sm text-gray-500">{filteredArtworks.length} products</p>
          </div>
        </div>

        {/* Filter Panel */}
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

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Medium:</label>
                <div className="flex flex-wrap gap-2">
                  {availableMediums.map((medium) => (
                    <Button
                      key={medium}
                      variant={selectedMedium === medium ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedMedium(selectedMedium === medium ? "" : medium)}
                    >
                      {medium}
                    </Button>
                  ))}
                </div>
              </div>

              {hasActiveFilters && (
                <Button variant="ghost" size="sm" onClick={clearFilters} className="flex items-center gap-1">
                  <X className="h-4 w-4" />
                  Clear Filters
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

        {filteredArtworks.length === 0 && hasActiveFilters && (
          <div className="text-center py-12">
            <p className="text-gray-500 mb-4">No artworks found with the selected filters.</p>
            <Button onClick={clearFilters}>Clear Filters</Button>
          </div>
        )}
      </div>
    </div>
  )
}
