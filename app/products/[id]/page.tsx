import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { FeaturedArtwork } from "@/components/featured-artwork"
import { products } from "@/lib/products"
import { ImageModal } from "@/components/image-modal"
import { SocialShare } from "@/components/social-share"

import "../products.css"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id === params.id)

  // If product not found, redirect to 404 or show error
  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 md:px-6 md:py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <p className="text-gray-600 mb-8">The product you're looking for doesn't exist.</p>
          <Link href="/collections/all" className="text-blue-600 hover:underline">
            ← Back to all collections
          </Link>
        </div>
      </div>
    )
  }

  const relatedProducts = product.related
    .map((id) => products.find((p) => p.id === id))
    .filter(Boolean) as typeof products

  // Determine the category for the "Back to" link
  const getCategory = () => {
    if (product.category.toLowerCase().includes("watercolor")) return "watercolors"
    if (product.category.toLowerCase().includes("sketchbook")) return "sketchbook"
    if (product.category.toLowerCase().includes("painting")) return "paintings"
    if (product.category.toLowerCase().includes("original drawing")) return "drawings"
    if (product.category.toLowerCase().includes("mixed")) return "all"
    if (product.category.toLowerCase().includes("abstract")) return "all"
    return "all"
  }

  const category = getCategory()
  const isWatercolor = product.category.toLowerCase().includes("watercolor")
  const isPainting = product.category.toLowerCase().includes("painting")
  const isSketchbook = product.category.toLowerCase().includes("sketchbook")
  const isNotForSale = product.price === "not-for-sale"

  // Check if image is vertical (portrait orientation)
  const isVerticalImage = (title: string) => {
    // Imágenes específicas que se tratan como verticales
    if (
      title === "Cathedral Plaza" ||
      title === "Tower Perspective" ||
      title === "Urban Street with Dome" ||
      title === "Countryside Vista" ||
      title === "Serene Lake at Sunset"
    ) {
      return true
    }

    const verticalKeywords = [
      "tower",
      "perspective",
      "spire",
      "twilight",
      "quarter",
      "street",
      "urban",
      "portrait",
      "expressive",
      "sketchbook",
      "face",
      // Eliminar "lake", "sunset", "serene" para que "Serene Lake at Sunset" no se detecte como vertical
      "tranquil",
      "lakeside",
      "solitary",
      "reflection",
    ]
    return verticalKeywords.some((keyword) => title.toLowerCase().includes(keyword))
  }

  // Caso especial para Chromatic Explosion - solo alineación vertical
  const isAlignedVertically = product.title === "Chromatic Explosion" || isVerticalImage(product.title)
  const imageIsVertical = isVerticalImage(product.title)

  // Determine watercolor size category based on real dimensions
  const getWatercolorSizeClass = (title: string) => {
    if (!isWatercolor) return ""

    // Small watercolors (21x29.7cm, 24x32cm)
    const smallWatercolors = ["Historic Quarter", "Urban Twilight", "Blue Harmony Study"]

    // Large watercolors (35x45cm, 35x50cm, 38x55cm, 32x45cm)
    const largeWatercolors = [
      "Golden Fields Panorama",
      "Verdant Meadow",
      "Agricultural Fields",
      "Rolling Hills Vista",
      "Coastal Abstraction",
      "Mountain Majesty",
      "Mountain Valley Vista",
    ]

    if (smallWatercolors.includes(title)) return " watercolor-small"
    if (largeWatercolors.includes(title)) return " watercolor-large"
    return " watercolor-medium" // Medium size (28x38cm, 30x40cm, 30x42cm, 32x42cm)
  }

  // Determine image container class
  const imageContainerClass = () => {
    let classes = "image-container"
    if (imageIsVertical) classes += " vertical-image"
    classes += getWatercolorSizeClass(product.title)
    return classes
  }

  // Determine gap class based on image type
  const getGapClass = () => {
    if (isAlignedVertically) {
      return "gap-4 lg:gap-6" // Gap específico para imágenes verticales (más centrado)
    }
    return "gap-8 lg:gap-12" // Gap normal para el resto
  }

  // Determine container max width for vertical images
  const getContainerClass = () => {
    if (isAlignedVertically) {
      return "max-w-6xl mx-auto px-4 py-8 md:px-6 md:py-12 animate-fade-in overflow-x-hidden" // Contenedor más centrado para verticales
    }
    return "max-w-7xl mx-auto px-4 py-8 md:px-6 md:py-12 animate-fade-in overflow-x-hidden" // Contenedor estándar
  }

  // Determinar dimensiones de imagen según el título
  const getImageDimensions = () => {
    if (product.title === "Chromatic Explosion") {
      // Dimensiones más grandes para Chromatic Explosion - más protagonismo
      return { width: 1200, height: 1600 }
    }
    if (product.title === "Urban Twilight" || product.title === "Historic Quarter") {
      // Dimensiones aún más grandes para Urban Twilight y Historic Quarter - mayor protagonismo
      return { width: 1000, height: 1400 }
    }
    return imageIsVertical ? { width: 500, height: 700 } : { width: 900, height: 1200 }
  }

  // Determinar ancho de contenedores para Chromatic Explosion
  const getImageContainerWidth = () => {
    if (product.title === "Chromatic Explosion") {
      return "md:w-3/5" // 60% para la imagen de Chromatic Explosion
    }
    return isAlignedVertically ? "md:w-2/5" : "md:w-3/5"
  }

  const getTextContainerWidth = () => {
    if (product.title === "Chromatic Explosion") {
      return "md:w-2/5" // 40% para el texto de Chromatic Explosion
    }
    return isAlignedVertically ? "md:w-3/5" : "md:w-2/5"
  }

  const imageDimensions = getImageDimensions()

  return (
    <div className={getContainerClass()}>
      <Link href={`/collections/${category}`} className="flex items-center text-sm mb-8 hover:underline">
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to {category === "all" ? "all works" : category}
      </Link>

      <div
        className={`flex flex-col md:flex-row ${getGapClass()} ${isAlignedVertically ? "justify-center items-start" : ""}`}
      >
        {/* Product image - left side with conditional width */}
        <div
          className={`${getImageContainerWidth()} animate-slide-in ${isAlignedVertically ? "flex justify-center" : ""}`}
        >
          <div className={imageContainerClass()}>
            <Image
              src={product.images[0] || "/placeholder.svg?height=1200&width=900&query=artwork"}
              alt={product.title}
              width={imageDimensions.width}
              height={imageDimensions.height}
              quality={90}
              className="object-contain w-full h-auto"
              priority
              sizes={
                product.title === "Chromatic Explosion"
                  ? "(max-width: 768px) 100vw, 60vw"
                  : isAlignedVertically
                    ? "(max-width: 768px) 100vw, 40vw"
                    : "(max-width: 768px) 100vw, 60vw"
              }
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            />
            <div className="absolute inset-0">
              <ImageModal
                src={product.images[0] || "/placeholder.svg?height=1200&width=900&query=artwork"}
                alt={product.title}
              />
            </div>
          </div>
        </div>

        {/* Product information - right side with conditional width */}
        <div className={`${getTextContainerWidth()} animate-slide-up`}>
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1">
              <h1 className="text-2xl md:text-3xl font-bold">{product.title}</h1>
              <p className="text-gray-600 mt-1">{product.category}</p>
            </div>
            <div className="ml-4">
              <SocialShare title={product.title} image={product.images[0]} />
            </div>
          </div>

          <Separator className="my-6" />

          <div className="space-y-6">
            <div>
              <h2 className="font-medium mb-2">Details</h2>
              <p className="text-gray-600 whitespace-pre-line text-sm">{product.details}</p>
            </div>

            {/* Only show description for non-watercolor, non-painting, non-sketchbook, and non-drawing products */}
            {!isWatercolor && !isPainting && !isSketchbook && !product.category.toLowerCase().includes("drawing") && (
              <div>
                <h2 className="font-medium mb-2">Description</h2>
                <p className="text-gray-600">{product.description}</p>
              </div>
            )}

            {/* Only show "About This Piece" for sketchbook category */}
            {isSketchbook && (
              <div className="pt-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">About This Piece</h3>
                  <p className="text-sm text-gray-600">
                    <strong>Note:</strong> The pieces in this collection are part of the artist's personal sketchbook
                    studies and are not available for purchase.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <div className="mt-16 animate-slide-up">
          <h2 className="text-2xl font-bold mb-8">You may also like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((product, index) => (
              <FeaturedArtwork
                key={product.id}
                title={product.title}
                category={product.category}
                image={product.images[0]}
                href={`/products/${product.id}`}
                priority={index === 0} // Priority only for first related product
              />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
