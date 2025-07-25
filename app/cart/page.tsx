import type { Metadata } from "next"
import { CartContent } from "@/components/cart/cart-content"

export const metadata: Metadata = {
  title: "Shopping Cart | Rodrigo Méndez Gallery",
  description: "View and manage your shopping cart",
}

export default function CartPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      <CartContent />
    </div>
  )
}
