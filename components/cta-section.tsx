import { Button } from "./ui/button"
import { Input } from "./ui/input"
import { Phone, Mail } from "lucide-react"

export function CTASection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-orange-500 to-red-500">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">¿Queres empezar tu transformacion física?</h2>
            <p className="max-w-[600px] text-orange-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Llega al cuerpo que siempre quisiste!
            </p>
          </div>
          <div className="w-full max-w-sm space-y-2">
            <form className="flex gap-2">
              <Input type="email" placeholder="Enter your email" className="flex-1 bg-white text-gray-900" />
              <Button type="submit" variant="secondary" className="bg-white text-orange-500 hover:bg-gray-100">
                Sumate hoy!
              </Button>
            </form>
            <p className="text-xs text-orange-100">Consultá gratis y sin compromiso.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" variant="secondary" className="bg-white text-orange-500 hover:bg-gray-100">
              <Phone className="mr-2 h-4 w-4" />
              Whatsapp: +54 1130204050
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-orange-500"
            >
              <Mail className="mr-2 h-4 w-4" />
              Consultá por email.
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}