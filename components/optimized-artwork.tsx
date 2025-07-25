"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"
import { memo, useState, useRef, useEffect } from "react"

interface OptimizedArtworkProps {
  title: string
  category: string
  image: string
  href: string
  scroll?: boolean
  index: number
}

function OptimizedArtworkComponent({ title, category, image, href, scroll = true, index }: OptimizedArtworkProps) {
  const [isVisible, setIsVisible] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)
  const imgRef = useRef<HTMLDivElement>(null)

  // Intersection Observer for lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        rootMargin: "50px", // Start loading 50px before entering viewport
        threshold: 0.1,
      },
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current)
      }
    }
  }, [])

  // Special positioning for Bull Silhouette thumbnail
  const getImagePositioning = () => {
    if (title === "Bull Silhouette") {
      return "object-left"
    }
    return "object-center"
  }

  // Priority for first 6 images
  const shouldPrioritize = index < 6

  return (
    <div className="group" ref={imgRef}>
      <Link
        href={href}
        className="block overflow-hidden rounded-lg"
        scroll={scroll}
        style={{
          WebkitTapHighlightColor: "rgba(0,0,0,0.1)",
          touchAction: "manipulation",
        }}
      >
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
          {(isVisible || shouldPrioritize) && (
            <Image
              src={image || "/placeholder.svg?height=800&width=600&query=artwork"}
              alt={title}
              width={600}
              height={800}
              quality={90}
              priority={shouldPrioritize}
              loading={shouldPrioritize ? "eager" : "lazy"}
              className={`object-cover w-full h-full transition-all duration-500 md:group-hover:scale-105 ${getImagePositioning()} ${
                imageLoaded ? "opacity-100" : "opacity-0"
              }`}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              onLoad={() => setImageLoaded(true)}
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              draggable={false}
            />
          )}
          {!imageLoaded && (isVisible || shouldPrioritize) && (
            <div className="absolute inset-0 bg-gray-200 animate-pulse" />
          )}
        </div>
      </Link>
      <div className="mt-4">
        <Link
          href={href}
          scroll={scroll}
          style={{
            WebkitTapHighlightColor: "rgba(0,0,0,0.1)",
            touchAction: "manipulation",
          }}
        >
          <h3 className="font-medium text-lg md:group-hover:underline">{title}</h3>
        </Link>
        <p className="text-gray-500 text-sm">{category}</p>
        <div className="mt-3 flex items-center justify-end">
          <Button
            size="sm"
            variant="outline"
            className="opacity-0 md:group-hover:opacity-100 transition-opacity bg-transparent pointer-events-none md:pointer-events-auto"
          >
            <Eye className="h-4 w-4 mr-2" />
            View Details
          </Button>
        </div>
      </div>
    </div>
  )
}

export const OptimizedArtwork = memo(OptimizedArtworkComponent)
