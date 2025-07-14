"use client"

import type React from "react"

import { useState, useEffect, useCallback, useRef, memo } from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { OptimizedArtwork } from "@/components/optimized-artwork"
import { shuffleArray } from "@/lib/utils"

interface FeaturedCarouselProps {
  items: {
    id: string
    title: string
    category: string
    price: string
    image: string
    href: string
  }[]
}

function FeaturedCarouselComponent({ items }: FeaturedCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleItems, setVisibleItems] = useState(3)
  const [shuffledItems, setShuffledItems] = useState(items)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50

  // Shuffle items on component mount
  useEffect(() => {
    setShuffledItems(shuffleArray(items))
  }, [items])

  // Determine number of visible items based on screen width
  const updateVisibleItems = useCallback(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) {
        setVisibleItems(1)
      } else if (window.innerWidth < 1024) {
        setVisibleItems(2)
      } else {
        setVisibleItems(3)
      }
    }
  }, [])

  useEffect(() => {
    updateVisibleItems()
    window.addEventListener("resize", updateVisibleItems)
    return () => window.removeEventListener("resize", updateVisibleItems)
  }, [updateVisibleItems])

  const totalSlides = Math.max(0, shuffledItems.length - visibleItems + 1)

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex > 0) {
        return prevIndex - 1
      } else {
        // Si está al principio, va al final
        return totalSlides - 1
      }
    })
  }, [totalSlides])

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex < totalSlides - 1) {
        return prevIndex + 1
      } else {
        // Si está al final, vuelve al principio
        return 0
      }
    })
  }, [totalSlides])

  // Los botones nunca están deshabilitados ahora que es circular
  const isPrevDisabled = false
  const isNextDisabled = false

  // Touch event handlers
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
    setIsDragging(true)
  }, [])

  const onTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!touchStart) return

      const currentTouch = e.targetTouches[0].clientX
      setTouchEnd(currentTouch)

      // Calculate drag offset for visual feedback
      const offset = currentTouch - touchStart
      setDragOffset(offset)
    },
    [touchStart],
  )

  const onTouchEnd = useCallback(() => {
    if (!touchStart || !touchEnd) {
      setIsDragging(false)
      setDragOffset(0)
      return
    }

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      goToNext()
    }

    if (isRightSwipe) {
      goToPrevious()
    }

    // Reset values
    setTouchStart(null)
    setTouchEnd(null)
    setIsDragging(false)
    setDragOffset(0)
  }, [touchStart, touchEnd, goToNext, goToPrevious])

  // Mouse drag handlers for desktop
  const onMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    setTouchStart(e.clientX)
    setIsDragging(true)
    setTouchEnd(null)
  }, [])

  const onMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging || !touchStart) return

      const currentX = e.clientX
      setTouchEnd(currentX)

      const offset = currentX - touchStart
      setDragOffset(offset)
    },
    [isDragging, touchStart],
  )

  const onMouseUp = useCallback(() => {
    if (!touchStart || !touchEnd) {
      setIsDragging(false)
      setDragOffset(0)
      return
    }

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe) {
      goToNext()
    }

    if (isRightSwipe) {
      goToPrevious()
    }

    setTouchStart(null)
    setTouchEnd(null)
    setIsDragging(false)
    setDragOffset(0)
  }, [touchStart, touchEnd, goToNext, goToPrevious])

  const onMouseLeave = useCallback(() => {
    if (isDragging) {
      setIsDragging(false)
      setDragOffset(0)
      setTouchStart(null)
      setTouchEnd(null)
    }
  }, [isDragging])

  return (
    <div className="relative">
      <div
        className="overflow-hidden cursor-grab active:cursor-grabbing"
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseLeave}
      >
        <div
          ref={carouselRef}
          className={`flex ${isDragging ? "" : "transition-transform duration-300 ease-in-out"}`}
          style={{
            transform: `translateX(calc(-${currentIndex * (100 / visibleItems)}% + ${dragOffset}px))`,
          }}
        >
          {shuffledItems.map((item, index) => (
            <div key={item.id} className="flex-shrink-0" style={{ width: `${100 / visibleItems}%` }}>
              <div className="px-3">
                <OptimizedArtwork
                  title={item.title}
                  category={item.category}
                  image={item.image}
                  href={item.href}
                  index={index}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons - positioned in the middle of images */}
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full bg-white shadow-md z-10 opacity-100"
        onClick={goToPrevious}
        style={{ top: "40%" }} // Positioned in the middle of the image area
      >
        <ChevronLeft className="h-5 w-5" />
        <span className="sr-only">Previous</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 rounded-full bg-white shadow-md z-10 opacity-100"
        onClick={goToNext}
        style={{ top: "40%" }} // Positioned in the middle of the image area
      >
        <ChevronRight className="h-5 w-5" />
        <span className="sr-only">Next</span>
      </Button>

      {/* Dots indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-colors ${index === currentIndex ? "bg-black" : "bg-gray-300"}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export const FeaturedCarousel = memo(FeaturedCarouselComponent)
