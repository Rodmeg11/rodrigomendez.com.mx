"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ShoppingCart, Search, Instagram, Youtube, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  return (
    <header className="border-b">
      {/* Top Bar */}
      <div className="bg-black text-white py-2 px-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <Link
            href="https://www.instagram.com/rockdrigo.mendez/"
            className="hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram size={18} />
            <span className="sr-only">Instagram</span>
          </Link>
          <Link
            href="https://www.youtube.com/@rodrigomendez7733"
            className="hover:text-gray-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube size={18} />
            <span className="sr-only">YouTube</span>
          </Link>
        </div>
        <div className="text-sm font-medium hidden md:block">
          <Link href="/newsletter" className="hover:underline">
            SIGN UP FOR MY NEWSLETTER →
          </Link>
        </div>
        <div className="md:hidden"></div>
      </div>

      {/* Main Header */}
      <div className="py-4 px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-xl font-bold hover:text-gray-600">
                  Home
                </Link>
                <Link href="/collections/all" className="text-xl font-bold hover:text-gray-600">
                  Collections
                </Link>
                <Link href="/collections/watercolors" className="text-lg hover:text-gray-600 pl-4">
                  Watercolors
                </Link>
                <Link href="/collections/drawings" className="text-lg hover:text-gray-600 pl-4">
                  Drawings
                </Link>
                <Link href="/collections/paintings" className="text-lg hover:text-gray-600 pl-4">
                  Paintings
                </Link>
                <Link href="/collections/techniques" className="text-lg hover:text-gray-600 pl-4">
                  Mixed Techniques
                </Link>
                <Link href="/about" className="text-xl font-bold hover:text-gray-600">
                  About the Artist
                </Link>
                <Link href="/contact" className="text-xl font-bold hover:text-gray-600">
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          <Link href="/" className="ml-4 md:ml-0">
            <div className="font-bold text-xl">RODRIGO MÉNDEZ GALLERY</div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="font-medium hover:text-gray-600">
            Home
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="link" className="font-medium hover:text-gray-600 p-0 h-auto">
                Collections <ChevronDown size={16} className="ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center">
              <DropdownMenuItem asChild>
                <Link href="/collections/all">All Works</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/collections/watercolors">Watercolors</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/collections/drawings">Drawings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/collections/paintings">Paintings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/collections/techniques">Mixed Techniques</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href="/about" className="font-medium hover:text-gray-600">
            About the Artist
          </Link>
          <Link href="/contact" className="font-medium hover:text-gray-600">
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          {isSearchOpen ? (
            <div className="flex items-center">
              <Input
                type="search"
                placeholder="Search..."
                className="w-[200px]"
                autoFocus
                onBlur={() => setIsSearchOpen(false)}
              />
              <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(false)}>
                <X size={20} />
              </Button>
            </div>
          ) : (
            <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
              <Search size={20} />
              <span className="sr-only">Search</span>
            </Button>
          )}
          <Button variant="ghost" size="icon" asChild>
            <Link href="/cart">
              <ShoppingCart size={20} />
              <span className="sr-only">Cart</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
