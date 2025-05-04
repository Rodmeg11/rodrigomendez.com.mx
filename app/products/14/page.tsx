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
    id: "14",
    title: "Tranquil Lakeside",
    category: "Original Watercolor",
    price: "2,300.00",
    description:
      "A peaceful watercolor landscape depicting a serene lake framed by trees. The composition masterfully captures the reflective quality of the water and the lush vegetation surrounding it. The artist uses a harmonious palette of blues and greens with touches of earth tones to create a sense of depth and tranquility. The delicate brushwork in the foliage and the subtle gradations in the water surface demonstrate exceptional technical skill.",
    details: "Watercolor on paper\nDimensions: 28 x 38 cm\nYear: 2023\nSigned by the artist",
    images: ["/images/watercolor-lake-view.png", "/images/watercolor-lake-view.png"],
    related: ["7", "9", "15"],
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
      id: "9",
      title: "Golden Fields Panorama",
      category: "Original Watercolor",
      price: "2,600.00",
      images: ["/images/watercolor-golden-fields.png"],
    },
    {
      id: "15",
      title: "Mountain Majesty",
      category: "Original Watercolor",
      price: "2,500.00",
      images: ["/images/watercolor-mountain-cliff.png"],
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
