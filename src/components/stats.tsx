import { Users, Target, Trophy } from "lucide-react"

const stats = [
  {
    icon: Users,
    value: "40+",
    label: "Clientes Transformados",
  },
  {
    icon: Target,
    value: "95%",
    label: "Tasa de Éxito",
  },
  {
    icon: Trophy,
    value: "5+",
    label: "Años de Experiencia",
  },
]

export function StatsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center space-y-2 text-center">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-orange-500 text-white">
                <stat.icon className="h-8 w-8" />
              </div>
              <div className="text-3xl font-bold">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}