import CategoryPageClient from "./CategoryPageClient"

interface CategoryPageProps {
  params: {
    category: string
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

export default function CategoryPage({ params }: CategoryPageProps) {
  return <CategoryPageClient params={params} />
}
