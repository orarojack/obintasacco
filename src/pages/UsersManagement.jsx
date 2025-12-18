import { useState } from 'react'
import './AdminPages.css'

function UsersManagement() {
  const [searchTerm, setSearchTerm] = useState('')
  const [showAddModal, setShowAddModal] = useState(false)

  const users = [
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '+254 700 000 001', status: 'Active', balance: 'KES 45,000', joinDate: '2023-01-15' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '+254 700 000 002', status: 'Active', balance: 'KES 120,000', joinDate: '2022-11-20' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', phone: '+254 700 000 003', status: 'Inactive', balance: 'KES 5,000', joinDate: '2024-03-10' },
    { id: 4, name: 'Sarah Williams', email: 'sarah@example.com', phone: '+254 700 000 004', status: 'Active', balance: 'KES 89,500', joinDate: '2023-06-05' },
    { id: 5, name: 'David Brown', email: 'david@example.com', phone: '+254 700 000 005', status: 'Pending', balance: 'KES 0', joinDate: '2024-12-01' },
  ]

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.phone.includes(searchTerm)
  )

  return (
    <div className="admin-page">
      <div className="page-header">
        <div>
          <h2>Users & Members Management</h2>
          <p>Manage all Sacco members and their accounts</p>
        </div>
        <button className="btn-primary" onClick={() => setShowAddModal(true)}>
          ➕ Add New Member
        </button>
      </div>

      {/* Search and Filters */}
      <div className="page-toolbar">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search by name, email, or phone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="filter-buttons">
          <button className="filter-btn active">All</button>
          <button className="filter-btn">Active</button>
          <button className="filter-btn">Inactive</button>
          <button className="filter-btn">Pending</button>
        </div>
      </div>

      {/* Users Table */}
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Balance</th>
              <th>Join Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.map((user) => (
              <tr key={user.id}>
                <td>#{user.id}</td>
                <td>
                  <div className="user-cell">
                    <span className="user-avatar-small">👤</span>
                    {user.name}
                  </div>
                </td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>
                  <span className={`status-badge ${user.status.toLowerCase()}`}>
                    {user.status}
                  </span>
                </td>
                <td className="amount-cell">{user.balance}</td>
                <td>{user.joinDate}</td>
                <td>
                  <div className="action-buttons">
                    <button className="action-icon-btn" title="View">👁️</button>
                    <button className="action-icon-btn" title="Edit">✏️</button>
                    <button className="action-icon-btn" title="Delete">🗑️</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add Member Modal */}
      {showAddModal && (
        <div className="modal-overlay" onClick={() => setShowAddModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h3>Add New Member</h3>
              <button className="modal-close" onClick={() => setShowAddModal(false)}>×</button>
            </div>
            <form className="modal-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name</label>
                  <input type="text" placeholder="Enter full name" required />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="Enter email" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Phone Number</label>
                  <input type="tel" placeholder="+254 700 000 000" required />
                </div>
                <div className="form-group">
                  <label>ID Number</label>
                  <input type="text" placeholder="Enter ID number" required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Initial Deposit</label>
                  <input type="number" placeholder="KES 0" min="1000" required />
                </div>
                <div className="form-group">
                  <label>Status</label>
                  <select required>
                    <option value="pending">Pending</option>
                    <option value="active">Active</option>
                  </select>
                </div>
              </div>
              <div className="modal-actions">
                <button type="button" className="btn-secondary" onClick={() => setShowAddModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="btn-primary">
                  Add Member
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

export default UsersManagement

