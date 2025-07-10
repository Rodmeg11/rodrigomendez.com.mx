import Image from "next/image"
import Link from "next/link"
import { memo } from "react"

interface CategoryShowcaseProps {
  title: string
  image: string
  href: string
  description: string
}

function CategoryShowcaseComponent({ title, image, href, description }: CategoryShowcaseProps) {
  // Use specific background images for different categories
  let showcaseImage = image

  if (title === "Watercolors") {
    showcaseImage = "/images/watercolor-background.png"
  } else if (title === "Sketchbook") {
    showcaseImage = "/images/sketchbook-background.jpg"
  } else if (title === "Paintings") {
    showcaseImage = "/images/painting-abstract-colorful.png"
  } else if (title === "Drawings") {
    showcaseImage = "/images/drawing-venice-canal.jpeg"
  }

  return (
    <Link href={href} className="group block" scroll={true}>
      <div className="relative aspect-square overflow-hidden rounded-lg">
        <Image
          src={showcaseImage || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          quality={85}
          loading="lazy"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white p-4 opacity-100 transition-opacity group-hover:bg-black/50">
          <h3 className="text-xl font-bold text-center">{title}</h3>
        </div>
      </div>
    </Link>
  )
}

export const CategoryShowcase = memo(CategoryShowcaseComponent)
