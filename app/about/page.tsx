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
        <div className="relative h-[500px] rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=1000&width=800"
            alt="Rodrigo Méndez in his studio"
            fill
            className="object-cover"
          />
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Artistic Philosophy</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <p className="text-lg">
            "My work is an ongoing exploration of the relationship between human experience and the natural world. I
            believe that art has the power to connect us to something larger than ourselves, to evoke emotions and
            memories that might otherwise remain dormant. Through my paintings and drawings, I seek to create spaces for
            contemplation and reflection, inviting viewers to pause and connect with their own inner landscapes as they
            engage with the visual ones I create."
            <span className="block mt-4 font-medium">— Rodrigo Méndez</span>
          </p>
          <p className="text-lg">
            Méndez's approach to art-making is both intuitive and methodical. He often begins with direct observations
            from nature, creating field sketches and studies that capture immediate impressions. These initial responses
            then evolve in the studio, where memory, emotion, and artistic intention guide the development of more
            complex works. This process allows for a dialogue between direct experience and artistic interpretation,
            resulting in works that feel both authentic and transcendent.
          </p>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Techniques & Materials</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Watercolor</h3>
            <p>
              Méndez's watercolor technique emphasizes transparency and luminosity. He works with high-quality pigments
              on specialized papers, often employing wet-on-wet techniques to create soft transitions and atmospheric
              effects. His approach balances controlled precision with the medium's inherent fluidity and
              unpredictability.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Drawing</h3>
            <p>
              In his drawings, Méndez demonstrates exceptional technical skill and expressive range. Working primarily
              with charcoal, graphite, and pastel, he creates works that range from detailed observational studies to
              more abstract explorations of form and emotion. His line work is distinctive for its sensitivity and
              dynamism.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Mixed Techniques</h3>
            <p>
              Méndez's mixed media works represent his most experimental approach. Combining traditional drawing and
              painting materials with collage, digital elements, and unconventional materials, these pieces push
              boundaries and explore contemporary themes while maintaining his characteristic sensitivity to composition
              and mood.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-6">Exhibitions & Recognition</h2>
        <ul className="space-y-6">
          <li className="border-b pb-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold">Solo Exhibition: "Landscapes of Memory"</h3>
              <span className="text-gray-500">2023</span>
            </div>
            <p className="text-gray-700">Gallery Modern Art, Mexico City, Mexico</p>
          </li>
          <li className="border-b pb-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold">Group Exhibition: "Contemporary Watercolor Masters"</h3>
              <span className="text-gray-500">2022</span>
            </div>
            <p className="text-gray-700">International Art Center, Barcelona, Spain</p>
          </li>
          <li className="border-b pb-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold">Award: Excellence in Watercolor</h3>
              <span className="text-gray-500">2021</span>
            </div>
            <p className="text-gray-700">National Association of Visual Artists</p>
          </li>
          <li className="border-b pb-6">
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold">Solo Exhibition: "Between Light and Shadow"</h3>
              <span className="text-gray-500">2020</span>
            </div>
            <p className="text-gray-700">Contemporary Art Museum, Monterrey, Mexico</p>
          </li>
          <li>
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-xl font-bold">Residency Program</h3>
              <span className="text-gray-500">2019</span>
            </div>
            <p className="text-gray-700">International Arts Foundation, New York, USA</p>
          </li>
        </ul>
      </div>
    </div>
  )
}
