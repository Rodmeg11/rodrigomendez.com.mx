import type { Metadata } from "next"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export const metadata: Metadata = {
  title: "Contact | Rodrigo Méndez Gallery",
  description: "Get in touch with Rodrigo Méndez Gallery for inquiries about artworks, commissions, or exhibitions.",
}

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <h1 className="text-4xl font-bold mb-8">Contact</h1>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <p className="text-lg mb-8">
            Have questions about a specific artwork, interested in commissioning a piece, or want to discuss exhibition
            opportunities? Please get in touch using the form or contact information below.
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
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a subject" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="artwork">Artwork Inquiry</SelectItem>
                  <SelectItem value="commission">Commission Request</SelectItem>
                  <SelectItem value="exhibition">Exhibition Opportunity</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea id="message" placeholder="Please provide details about your inquiry..." rows={6} required />
            </div>

            <Button type="submit" className="w-full md:w-auto">
              Send Message
            </Button>
          </form>
        </div>

        <div>
          <div className="bg-gray-50 p-8 rounded-lg mb-8">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>

            <div className="space-y-6">
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
                <MapPin className="h-5 w-5 mr-3 mt-0.5 text-gray-600" />
                <div>
                  <h3 className="font-medium">Studio Location</h3>
                  <p className="text-gray-600">
                    Calle de Arte 123
                    <br />
                    Col. Roma Norte
                    <br />
                    Ciudad de México, CDMX
                    <br />
                    CP 06700, México
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-5 w-5 mr-3 mt-0.5 text-gray-600" />
                <div>
                  <h3 className="font-medium">Studio Hours</h3>
                  <p className="text-gray-600">
                    Monday - Friday: 10:00 AM - 6:00 PM
                    <br />
                    Saturday: By appointment only
                    <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Follow on Social Media</h2>
            <p className="mb-4">
              Stay updated with new works, exhibitions, and behind-the-scenes content by following Rodrigo Méndez on
              social media.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" asChild>
                <a href="https://www.instagram.com/rockdrigo.mendez/" target="_blank" rel="noopener noreferrer">
                  Instagram
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://www.youtube.com/@rodrigomendez7733" target="_blank" rel="noopener noreferrer">
                  YouTube
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
