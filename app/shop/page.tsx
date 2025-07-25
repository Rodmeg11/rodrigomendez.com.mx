import type { Metadata } from "next"
import { Mail, Phone, Clock } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const metadata: Metadata = {
  title: "Shop | Rodrigo Méndez Gallery",
  description: "Purchase original artworks and prints from Rodrigo Méndez Gallery.",
}

export default function ShopPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <h1 className="text-4xl font-bold mb-8">Shop</h1>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-lg mb-8">
            Interested in acquiring an original artwork or commissioning a custom piece? We offer various options
            including original paintings, watercolors, and high-quality prints. Please get in touch to discuss
            availability, pricing, and shipping options.
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input id="name" placeholder="Your name" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="Your email address" required />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="interest" className="text-sm font-medium">
                I'm interested in
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select your interest" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="original">Original Artwork</SelectItem>
                  <SelectItem value="prints">Prints</SelectItem>
                  <SelectItem value="commission">Custom Commission</SelectItem>
                  <SelectItem value="consultation">Art Consultation</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="artwork" className="text-sm font-medium">
                Specific Artwork (optional)
              </label>
              <Input id="artwork" placeholder="Name or ID of specific artwork" />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                placeholder="Please provide details about your inquiry, budget range, preferred size, or any specific requirements..."
                rows={6}
                required
              />
            </div>

            <Button type="submit" className="w-full md:w-auto">
              Send Inquiry
            </Button>
          </form>
        </div>

        <div>
          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-6">Purchase Information</h2>

            <div className="space-y-6">
              <div>
                <h3 className="font-medium mb-2">Original Artworks</h3>
                <p className="text-gray-600 text-sm">
                  Each original piece comes with a certificate of authenticity and is carefully packaged for shipping.
                  Prices vary based on size, medium, and complexity.
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-2">High-Quality Prints</h3>
                <p className="text-gray-600 text-sm">
                  Museum-quality giclée prints on archival paper. Available in various sizes. Perfect for art lovers who
                  want to enjoy these works in their homes.
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-2">Custom Commissions</h3>
                <p className="text-gray-600 text-sm">
                  Personalized artworks created specifically for you. We work closely with clients to create pieces that
                  match their vision and space requirements.
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-2">Shipping & Delivery</h3>
                <p className="text-gray-600 text-sm">
                  Worldwide shipping available. All artworks are professionally packaged and insured. Local delivery
                  available in Mexico City area.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

            <div className="space-y-4">
              <div className="flex items-start">
                <Mail className="h-5 w-5 mr-3 mt-0.5 text-gray-600" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-600">info@rodrigomendezgallery.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-5 w-5 mr-3 mt-0.5 text-gray-600" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-gray-600">+52 (55) 1234-5678</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-5 w-5 mr-3 mt-0.5 text-gray-600" />
                <div>
                  <h3 className="font-medium">Response Time</h3>
                  <p className="text-gray-600">We typically respond within 24-48 hours</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
