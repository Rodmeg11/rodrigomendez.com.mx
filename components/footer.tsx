import Link from "next/link"
import { Instagram, Youtube, Facebook } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <h3 className="text-xl font-bold mb-4">RODRIGO MÉNDEZ</h3>
            <p className="text-gray-400 mb-4">Exploring artistic expression through multiple techniques and media.</p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/rockdrigo.mendez/"
                className="hover:text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="https://www.youtube.com/@rodrigomendez7733"
                className="hover:text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=61579757980843"
                className="hover:text-gray-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">Collections</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/collections/watercolors" className="text-gray-400 hover:text-white">
                  Watercolors
                </Link>
              </li>
              <li>
                <Link href="/collections/sketchbook" className="text-gray-400 hover:text-white">
                  Sketchbook
                </Link>
              </li>
              <li>
                <Link href="/collections/paintings" className="text-gray-400 hover:text-white">
                  Paintings
                </Link>
              </li>
              <li>
                <Link href="/collections/drawings" className="text-gray-400 hover:text-white">
                  Drawings
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Information</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white">
                  About the Artist
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe to receive news about new works and exhibitions.</p>
            <div className="flex flex-col sm:flex-row gap-2">
              <Input type="email" placeholder="Your email" className="bg-gray-800 border-gray-700" />
              <Button>Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-gray-400 text-sm">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <p>© {new Date().getFullYear()} Rodrigo Méndez. All rights reserved.</p>
            <p className="text-gray-600 text-xs">v31-FIXED</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
