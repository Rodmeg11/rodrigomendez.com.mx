"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

interface FeaturedArtworkProps {
  title: string
  category: string
  image: string
  href: string
  priority?: boolean
}

export function FeaturedArtwork({ title, category, image, href, priority = false }: FeaturedArtworkProps) {
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <Link href={href} className="group block">
      <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-[3/4] transition-transform duration-300 group-hover:scale-105">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className={`object-cover transition-opacity duration-300 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onLoad={() => setImageLoaded(true)}
        />
        {!imageLoaded && <div className="absolute inset-0 bg-gray-200 animate-pulse" />}
      </div>
      <div className="mt-4 space-y-1">
        <h3 className="font-medium text-gray-900 group-hover:text-gray-600 transition-colors">{title}</h3>
        <p className="text-sm text-gray-500">{category}</p>
      </div>
    </Link>
  )
}
