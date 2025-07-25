"use client"

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { products } from "@/lib/products"
import { FeaturedArtwork } from "@/components/featured-artwork"
import { X, Search } from "lucide-react"

interface SearchDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [results, setResults] = useState(products)

  // Filter products based on search criteria
  useEffect(() => {
    let filtered = [...products]

    // Filter by search term
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      filtered = filtered.filter(
        (product) =>
          product.title.toLowerCase().includes(term) ||
          product.description.toLowerCase().includes(term) ||
          product.category.toLowerCase().includes(term),
      )
    }

    // Filter by category
    if (selectedCategory) {
      filtered = filtered.filter((product) => product.category.toLowerCase().includes(selectedCategory.toLowerCase()))
    }

    setResults(filtered)
  }, [searchTerm, selectedCategory])

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category)
  }

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedCategory(null)
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[900px] max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Search Artwork</DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 mt-4">
          {/* Search and filters */}
          <div className="space-y-6">
            <div className="relative">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by title, technique..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8"
              />
              {searchTerm && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-1 top-1 h-7 w-7"
                  onClick={() => setSearchTerm("")}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>

            <div>
              <h3 className="font-medium mb-2">Categories</h3>
              <div className="space-y-1">
                <Button
                  variant={selectedCategory === null ? "default" : "outline"}
                  size="sm"
                  className="mr-2 mb-2"
                  onClick={() => handleCategorySelect(null)}
                >
                  All
                </Button>
                <Button
                  variant={selectedCategory === "watercolor" ? "default" : "outline"}
                  size="sm"
                  className="mr-2 mb-2"
                  onClick={() => handleCategorySelect("watercolor")}
                >
                  Watercolors
                </Button>
                <Button
                  variant={selectedCategory === "drawing" ? "default" : "outline"}
                  size="sm"
                  className="mr-2 mb-2"
                  onClick={() => handleCategorySelect("drawing")}
                >
                  Drawings
                </Button>
                <Button
                  variant={selectedCategory === "painting" ? "default" : "outline"}
                  size="sm"
                  className="mr-2 mb-2"
                  onClick={() => handleCategorySelect("painting")}
                >
                  Paintings
                </Button>
                <Button
                  variant={selectedCategory === "sketchbook" ? "default" : "outline"}
                  size="sm"
                  className="mr-2 mb-2"
                  onClick={() => handleCategorySelect("sketchbook")}
                >
                  Sketchbook
                </Button>
              </div>
            </div>

            <Button variant="outline" onClick={clearFilters} className="w-full bg-transparent">
              Clear Filters
            </Button>
          </div>

          {/* Results */}
          <div>
            <div className="mb-4 flex justify-between items-center">
              <h3 className="font-medium">{results.length} Results</h3>
              <div className="text-sm text-muted-foreground">
                Showing {Math.min(results.length, 9)} of {results.length}
              </div>
            </div>

            {results.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {results.slice(0, 9).map((product) => (
                  <FeaturedArtwork
                    key={product.id}
                    title={product.title}
                    category={product.category}
                    image={product.images[0]}
                    href={`/products/${product.id}`}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No results found. Try adjusting your filters.</p>
              </div>
            )}

            {results.length > 9 && (
              <div className="mt-6 text-center">
                <Button variant="outline">Load More</Button>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
