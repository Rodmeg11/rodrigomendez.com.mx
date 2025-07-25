import type { Metadata } from "next"
import { ChevronDown } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "FAQ | Rodrigo Méndez Gallery",
  description: "Frequently asked questions about artworks, purchases, commissions, and shipping.",
}

const faqs = [
  {
    question: "Are the artworks available for sale?",
    answer:
      "Yes, most of our artworks are available for sale, including original watercolors and paintings. However, pieces from the 'Sketchbook Studies' collection are part of the artist's personal collection and are not available for purchase, as they represent the creative process and artistic exploration behind the finished works. Each available artwork includes pricing and availability information on its individual page.",
  },
  {
    question: "How can I purchase an artwork?",
    answer:
      "To acquire an artwork, you can contact us directly through the contact form on our website, by email at info@rodrigomendezgallery.com, or by phone at +52 (55) 1234-5678. We will provide detailed information about availability, pricing, and payment and shipping options.",
  },
  {
    question: "Do you offer commissioned or custom artworks?",
    answer:
      "Yes, Rodrigo Méndez accepts custom commissions. We work closely with clients to create pieces that match their vision and space requirements. The process includes an initial consultation, preliminary sketches, and follow-up throughout the entire creative process. Delivery times vary depending on the complexity of the artwork.",
  },
  {
    question: "What techniques and materials does the artist use?",
    answer:
      "Rodrigo Méndez works with various techniques including watercolor on high-quality paper, drawings with charcoal, graphite and pastel, acrylic paintings and mixed media on canvas and paper. All works use archival materials to ensure their durability and long-term conservation.",
  },
  {
    question: "Do you provide a certificate of authenticity?",
    answer:
      "Yes, each original artwork comes with a certificate of authenticity signed by the artist, which includes information about the technique used, dimensions, year of creation, and the artist's signature. This certificate guarantees the provenance and authenticity of the work.",
  },
  {
    question: "How does shipping work?",
    answer:
      "We offer national and international shipping. All artworks are professionally packaged with protective materials and are insured during transport. Shipping costs vary depending on destination and artwork size. We also offer local delivery in the Mexico City area.",
  },
  {
    question: "What are the delivery times?",
    answer:
      "For artworks available in inventory, preparation and shipping time is 3-5 business days. For commissioned works, times vary between 4-8 weeks depending on complexity and requested technique. We will keep you informed about progress throughout the entire process.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept bank transfers, credit and debit cards, and PayPal for international purchases. For high-value artworks, we also offer flexible payment plans. All payments are processed securely.",
  },
  {
    question: "Do you have a return policy?",
    answer:
      "Due to the unique nature of original artworks, all sales are final. However, if there is any problem with shipping or the artwork arrives damaged, we will work with you to resolve the situation. We recommend contacting us before purchase if you have specific questions about an artwork.",
  },
  {
    question: "Can I visit the artist's studio?",
    answer:
      "Yes, studio visits are possible by appointment. Our office hours are Monday through Friday from 10:00 AM to 6:00 PM, and Saturdays by appointment only. Contact us to schedule your visit and learn more about the artist's creative process.",
  },
  {
    question: "Do you offer framing services?",
    answer:
      "While we don't offer framing services directly, we can recommend professionals specialized in art conservation and framing. We also provide technical specifications for proper framing of each type of artwork.",
  },
  {
    question: "Are the artworks signed?",
    answer:
      "Yes, all original artworks are signed by Rodrigo Méndez. Watercolors and drawings are generally signed in the lower right corner, while paintings may be signed on the front or back of the canvas, depending on the composition of the work.",
  },
]

export default function FAQPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <h1 className="text-4xl font-bold mb-8">Frequently Asked Questions</h1>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <Collapsible key={index} className="border rounded-lg">
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="w-full justify-between p-6 text-left font-medium hover:bg-gray-50">
                {faq.question}
                <ChevronDown className="h-4 w-4 transition-transform duration-200" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="px-6 pb-6">
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>

      <div className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-bold mb-4">Can't find the answer you're looking for?</h2>
        <p className="text-gray-600 mb-4">
          If you have a specific question that isn't covered here, don't hesitate to contact us directly.
        </p>
        <Button asChild>
          <a href="/contact">Contact Us</a>
        </Button>
      </div>
    </div>
  )
}
