import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function NewsletterSignup() {
  return (
    <section className="py-16 px-4 md:px-6 bg-black text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
        <p className="text-gray-300 mb-8">Receive updates about new works, exhibitions, and special events.</p>
        <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <Input
            type="email"
            placeholder="Your email address"
            className="bg-gray-800 border-gray-700 flex-grow"
            required
          />
          <Button type="submit">Subscribe</Button>
        </form>
      </div>
    </section>
  )
}
