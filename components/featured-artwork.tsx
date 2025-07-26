import Image from "next/image"
import Link from "next/link"
import { memo } from "react"

interface FeaturedArtworkProps {
  title: string
  category: string
  price?: string // Hacemos el precio opcional
  image: string
  href: string
  priority?: boolean
}

function FeaturedArtworkComponent({ title, category, image, href, priority = false }: FeaturedArtworkProps) {
  // Special positioning for Bull Silhouette thumbnail
  const getImagePositioning = () => {
    if (title === "Bull Silhouette") {
      return "object-left"
    }
    return "object-center"
  }

  return (
    <div className="group">
      <Link
        href={href}
        className="block overflow-hidden rounded-lg"
        scroll={true}
        style={{
          WebkitTapHighlightColor: "rgba(0,0,0,0.1)",
          touchAction: "manipulation",
        }}
      >
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
          <Image
            src={image || "/placeholder.svg?height=800&width=600&query=artwork"}
            alt={title}
            width={600}
            height={800}
            quality={90}
            priority={priority}
            className={`object-cover w-full h-full transition-all duration-500 md:group-hover:scale-105 ${getImagePositioning()}`}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            draggable={false}
          />
        </div>
      </Link>
      <div className="mt-4">
        <Link
          href={href}
          scroll={true}
          style={{
            WebkitTapHighlightColor: "rgba(0,0,0,0.1)",
            touchAction: "manipulation",
          }}
        >
          <h3 className="font-medium text-lg md:group-hover:underline">{title}</h3>
        </Link>
        <p className="text-gray-500 text-sm">{category}</p>
      </div>
    </div>
  )
}

export const FeaturedArtwork = memo(FeaturedArtworkComponent)
