import { useState } from 'react'
import { Link, useLocation, Outlet } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './AdminLayout.css'

function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const location = useLocation()
  const { logout } = useAuth()

  const menuItems = [
    { path: '/admin', icon: '📊', label: 'Dashboard', exact: true },
    { path: '/admin/users', icon: '👥', label: 'Users & Members' },
    { path: '/admin/funds', icon: '💰', label: 'Funds Management' },
    { path: '/admin/loans', icon: '💳', label: 'Loans Management' },
    { path: '/admin/transactions', icon: '📝', label: 'Transactions' },
    { path: '/admin/reports', icon: '📈', label: 'Reports & Analytics' },
    { path: '/admin/settings', icon: '⚙️', label: 'Settings' },
  ]

  const isActive = (path, exact = false) => {
    if (exact) {
      return location.pathname === path
    }
    return location.pathname.startsWith(path)
  }

  return (
    <div className="admin-layout">
      {/* Sidebar */}
      <aside className={`admin-sidebar ${sidebarOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <h2>Obinta Sacco</h2>
          <button
            className="sidebar-toggle"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label="Toggle sidebar"
          >
            {sidebarOpen ? '←' : '→'}
          </button>
        </div>

        <nav className="sidebar-nav">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item ${isActive(item.path, item.exact) ? 'active' : ''}`}
            >
              <span className="nav-icon">{item.icon}</span>
              {sidebarOpen && <span className="nav-label">{item.label}</span>}
            </Link>
          ))}
        </nav>

        <div className="sidebar-footer">
          <Link to="/" className="back-to-site">
            <span className="nav-icon">🏠</span>
            {sidebarOpen && <span className="nav-label">Back to Site</span>}
          </Link>
          <button
            onClick={logout}
            className="back-to-site"
            style={{ width: '100%', border: 'none', background: 'none', cursor: 'pointer', textAlign: 'left', marginTop: '0.5rem' }}
          >
            <span className="nav-icon">🚪</span>
            {sidebarOpen && <span className="nav-label">Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        <header className="admin-header">
          <div className="header-left">
            <h1>Admin Panel</h1>
          </div>
          <div className="header-right">
            <div className="admin-user">
              <span className="user-avatar">👤</span>
              <span className="user-name">Admin User</span>
            </div>
          </div>
        </header>

        <div className="admin-content">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default AdminLayout

