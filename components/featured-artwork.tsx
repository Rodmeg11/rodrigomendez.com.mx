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
      <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 group-hover:scale-105">
        <div className="aspect-[4/3] relative">
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
        <div className="p-4 bg-white dark:bg-gray-800">
          <h3 className="text-lg font-semibold mb-1 group-hover:text-blue-600 transition-colors">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">{category}</p>
          {/* Precio removido - solo título y categoría */}
        </div>
      </div>
    </Link>
  )
}

export const FeaturedArtwork = memo(FeaturedArtworkComponent)
