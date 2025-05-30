import Link from "next/link"

export function Footer() {
  return (
    <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
      <p className="text-xs text-gray-500">© 2024 Martin Coppola. Todos los derechos reservados.</p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          Terminos de Servicio
        </Link>
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          Política de Privacidad
        </Link>
        <Link className="text-xs hover:underline underline-offset-4" href="#">
          Contacto
        </Link>
      </nav>
    </footer>
  )
}