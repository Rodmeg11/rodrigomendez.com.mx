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
  return (
    <Link href={href} className="group block" scroll={true}>
      <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-gray-100 mb-4 transition-transform duration-300 group-hover:scale-105">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          quality={85}
          priority={priority}
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
      </div>
      <div className="space-y-1">
        <h3 className="font-medium text-lg line-clamp-2 group-hover:text-gray-600 transition-colors">{title}</h3>
        <p className="text-gray-600 text-sm">{category}</p>
        {/* Precio removido - solo título y categoría */}
      </div>
    </Link>
  )
}

export const FeaturedArtwork = memo(FeaturedArtworkComponent)
