"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/components/cart/cart-provider"

export function CartContent() {
  const { items, removeItem, updateQuantity, totalItems, subtotal } = useCart()
  const [isClient, setIsClient] = useState(false)

  // This ensures we only render the cart on the client side
  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <div className="py-12 text-center">Loading cart...</div>
  }

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 space-y-6">
        <ShoppingBag size={64} className="text-muted-foreground" />
        <div className="text-center">
          <h2 className="text-2xl font-medium">Your cart is empty</h2>
          <p className="text-muted-foreground mt-2">Looks like you haven't added any artwork to your cart yet.</p>
        </div>
        <Button asChild>
          <Link href="/collections/all">
            Browse Collection <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-3 gap-8">
      <div className="md:col-span-2">
        <div className="rounded-lg border overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Product
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Price
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Quantity
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Total
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {items.map((item) => {
                const itemPrice = Number.parseFloat(item.price.replace(/,/g, ""))
                const itemTotal = itemPrice * item.quantity

                return (
                  <tr key={item.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-md border">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            width={64}
                            height={64}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="ml-4">
                          <Link href={`/products/${item.id}`} className="text-sm font-medium hover:underline">
                            {item.title}
                          </Link>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">${item.price}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center border rounded-md w-fit">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-none"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-none"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">${itemTotal.toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Remove</span>
                      </Button>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="md:col-span-1">
        <div className="bg-gray-50 rounded-lg p-6 sticky top-24">
          <h2 className="text-lg font-medium mb-4">Order Summary</h2>

          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-gray-600">Subtotal ({totalItems} items)</span>
              <span>${subtotal.toLocaleString()}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Shipping</span>
              <span>Calculated at checkout</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-600">Tax</span>
              <span>Calculated at checkout</span>
            </div>

            <Separator />

            <div className="flex justify-between font-medium text-lg">
              <span>Total</span>
              <span>${subtotal.toLocaleString()}</span>
            </div>

            <Button className="w-full" size="lg">
              Proceed to Checkout
            </Button>

            <div className="text-center text-sm text-muted-foreground">
              <p>Secure checkout powered by Stripe</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
