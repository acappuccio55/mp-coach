import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"
import Image from "next/image"

const reviews = [
  {
    name: "Claudia M",
    role: "Maestra",
    review:
      "Opinion de Claudia.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Carlos R",
    role: "Programador",
    review:
      "Opinion de Carlos.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  {
    name: "Florencia C",
    role: "Ama de casa",
    review:
      "Opinion de Florencia.",
    avatar: "/placeholder.svg?height=40&width=40",
  },
]

export function ReviewsSection() {
  return (
    <section id="reviews" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Que dicen mis clientes</h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Transformaciones reales de gente real.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-8">
          {reviews.map((review, index) => (
            <Card key={index} className="border-2">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{review.review}</p>
                <div className="flex items-center gap-3">
                  <Image
                    alt={review.name}
                    className="rounded-full"
                    height="40"
                    src={review.avatar || "/placeholder.svg"}
                    width="40"
                  />
                  <div>
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-sm text-gray-600">{review.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}