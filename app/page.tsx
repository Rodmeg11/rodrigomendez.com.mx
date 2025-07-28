"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Palette, Brush, PenTool, BookOpen, Star, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { NewsletterSignup } from "@/components/newsletter-signup"
import { ScrollToTop } from "@/components/scroll-to-top"

// Sample featured artworks data
const featuredArtworks = [
  {
    id: "1",
    title: "Serene Lake at Sunset",
    category: "Watercolor",
    image: "/images/watercolor-landscape-lake.png",
    price: "$2,200",
  },
  {
    id: "3",
    title: "Golden Fields Panorama",
    category: "Watercolor",
    image: "/images/watercolor-golden-fields.png",
    price: "$2,600",
  },
  {
    id: "28",
    title: "Portrait Study 1",
    category: "Sketchbook",
    image: "/images/sketch-face-1.png",
    price: "$180",
  },
  {
    id: "38",
    title: "Abstract Figures",
    category: "Painting",
    image: "/images/painting-abstract-figures.jpeg",
    price: "$1,200",
  },
  {
    id: "59",
    title: "Venice Canal",
    category: "Drawing",
    image: "/images/drawing-venice-canal.jpeg",
    price: "$350",
  },
]

const categories = [
  {
    name: "Watercolors",
    description: "Luminous landscapes and atmospheric studies",
    icon: Palette,
    image: "/images/watercolor-golden-fields.png",
    count: "25+ pieces",
    href: "/collections/watercolors",
  },
  {
    name: "Paintings",
    description: "Bold expressions in oil and acrylic",
    icon: Brush,
    image: "/images/painting-abstract-colorful.png",
    count: "20+ pieces",
    href: "/collections/paintings",
  },
  {
    name: "Drawings",
    description: "Intimate studies and detailed observations",
    icon: PenTool,
    image: "/images/drawing-venice-canal.jpeg",
    count: "15+ pieces",
    href: "/collections/drawings",
  },
  {
    name: "Sketchbook",
    description: "Raw creativity and spontaneous captures",
    icon: BookOpen,
    image: "/images/sketch-face-1.png",
    count: "10+ pieces",
    href: "/collections/sketchbook",
  },
]

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredArtworks.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredArtworks.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredArtworks.length) % featuredArtworks.length)
  }

  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      {/* Hero Section - With static background */}
      <section className="relative w-full h-[80vh] overflow-hidden">
        {/* Background Image - Static, no animations */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-background-abstract.jpeg"
            alt="Abstract art background"
            fill
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Header */}
        <Header />

        {/* Hero Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="text-center text-white max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Rodrigo Méndez
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl font-light opacity-90">Contemporary Artist</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
              Exploring the intersection of emotion and form through watercolors, paintings, and intimate drawings
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-black hover:bg-gray-100">
                <Link href="/collections/watercolors">
                  View Collections
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white hover:text-black bg-transparent"
              >
                <Link href="/about">About the Artist</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Carousel */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              <Star className="w-4 h-4 mr-2" />
              Featured Works
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest Creations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the most recent additions to the collection, showcasing the evolution of artistic expression
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-lg">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {featuredArtworks.map((artwork, index) => (
                  <div key={artwork.id} className="w-full flex-shrink-0">
                    <Card className="border-0 shadow-lg">
                      <CardContent className="p-0">
                        <div className="grid md:grid-cols-2 gap-0">
                          <div className="relative h-64 md:h-96">
                            <Image
                              src={artwork.image || "/placeholder.svg"}
                              alt={artwork.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div className="p-8 flex flex-col justify-center">
                            <Badge variant="outline" className="w-fit mb-4">
                              {artwork.category}
                            </Badge>
                            <h3 className="text-2xl font-bold mb-4">{artwork.title}</h3>
                            <p className="text-gray-600 mb-6">
                              A masterful piece that captures the essence of {artwork.category.toLowerCase()} artistry
                            </p>
                            <div className="flex items-center justify-between">
                              <span className="text-2xl font-bold">{artwork.price}</span>
                              <Button asChild>
                                <Link href={`/products/${artwork.id}`}>
                                  View Details
                                  <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
              onClick={nextSlide}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Dots indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {featuredArtworks.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-black" : "bg-gray-300"
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Collections</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Journey through different mediums and styles, each telling its own unique story
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category.name} href={category.href}>
                <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer h-full">
                  <CardContent className="p-0">
                    <div className="relative h-48 overflow-hidden rounded-t-lg">
                      <Image
                        src={category.image || "/placeholder.svg"}
                        alt={category.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                      <div className="absolute top-4 left-4">
                        <div className="bg-white/90 p-2 rounded-lg">
                          <category.icon className="h-6 w-6" />
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold">{category.name}</h3>
                        <Badge variant="secondary">{category.count}</Badge>
                      </div>
                      <p className="text-gray-600 mb-4">{category.description}</p>
                      <div className="flex items-center text-sm font-medium group-hover:text-blue-600 transition-colors">
                        Explore Collection
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                About the Artist
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">A Journey Through Color and Form</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Rodrigo Méndez is a contemporary artist whose work explores the delicate balance between emotion and
                technique. Through watercolors, oils, and intimate drawings, he captures fleeting moments and transforms
                them into lasting impressions.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                His recent solo exhibition "Sentimiento al desnudo" showcased a deeply personal collection of works that
                invite viewers to contemplate the raw beauty of human experience.
              </p>
              <Button asChild size="lg">
                <Link href="/about">
                  Learn More About Rodrigo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="relative h-96 rounded-lg overflow-hidden">
                <Image src="/images/artist-working.png" alt="Artist at work" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSignup />

      {/* Footer */}
      <Footer />

      {/* Scroll to Top */}
      <ScrollToTop />
    </div>
  )
}
