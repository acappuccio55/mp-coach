import { Card, CardContent } from "@/components/ui/card"

const steps = [
  {
    number: 1,
    title: "Asesoramiento",
    description:
      "Evaluación completa de estado físico y objetivos.",
  },
  {
    number: 2,
    title: "Plan Personalizado",
    description: "Recibí un plan personalizado de ejercicios, nutrición y cambios en el estilo de vida.",
  },
  {
    number: 3,
    title: "Entrenamiento",
    description: "Seguí un programa semanal, correción de forma, y ajustes condicionales de plan.",
  },
  {
    number: 4,
    title: "Resultados",
    description:
      "Lográ tus objetivos con soporte constante y obtené una estrategia a largo plazo.",
  },
]

export function ProcessSteps() {
  return (
    <section id="process" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Como Funciona</h2>
            <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Mi proceso de cuatro pasos para ayudarte a lograr tu transformación y tus objetivos.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-4 lg:gap-8">
          {steps.map((step) => (
            <Card
              key={step.number}
              className="relative overflow-hidden border-2 hover:border-orange-200 transition-colors"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-orange-100 text-orange-600 font-bold text-lg mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}