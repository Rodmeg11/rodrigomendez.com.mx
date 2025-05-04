import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"

interface FeaturedArtworkProps {
  title: string
  category: string
  price: string
  image: string
  href: string
}

export function FeaturedArtwork({ title, category, price, image, href }: FeaturedArtworkProps) {
  return (
    <div className="group">
      <Link href={href} className="block overflow-hidden rounded-lg">
        <div className="relative aspect-[3/4] overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>
      <div className="mt-4">
        <Link href={href}>
          <h3 className="font-medium text-lg group-hover:underline">{title}</h3>
        </Link>
        <p className="text-gray-500 text-sm">{category}</p>
        <div className="mt-2 flex items-center justify-between">
          <p className="font-bold">${price} USD</p>
          <Button size="sm" variant="outline" className="opacity-0 group-hover:opacity-100 transition-opacity">
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add
          </Button>
        </div>
      </div>
    </div>
  )
}
