"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { CategoryShowcase } from "@/components/category-showcase"
import { FeaturedCarousel } from "@/components/featured-carousel"
import { products } from "@/lib/products"
import { shuffleArray } from "@/lib/utils"

export default function Home() {
  const [featuredWorks, setFeaturedWorks] = useState<any[]>([])

  useEffect(() => {
    // Get all watercolor works and shuffle them
    const watercolorWorks = products
      .filter((product) => product.category.toLowerCase().includes("watercolor"))
      .map((product) => ({
        id: product.id,
        title: product.title,
        category: product.category,
        price: product.price,
        image: product.images[0],
        href: `/products/${product.id}`,
      }))

    // Get sketchbook works
    const sketchbookWorks = products
      .filter((product) => product.category.toLowerCase().includes("sketchbook"))
      .slice(0, 8)
      .map((product) => ({
        id: product.id,
        title: product.title,
        category: product.category,
        price: product.price,
        image: product.images[0],
        href: `/products/${product.id}`,
      }))

    // Get some mixed technique works
    const mixedWorks = products
      .filter((product) => product.category.toLowerCase().includes("mixed"))
      .slice(0, 3)
      .map((product) => ({
        id: product.id,
        title: product.title,
        category: product.category,
        price: product.price,
        image: product.images[0],
        href: `/products/${product.id}`,
      }))

    // Combine all works and shuffle, then limit to 10 items
    const allFeaturedWorks = [...watercolorWorks, ...sketchbookWorks, ...mixedWorks]
    const shuffledWorks = shuffleArray(allFeaturedWorks)
    setFeaturedWorks(shuffledWorks.slice(0, 10))
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section - Enhanced with better styling */}
      <section className="relative w-full h-[100vh] overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-600 to-pink-500">
          <div className="absolute inset-0 bg-black/20"></div>
          {/* Animated particles effect */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <div className="absolute top-3/4 left-3/4 w-1 h-1 bg-white rounded-full animate-ping"></div>
            <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-white rounded-full animate-bounce"></div>
            <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white p-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in-up bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              RODRIGO MÉNDEZ
            </h1>
            <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-300 max-w-2xl mx-auto leading-relaxed">
              Exploring artistic expression through multiple techniques and media
            </p>
            
            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 animate-fade-in-up animation-delay-600">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-yellow-300">150+</div>
                <div className="text-sm md:text-base opacity-90">Artworks</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-green-300">4</div>
                <div className="text-sm md:text-base opacity-90">Techniques</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-blue-300">20+</div>
                <div className="text-sm md:text-base opacity-90">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-pink-300">50+</div>
                <div className="text-sm md:text-base opacity-90">Exhibitions</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up animation-delay-900">
              <Button asChild size="lg" className="bg-white text-black hover:bg-white/90 text-lg px-8 py-4 rounded-full">
                <Link href="/collections/all" scroll={true}>
                  Explore Collection <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-black transition-all duration-300 text-lg px-8 py-4 rounded-full"
              >
                <Link href="/about" scroll={true}>
                  About the Artist
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section - Enhanced */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto w-full">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          Art Collections
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <CategoryShowcase
            title="Watercolors"
            image="/images/watercolor-golden-fields.png"
            href="/collections/watercolors"
            description="Fluidity and transparency in every brushstroke"
          />
          <CategoryShowcase
            title="Sketchbook"
            image="/images/sketch-face-1.png"
            href="/collections/sketchbook"
            description="Raw expression through lines and gestural marks"
          />
          <CategoryShowcase
            title="Paintings"
            image="/images/painting-abstract-colorful.png"
            href="/collections/paintings"
            description="Complete works with depth and texture"
          />
          <CategoryShowcase
            title="Drawings"
            image="/images/drawing-venice-canal.jpeg"
            href="/collections/drawings"
            description="Expressive line work and detailed studies"
          />
        </div>
      </section>

      {/* Featured Artwork - Enhanced */}
      <section className="py-20 px-4 md:px-6 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Featured Works
          </h2>

          {/* Enhanced Carousel */}
          {featuredWorks.length > 0 && <FeaturedCarousel items={featuredWorks} />}

          <div className="mt-16 text-center">
            <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg">
              <Link href="/collections/all" scroll={true}>
                View Entire Collection <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section - Enhanced */}
      <section className="py-20 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              About Rodrigo Méndez
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              <p>
                Rodrigo Méndez is an art studio dedicated to exploring various artistic techniques, from charcoal drawings
                to expressive paintings and detailed watercolors.
              </p>
              <p>
                Each work is created with passion and dedication, seeking to convey deep emotions and connect with the
                viewer through art.
              </p>
              <p>
                With over two decades of experience, his work has been exhibited in galleries across Mexico and internationally,
                capturing the essence of contemporary artistic expression.
              </p>
            </div>
            <div className="mt-8">
              <Button asChild className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6 py-3 rounded-full">
                <Link href="/about" scroll={true}>
                  Learn More About the Artist
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative max-w-full">
              <Image
                src="/images/artist-working.png"
                alt="Rodrigo Méndez in his studio"
                width={500}
                height={750}
                quality={85}
                className="object-contain rounded-2xl shadow-2xl"
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - New */}
      <section className="py-20 px-4 md:px-6 bg-gradient-to-br from-purple-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-16">What Collectors Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <p className="text-lg italic mb-6 leading-relaxed">
                "Rodrigo's watercolors capture the essence of Mexico's landscapes with incredible sensitivity. Each piece tells a story."
              </p>
              <p className="font-semibold">— María González, Art Collector</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <p className="text-lg italic mb-6 leading-relaxed">
                "The emotional depth in his work is remarkable. I've been collecting his pieces for over 10 years."
              </p>
              <p className="font-semibold">— Carlos Ruiz, Gallery Owner</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <p className="text-lg italic mb-6 leading-relaxed">
                "His technique is masterful, but it's the soul in each painting that makes them truly special."
              </p>
              <p className="font-semibold">— Ana Martínez, Art Critic</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section - Enhanced */}
      <section className="py-20 px-4 md:px-6 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Stay Connected
          </h2>
          <p className="text-xl mb-12 text-gray-600 dark:text-gray-400 leading-relaxed">
            Subscribe to receive news about new works, exhibitions, and exclusive previews of upcoming collections.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 text-lg"
            />
            <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full text-lg">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
