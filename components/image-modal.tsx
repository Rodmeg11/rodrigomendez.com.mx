"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { X, ZoomIn, ZoomOut, Share2, Facebook, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ImageModalProps {
  src: string
  alt: string
}

export function ImageModal({ src, alt }: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [zoomLevel, setZoomLevel] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })
  const [showShareOptions, setShowShareOptions] = useState(false)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Reset zoom and position when modal is opened
    if (isOpen) {
      setZoomLevel(1)
      setPosition({ x: 0, y: 0 })

      // Prevent body scrolling when modal is open
      document.body.style.overflow = "hidden"
    } else {
      // Restore body scrolling when modal is closed
      document.body.style.overflow = "auto"
    }

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  const openModal = () => {
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
    setShowShareOptions(false)
  }

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.25, 3))
  }

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.25, 0.5))
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoomLevel > 1) {
      setIsDragging(true)
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y })
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      })
    }
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Touch handlers for mobile with better control
  const handleTouchStart = (e: React.TouchEvent) => {
    if (zoomLevel > 1 && e.touches.length === 1) {
      setIsDragging(true)
      const touch = e.touches[0]
      setDragStart({ x: touch.clientX - position.x, y: touch.clientY - position.y })
    }
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (isDragging && e.touches.length === 1) {
      e.preventDefault()
      const touch = e.touches[0]
      setPosition({
        x: touch.clientX - dragStart.x,
        y: touch.clientY - dragStart.y,
      })
    }
  }

  const handleTouchEnd = () => {
    setIsDragging(false)
  }

  const handleShare = (platform: string) => {
    let shareUrl = ""
    const text = `Check out this artwork: ${alt}`
    const currentUrl = typeof window !== "undefined" ? window.location.href : ""

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`
        break
      case "x":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(currentUrl)}`
        break
      case "instagram":
        // Instagram no tiene una API directa para compartir, mostramos un mensaje
        alert("Save the image and share it on Instagram with the link in your bio.")
        setShowShareOptions(false)
        return
      case "whatsapp":
        shareUrl = `https://wa.me/?text=${encodeURIComponent(text + " " + currentUrl)}`
        break
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400")
    }

    setShowShareOptions(false)
  }

  const toggleShareOptions = () => {
    setShowShareOptions(!showShareOptions)
  }

  return (
    <>
      <div
        onClick={openModal}
        className="w-full h-full cursor-zoom-in flex items-center justify-center zoom-image-container"
        role="button"
        tabIndex={0}
        aria-label="Ampliar imagen"
        style={{
          touchAction: "manipulation",
          WebkitTapHighlightColor: "rgba(0,0,0,0.1)",
        }}
      ></div>

      {isOpen && (
        <div
          className="image-modal-overlay"
          onClick={closeModal}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchEnd={handleTouchEnd}
          onTouchMove={handleTouchMove}
        >
          <div
            className="image-modal-content"
            onClick={(e) => e.stopPropagation()}
            ref={imageRef}
            onTouchStart={(e) => e.stopPropagation()}
          >
            <div
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
              style={{
                transform: `scale(${zoomLevel}) translate(${position.x}px, ${position.y}px)`,
                cursor: zoomLevel > 1 ? "grab" : "default",
                transition: isDragging ? "none" : "transform 0.2s ease-out",
                touchAction: "none",
              }}
            >
              <Image
                src={src || "/placeholder.svg?height=1600&width=1200&query=artwork"}
                alt={alt}
                width={1200}
                height={1600}
                quality={100}
                className="object-contain max-h-[90vh] max-w-[90vw]"
                priority
                sizes="90vw"
                draggable={false}
              />
            </div>

            <div className="absolute top-4 right-4 flex space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
                onClick={handleZoomIn}
                style={{ WebkitTapHighlightColor: "rgba(0,0,0,0.1)" }}
              >
                <ZoomIn className="h-4 w-4" />
                <span className="sr-only">Zoom In</span>
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
                onClick={handleZoomOut}
                style={{ WebkitTapHighlightColor: "rgba(0,0,0,0.1)" }}
              >
                <ZoomOut className="h-4 w-4" />
                <span className="sr-only">Zoom Out</span>
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
                onClick={toggleShareOptions}
                style={{ WebkitTapHighlightColor: "rgba(0,0,0,0.1)" }}
              >
                <Share2 className="h-4 w-4" />
                <span className="sr-only">Share</span>
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
                onClick={closeModal}
                style={{ WebkitTapHighlightColor: "rgba(0,0,0,0.1)" }}
              >
                <X className="h-4 w-4" />
                <span className="sr-only">Close</span>
              </Button>
            </div>

            {showShareOptions && (
              <div className="absolute top-16 right-4 bg-white p-2 rounded-md shadow-lg flex flex-col space-y-2 animate-fade-in">
                <Button
                  variant="outline"
                  size="sm"
                  className="social-share-facebook bg-transparent"
                  onClick={() => handleShare("facebook")}
                  style={{ WebkitTapHighlightColor: "rgba(0,0,0,0.1)" }}
                >
                  <Facebook className="h-4 w-4 mr-2" />
                  Facebook
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="social-share-twitter bg-transparent"
                  onClick={() => handleShare("x")}
                  style={{ WebkitTapHighlightColor: "rgba(0,0,0,0.1)" }}
                >
                  <X className="h-4 w-4 mr-2" />X
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="social-share-instagram bg-transparent"
                  onClick={() => handleShare("instagram")}
                  style={{ WebkitTapHighlightColor: "rgba(0,0,0,0.1)" }}
                >
                  <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                  Instagram
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="social-share-whatsapp bg-transparent"
                  onClick={() => handleShare("whatsapp")}
                  style={{ WebkitTapHighlightColor: "rgba(0,0,0,0.1)" }}
                >
                  <MessageCircle className="h-4 w-4 mr-2" />
                  WhatsApp
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
