"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

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
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Hero Section - With static background */}
      <section className="relative w-full h-[80vh] overflow-hidden">
        {/* Background Image - Static, no animations */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-background-abstract.jpeg"
            alt="Abstract expressionist background"
            fill
            className="object-cover object-center"
            quality={90}
            priority
            style={{ transform: "none", position: "absolute" }}
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/25"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white p-4">
          <p className="text-xl md:text-2xl text-center max-w-2xl mb-8 animate-fade-in-up">
            Exploring artistic expression through multiple techniques and media
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-white text-black hover:bg-white/90">
              <Link href="/collections/all" scroll={true}>
                Explore Collection <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="bg-black/70 text-white border border-white hover:bg-black/90 transition-all duration-300 hover:border-opacity-100 hover:border-white/90 hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] relative overflow-hidden group"
            >
              <Link href="/about" scroll={true}>
                <span className="relative z-10">About the Artist</span>
                <span className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 px-4 md:px-6 max-w-7xl mx-auto w-full">
        <h2 className="text-3xl font-bold mb-12 text-center">Categories</h2>
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

      {/* Featured Artwork - Now with Carousel */}
      <section className="py-16 px-4 md:px-6 bg-neutral-100 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Works</h2>

          {/* New Carousel Component */}
          {featuredWorks.length > 0 && <FeaturedCarousel items={featuredWorks} />}

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/collections/all" scroll={true}>
                View Entire Collection <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 md:px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">About me</h2>
            <p className="text-lg mb-6">
              I'm a Mexican artist dedicated to exploring various artistic techniques, from charcoal drawings to expressive paintings and detailed watercolors.
            </p>
            <p className="text-lg mb-6">
              <br>
            </p>
            <Button asChild>
              <Link href="/about" scroll={true}>
                Learn More
              </Link>
            </Button>
          </div>
          <div className="flex justify-center items-center">
            <div className="relative max-w-full">
              <Image
                src="/images/artist-working.png"
                alt="Rodrigo Méndez in his studio"
                width={500}
                height={750}
                quality={85}
                className="object-contain"
                priority
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
