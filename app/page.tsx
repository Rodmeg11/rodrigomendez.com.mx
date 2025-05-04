import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { FeaturedArtwork } from "@/components/featured-artwork"
import { CategoryShowcase } from "@/components/category-showcase"
import { NewsletterSignup } from "@/components/newsletter-signup"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] overflow-hidden">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Rodrigo Méndez Art Gallery"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white p-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">RODRIGO MÉNDEZ GALLERY</h1>
          <p className="text-xl md:text-2xl text-center max-w-2xl mb-8">
            Exploring artistic expression through multiple techniques and media
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-white text-black hover:bg-white/90">
              <Link href="/collections/all">
                Explore Collection <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/20">
              <Link href="/about">About the Artist</Link>
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
            title="Drawings"
            image="/placeholder.svg?height=600&width=600"
            href="/collections/drawings"
            description="Expression through lines and shadows"
          />
          <CategoryShowcase
            title="Paintings"
            image="/placeholder.svg?height=600&width=600"
            href="/collections/paintings"
            description="Complete works with depth and texture"
          />
          <CategoryShowcase
            title="Mixed Techniques"
            image="/placeholder.svg?height=600&width=600"
            href="/collections/techniques"
            description="Experimentation with various materials and methods"
          />
        </div>
      </section>

      {/* Featured Artwork */}
      <section className="py-16 px-4 md:px-6 bg-neutral-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeaturedArtwork
              title="Golden Fields Panorama"
              category="Original Watercolor"
              price="2,600.00"
              image="/images/watercolor-golden-fields.png"
              href="/products/9"
            />
            <FeaturedArtwork
              title="Dimmed By Change And Distance"
              category="Original Drawing"
              price="4,000.00"
              image="/placeholder.svg?height=800&width=600"
              href="/products/dimmed-by-change-and-distance"
            />
            <FeaturedArtwork
              title="Serene Lake at Sunset"
              category="Original Watercolor"
              price="2,200.00"
              image="/images/watercolor-landscape-lake.png"
              href="/products/7"
            />
          </div>
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/collections/all">
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
            <h2 className="text-3xl font-bold mb-6">About Rodrigo Méndez</h2>
            <p className="text-lg mb-6">
              Rodrigo Méndez is an art studio dedicated to exploring various artistic techniques, from charcoal drawings
              to expressive paintings and detailed watercolors.
            </p>
            <p className="text-lg mb-6">
              Each work is created with passion and dedication, seeking to convey deep emotions and connect with the
              viewer through art.
            </p>
            <Button asChild>
              <Link href="/about">Learn More</Link>
            </Button>
          </div>
          <div className="relative h-[400px] w-full">
            <Image
              src="/placeholder.svg?height=800&width=600"
              alt="About Rodrigo Méndez"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <NewsletterSignup />
    </div>
  )
}
