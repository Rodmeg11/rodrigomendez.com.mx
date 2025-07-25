"use client"

import { useState } from "react"
import { ShoppingCart, Check, Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart/cart-provider"

interface AddToCartButtonProps {
  product: {
    id: string
    title: string
    price: string
    image: string
  }
  showQuantity?: boolean
}

export function AddToCartButton({ product, showQuantity = true }: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(1)
  const [isAdded, setIsAdded] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = () => {
    // Add the item to cart multiple times based on quantity
    for (let i = 0; i < quantity; i++) {
      addItem(product)
    }

    // Show success state
    setIsAdded(true)

    // Reset success state after 2 seconds
    setTimeout(() => {
      setIsAdded(false)
    }, 2000)
  }

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const decrementQuantity = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1))
  }

  return (
    <div className="flex flex-col space-y-4">
      {showQuantity && (
        <div className="flex items-center">
          <span className="mr-4 font-medium">Quantity:</span>
          <div className="flex items-center border rounded-md">
            <Button variant="ghost" size="icon" className="rounded-none" onClick={decrementQuantity}>
              <Minus className="h-4 w-4" />
            </Button>
            <span className="w-10 text-center">{quantity}</span>
            <Button variant="ghost" size="icon" className="rounded-none" onClick={incrementQuantity}>
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>
      )}

      <Button onClick={handleAddToCart} className="flex-1 transition-all duration-300" disabled={isAdded}>
        {isAdded ? (
          <>
            <Check className="h-4 w-4 mr-2" />
            Added to Cart
          </>
        ) : (
          <>
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </>
        )}
      </Button>
    </div>
  )
}
