"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { X, ZoomIn } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface ImageModalProps {
  src: string
  alt: string
}

export function ImageModal({ src, alt }: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [viewportWidth, setViewportWidth] = useState(0)
  const [viewportHeight, setViewportHeight] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // Marcar como montado (ahora estamos en el navegador)
    setIsMounted(true)
    
    // Ahora es seguro acceder a window
    setViewportWidth(window.innerWidth)
    setViewportHeight(window.innerHeight)

    const handleResize = () => {
      setViewportWidth(window.innerWidth)
      setViewportHeight(window.innerHeight)
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // No renderizar nada durante SSR
  if (!isMounted) {
    return null;
  }

  const openModal = () => {
    setIsOpen(true)
    document.body.style.overflow = "hidden"
  }

  const closeModal = () => {
    setIsOpen(false)
    document.body.style.overflow = "auto"
  }

  // Calcular dimensiones
  const getImageDimensions = () => {
    const maxWidth = Math.min(1200, viewportWidth * 0.9)
    const maxHeight = viewportHeight * 0.8

    return {
      width: maxWidth,
      height: maxHeight,
    }
  }

  const dimensions = getImageDimensions()

  return (
    <>
      <div
        onClick={openModal}
        className="w-full h-full cursor-zoom-in flex items-center justify-center"
        role="button"
        tabIndex={0}
        aria-label="Ampliar imagen"
      >
        <div className="absolute bottom-4 right-4 bg-white/80 text-black p-2 rounded-md flex items-center">
          <ZoomIn size={16} className="mr-1" />
          <span className="text-sm">Ampliar</span>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={closeModal}>
          <div className="relative max-w-[90vw] max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <div className="relative flex items-center justify-center">
              <Image
                src={src || "/placeholder.svg"}
                alt={alt}
                width={dimensions.width}
                height={dimensions.height}
                className="object-contain max-h-[80vh]"
                priority
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
            <Button
              variant="outline"
              size="icon"
              className="absolute top-2 right-2 bg-white text-black hover:bg-gray-200 z-10"
              onClick={closeModal}
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Cerrar</span>
            </Button>
          </div>
        </div>
      )}
    </>
  )
}
