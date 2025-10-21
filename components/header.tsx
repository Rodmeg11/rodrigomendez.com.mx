"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, Search, Instagram, Youtube, Facebook, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { SearchDialog } from "@/components/search-dialog"

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [open, setOpen] = useState(false)

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
          <Link href="https://facebook.com" className="hover:text-gray-300" target="_blank" rel="noopener noreferrer">
            <Facebook size={18} />
            <span className="sr-only">Facebook</span>
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
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu />
                <span className="sr-only">Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="/" className="text-xl font-bold hover:text-gray-600" onClick={() => setOpen(false)}>
                  Home
                </Link>
                <Link
                  href="/collections/all"
                  className="text-xl font-bold hover:text-gray-600"
                  onClick={() => setOpen(false)}
                >
                  Collections
                </Link>
                <Link
                  href="/collections/watercolors"
                  className="text-lg hover:text-gray-600 pl-4"
                  onClick={() => setOpen(false)}
                >
                  Watercolors
                </Link>
                <Link
                  href="/collections/sketchbook"
                  className="text-lg hover:text-gray-600 pl-4"
                  onClick={() => setOpen(false)}
                >
                  Sketchbook
                </Link>
                <Link
                  href="/collections/paintings"
                  className="text-lg hover:text-gray-600 pl-4"
                  onClick={() => setOpen(false)}
                >
                  Paintings
                </Link>
                <Link
                  href="/collections/drawings"
                  className="text-lg hover:text-gray-600 pl-4"
                  onClick={() => setOpen(false)}
                >
                  Drawings
                </Link>
                <Link href="/about" className="text-xl font-bold hover:text-gray-600" onClick={() => setOpen(false)}>
                  About the Artist
                </Link>
                <Link href="/contact" className="text-xl font-bold hover:text-gray-600" onClick={() => setOpen(false)}>
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          <Link href="/" className="ml-4 md:ml-0">
            <div className="font-bold text-xl">RODRIGO MÉNDEZ </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-base font-medium hover:text-gray-600 transition-colors duration-200">
            Home
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="link"
                className="text-base font-medium hover:text-gray-600 p-0 h-auto transition-colors duration-200"
              >
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
                <Link href="/collections/sketchbook">Sketchbook</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/collections/paintings">Paintings</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/collections/drawings">Drawings</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href="/about"
            className="text-base font-medium relative group transition-all duration-300 ease-in-out hover:text-gray-600"
          >
            About the Artist
            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gray-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
          </Link>
          <Link href="/contact" className="text-base font-medium hover:text-gray-600 transition-colors duration-200">
            Contact
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={() => setIsSearchOpen(true)}>
            <Search size={20} />
            <span className="sr-only">Search</span>
          </Button>
        </div>
      </div>

      {/* Search Dialog */}
      <SearchDialog open={isSearchOpen} onOpenChange={setIsSearchOpen} />
    </header>
  )
}
