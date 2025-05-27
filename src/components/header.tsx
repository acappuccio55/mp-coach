import Link from "next/link"
import { Trophy } from "lucide-react"

export function Header() {
  return (
    <header className="px-4 lg:px-6 h-16 flex items-center border-b">
      <Link className="flex items-center justify-center" href="#">
        <Trophy className="h-6 w-6 text-orange-500" />
        <span className="ml-2 text-xl font-bold">Martin Coppola Coaching</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link className="text-sm font-medium hover:text-orange-500 transition-colors" href="#about">
          Información
        </Link>
        <Link className="text-sm font-medium hover:text-orange-500 transition-colors" href="#process">
          Proceso
        </Link>
        <Link className="text-sm font-medium hover:text-orange-500 transition-colors" href="#reviews">
          Reseñas
        </Link>
        <Link className="text-sm font-medium hover:text-orange-500 transition-colors" href="#contact">
          Contacto
        </Link>
      </nav>
    </header>
  )
}