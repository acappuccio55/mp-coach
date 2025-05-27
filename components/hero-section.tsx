import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { CheckCircle, ArrowRight, Phone } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">🏆 Personal Trainer Certificado</Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Transformá tu mente, transformá tu cuerpo.
              </h1>
              <p className="max-w-[600px] text-gray-600 md:text-xl">
                Accede a entrenamiento personalizado con resultados reales.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                Empezá tu transformación.
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                <Phone className="mr-2 h-4 w-4" />
                Consulta grátis.
              </Button>
            </div>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>No es como cualquier gym</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Planes personalizados</span>
              </div>
              <div className="flex items-center gap-1">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Consulta cuando quieras</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              alt="Fitness Coach"
              className="aspect-[4/5] overflow-hidden rounded-xl object-cover"
              height="600"
              src="/images/martin1.png"
              width="480"
            />
          </div>
        </div>
      </div>
    </section>
  )
}