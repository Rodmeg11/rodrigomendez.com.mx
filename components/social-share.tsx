"use client"

import { useState } from "react"
import { Share2, Facebook, LinkIcon, MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { toast } from "@/components/ui/use-toast"

interface SocialShareProps {
  title: string
  url?: string
  image?: string
}

export function SocialShare({ title, url, image }: SocialShareProps) {
  const [isOpen, setIsOpen] = useState(false)

  const shareUrl = url || (typeof window !== "undefined" ? window.location.href : "")

  const handleShare = (platform: string) => {
    let shareUrl = ""
    const text = `Check out "${title}" on Rodrigo Méndez Gallery`
    const currentUrl = url || (typeof window !== "undefined" ? window.location.href : "")

    switch (platform) {
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`
        break
      case "x":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(currentUrl)}`
        break
      case "instagram":
        // Instagram no tiene una API directa para compartir, mostramos un mensaje
        toast({
          title: "Instagram Sharing",
          description: "Save the image and share it on Instagram with the link in your bio.",
        })
        setIsOpen(false)
        return
      case "whatsapp":
        shareUrl = `https://wa.me/?text=${encodeURIComponent(text + " " + currentUrl)}`
        break
      case "copy":
        navigator.clipboard.writeText(currentUrl)
        toast({
          title: "Link copied",
          description: "The link has been copied to your clipboard.",
        })
        setIsOpen(false)
        return
    }

    if (shareUrl) {
      window.open(shareUrl, "_blank", "width=600,height=400")
      setIsOpen(false)
    }
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="flex items-center gap-2 bg-transparent">
          <Share2 className="h-4 w-4" />
          Share
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[200px]">
        <DropdownMenuItem onClick={() => handleShare("facebook")} className="cursor-pointer">
          <Facebook className="h-4 w-4 mr-2 text-blue-600" />
          Facebook
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleShare("x")} className="cursor-pointer">
          <X className="h-4 w-4 mr-2 text-black" />X
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleShare("instagram")} className="cursor-pointer">
          <svg className="h-4 w-4 mr-2 text-pink-600" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
          </svg>
          Instagram
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleShare("whatsapp")} className="cursor-pointer">
          <MessageCircle className="h-4 w-4 mr-2 text-green-500" />
          WhatsApp
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleShare("copy")} className="cursor-pointer">
          <LinkIcon className="h-4 w-4 mr-2" />
          Copy Link
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
