import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About the Artist | Rodrigo Méndez Gallery",
  description: "Learn about Rodrigo Méndez, his artistic journey, techniques, and philosophy.",
}

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 md:px-6 md:py-16">
      <h1 className="text-4xl font-bold mb-8">About the Artist</h1>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <div>
          <p className="text-lg mb-6">
            Rodrigo Méndez is a contemporary artist whose work spans multiple disciplines including watercolor, drawing,
            painting, and mixed media techniques. With a career spanning over two decades, his work has been exhibited
            in galleries across Mexico and internationally.
          </p>
          <p className="text-lg mb-6">
            Born in Mexico City, Méndez developed an early interest in visual arts, particularly drawn to the expressive
            potential of watercolor and its ability to capture light and atmosphere. His formal training at the National
            School of Painting, Sculpture and Printmaking "La Esmeralda" provided him with a strong technical
            foundation, while his subsequent explorations have led him to develop a distinctive style that blends
            traditional techniques with contemporary sensibilities.
          </p>
          <p className="text-lg">
            His landscapes are particularly notable for their emotional resonance, capturing not just the physical
            appearance of a place, but its mood and atmosphere. Through his masterful use of color and light, Méndez
            invites viewers to experience the tranquility and beauty of natural environments, often infused with a sense
            of nostalgia and contemplation.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <div className="relative max-w-full max-h-[600px]">
            <Image
              src="/images/artist-working.png"
              alt="Rodrigo Méndez in his studio"
              width={500}
              height={750}
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-6">Exhibitions & Recognition</h2>
        <ul className="space-y-6">
          <li className="border-b pb-6 dark:border-gray-700">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold">Solo Exhibition: "Landscapes of Memory"</h3>
              <span className="text-gray-500 dark:text-gray-400">2023</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300">Gallery Modern Art, Mexico City, Mexico</p>
          </li>
          <li className="border-b pb-6 dark:border-gray-700">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold">Group Exhibition: "Contemporary Watercolor Masters"</h3>
              <span className="text-gray-500 dark:text-gray-400">2022</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300">International Art Center, Barcelona, Spain</p>
          </li>
          <li className="border-b pb-6 dark:border-gray-700">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold">Award: Excellence in Watercolor</h3>
              <span className="text-gray-500 dark:text-gray-400">2021</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300">National Association of Visual Artists</p>
          </li>
          <li className="border-b pb-6 dark:border-gray-700">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold">Solo Exhibition: "Between Light and Shadow"</h3>
              <span className="text-gray-500 dark:text-gray-400">2020</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300">Contemporary Art Museum, Monterrey, Mexico</p>
          </li>
          <li>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold">Residency Program</h3>
              <span className="text-gray-500 dark:text-gray-400">2019</span>
            </div>
            <p className="text-gray-700 dark:text-gray-300">International Arts Foundation, New York, USA</p>
          </li>
        </ul>
      </div>
    </div>
  )
}
