import { Outlet } from 'react-router'

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header>
        {/* Navigation */}
      </header>

      {/* Page content */}
      <main className="flex-1">
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