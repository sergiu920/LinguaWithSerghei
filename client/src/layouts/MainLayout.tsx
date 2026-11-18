import { CircleUserRound } from 'lucide-react'
import { Link, Outlet } from 'react-router'
import Logo from '../components/Logo'

function MainLayout() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="border-b border-gray-200">
        <div className="flex h-16 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-violet-600"
            aria-label="LinguaWithSerghei home"
          >
            <Logo />
          </Link>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition-colors hover:bg-gray-100"
            aria-label="Open profile"
          >
            <CircleUserRound className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </header>

      {/* Page content */}
      <main className="mt-6 w-full flex-1 px-4 sm:px-6 lg:px-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer>
        {/* Footer content */}
      </footer>
    </div>
  )
}

export default MainLayout