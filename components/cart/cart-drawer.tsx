"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { ShoppingCart, Trash2, Plus, Minus, ShoppingBag } from "lucide-react"
import { useCart } from "@/components/cart/cart-provider"

interface CartDrawerProps {
  children?: React.ReactNode
}

export function CartDrawer({ children }: CartDrawerProps) {
  const [open, setOpen] = useState(false)
  const { items, removeItem, updateQuantity, totalItems, subtotal } = useCart()

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        {children || (
          <Button variant="ghost" size="icon" className="relative">
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
            <span className="sr-only">Open cart</span>
          </Button>
        )}
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-md flex flex-col">
        <SheetHeader>
          <SheetTitle className="text-xl">Your Cart</SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center space-y-4 py-12">
            <ShoppingBag size={64} className="text-muted-foreground" />
            <div className="text-center">
              <h3 className="font-medium text-lg">Your cart is empty</h3>
              <p className="text-muted-foreground mt-1">Add some artwork to get started</p>
            </div>
            <Button asChild onClick={() => setOpen(false)}>
              <Link href="/collections/all">Browse Collection</Link>
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4">
              {items.map((item) => (
                <div key={item.id} className="flex py-4">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={100}
                      height={100}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium">
                        <h3>
                          <Link href={`/products/${item.id}`} onClick={() => setOpen(false)}>
                            {item.title}
                          </Link>
                        </h3>
                        <p className="ml-4">${item.price}</p>
                      </div>
                    </div>

                    <div className="flex flex-1 items-end justify-between text-sm">
                      <div className="flex items-center border rounded-md">
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-none"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        >
                          <Minus className="h-3 w-3" />
                        </Button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-8 w-8 rounded-none"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        >
                          <Plus className="h-3 w-3" />
                        </Button>
                      </div>

                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                        onClick={() => removeItem(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                        <span className="sr-only">Remove</span>
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t pt-4">
              <div className="flex justify-between text-base font-medium py-2">
                <p>Subtotal</p>
                <p>${subtotal.toLocaleString()}</p>
              </div>
              <p className="text-sm text-muted-foreground mb-4">Shipping and taxes calculated at checkout</p>
              <Button className="w-full" size="lg">
                Checkout
              </Button>
              <div className="mt-4 flex justify-center text-center text-sm text-muted-foreground">
                <Button variant="link" onClick={() => setOpen(false)}>
                  Continue Shopping
                </Button>
              </div>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
