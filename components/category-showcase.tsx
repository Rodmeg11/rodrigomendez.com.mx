import Image from "next/image"
import Link from "next/link"

interface CategoryShowcaseProps {
  title: string
  image: string
  href: string
  description: string
}

export function CategoryShowcase({ title, image, href, description }: CategoryShowcaseProps) {
  // Use the first watercolor image for the watercolors category showcase
  const showcaseImage = title === "Watercolors" ? "/images/watercolor-landscape-lake.png" : image

  return (
    <Link href={href} className="group block">
      <div className="relative aspect-square overflow-hidden rounded-lg">
        <Image
          src={showcaseImage || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white p-4 opacity-100 transition-opacity group-hover:bg-black/50">
          <h3 className="text-xl font-bold text-center mb-2">{title}</h3>
          <p className="text-sm text-center">{description}</p>
        </div>
      </div>
    </Link>
  )
}
