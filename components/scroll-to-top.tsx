"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"

export function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    // Scroll to top when the path changes
    window.scrollTo({
      top: 0,
      behavior: "instant", // Use "smooth" for animated scrolling or "instant" for immediate
    })
  }, [pathname])

  return null // This component doesn't render anything
}
