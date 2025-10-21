import type { Metadata } from "next"
import CategoryPageClient from "./CategoryPageClient"

interface CategoryPageProps {
  params: {
    category: string
  }
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const categoryNames: Record<string, string> = {
    watercolors: "Watercolors",
    paintings: "Paintings",
    drawings: "Drawings",
    sketchbook: "Sketchbook",
    all: "All Works",
  }

  const categoryName = categoryNames[params.category] || "Collection"

  return {
    title: `${categoryName} | Rodrigo Méndez Gallery`,
    description: `Explore ${categoryName.toLowerCase()} by Rodrigo Méndez`,
  }
}

export function generateStaticParams() {
  return [
    { category: "watercolors" },
    { category: "paintings" },
    { category: "drawings" },
    { category: "sketchbook" },
    { category: "all" },
  ]
}

export const revalidate = 3600 // Revalidate every hour

export default function CategoryPage({ params }: CategoryPageProps) {
  return <CategoryPageClient params={params} />
}
