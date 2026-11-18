import { CircleUserRound } from 'lucide-react'
import { Link, Outlet } from 'react-router'

function MainLayout() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <header className="border-b border-gray-200">
        <div className="flex h-16 w-full items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            to="/"
            className="flex items-center gap-2 text-gray-950"
            aria-label="LinguaWithSerghei home"
          >
            <img
              src="/favicon.svg"
              alt=""
              className="h-8 w-8"
            />
            <span className="text-lg font-semibold">LinguaWithSerghei</span>
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