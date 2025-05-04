import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Minus, Plus, ShoppingCart, Heart } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { FeaturedArtwork } from "@/components/featured-artwork"
import { ImageModal } from "@/components/image-modal"

import "../products.css"

export default function ProductPage() {
  const product = {
    id: "8",
    title: "Mountain Valley Vista",
    category: "Original Watercolor",
    price: "2,400.00",
    description:
      "A dramatic watercolor landscape depicting a mountainous valley at dawn or dusk. The painting showcases rugged cliffs and rock formations with a distant valley view. The sky features soft blue and peach tones that complement the earthy colors of the mountains, creating a sense of depth and atmosphere.",
    details: "Watercolor on paper\nDimensions: 30 x 40 cm\nYear: 2023\nSigned by the artist",
    images: ["/images/watercolor-mountain-valley.png", "/images/watercolor-mountain-valley.png"],
    related: ["7", "4", "1"],
  }

  // Find related products
  const relatedProducts = [
    {
      id: "7",
      title: "Serene Lake at Sunset",
      category: "Original Watercolor",
      price: "2,200.00",
      images: ["/images/watercolor-landscape-lake.png"],
    },
    {
      id: "4",
      title: "Watercolor Landscape",
      category: "Original Watercolor",
      price: "1,500.00",
      images: ["/placeholder.svg?height=800&width=600"],
    },
    {
      id: "1",
      title: "And I Was Never The Same",
      category: "Original Painting",
      price: "19,000.00",
      images: ["/placeholder.svg?height=800&width=600"],
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:px-6 md:py-12">
      <Link href="/collections/watercolors" className="flex items-center text-sm mb-8 hover:underline">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to watercolors
      </Link>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {/* Product image - larger and without thumbnails */}
        <div>
          <div className="image-container">
            <Image
              src={product.images[0] || "/placeholder.svg"}
              alt={product.title}
              fill
              className="object-contain"
              priority
            />
            <div className="absolute inset-0">
              <ImageModal src={product.images[0] || "/placeholder.svg"} alt={product.title} />
            </div>
          </div>
        </div>

        {/* Product information */}
        <div>
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-gray-600 mt-1">{product.category}</p>
          <p className="text-2xl font-bold mt-4">${product.price} USD</p>

          <Separator className="my-6" />

          <div className="space-y-6">
            <div>
              <h2 className="font-medium mb-2">Description</h2>
              <p className="text-gray-600">{product.description}</p>
            </div>

            <div>
              <h2 className="font-medium mb-2">Details</h2>
              <p className="text-gray-600 whitespace-pre-line">{product.details}</p>
            </div>

            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center border rounded-md">
                <Button variant="ghost" size="icon" className="rounded-none">
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-10 text-center">1</span>
                <Button variant="ghost" size="icon" className="rounded-none">
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              <Button className="flex-1">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Add to Cart
              </Button>

              <Button variant="outline" size="icon">
                <Heart className="h-4 w-4" />
                <span className="sr-only">Add to favorites</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">You may also like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((product) => (
              <FeaturedArtwork
                key={product.id}
                title={product.title}
                category={product.category}
                price={product.price}
                image={product.images[0]}
                href={`/products/${product.id}`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
