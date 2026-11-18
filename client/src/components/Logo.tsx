import { Languages } from 'lucide-react'

function Logo() {
  return (
    <span className="inline-flex items-center gap-2.5">
      <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-600 text-white shadow-sm">
        <Languages className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="text-lg font-bold tracking-tight text-gray-950">
        <span className="text-violet-700">Lingua</span>
        <span>WithSerghei</span>
      </span>
    </span>
  )
}

export default Logo
