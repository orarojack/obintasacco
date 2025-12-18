import { useState } from 'react'
import './AdminPages.css'

function FundsManagement() {
  const [activeTab, setActiveTab] = useState('overview')

  const fundStats = [
    { label: 'Total Deposits', value: 'KES 520M', icon: '💰', trend: '+12%' },
    { label: 'Total Withdrawals', value: 'KES 180M', icon: '💸', trend: '+5%' },
    { label: 'Available Balance', value: 'KES 340M', icon: '💵', trend: '+8%' },
    { label: 'Reserve Fund', value: 'KES 45M', icon: '🏦', trend: '+3%' },
  ]

  const transactions = [
    { id: 1, type: 'Deposit', member: 'John Doe', amount: 'KES 25,000', date: '2024-12-14', status: 'Completed' },
    { id: 2, type: 'Withdrawal', member: 'Jane Smith', amount: 'KES 15,000', date: '2024-12-14', status: 'Completed' },
    { id: 3, type: 'Deposit', member: 'Mike Johnson', amount: 'KES 50,000', date: '2024-12-13', status: 'Pending' },
    { id: 4, type: 'Deposit', member: 'Sarah Williams', amount: 'KES 10,000', date: '2024-12-13', status: 'Completed' },
    { id: 5, type: 'Withdrawal', member: 'David Brown', amount: 'KES 5,000', date: '2024-12-12', status: 'Completed' },
  ]

  return (
    <div className="admin-page">
      <div className="page-header">
        <h2>Funds Management</h2>
        <p>Monitor and manage all financial transactions and fund allocations</p>
      </div>

      {/* Fund Statistics */}
      <div className="stats-grid">
        {fundStats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon" style={{ background: '#0d948820', color: '#0d9488' }}>
              {stat.icon}
            </div>
            <div className="stat-content">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-change" style={{ color: '#059669' }}>
                {stat.trend} from last month
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="tabs-container">
        <button
          className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          Overview
        </button>
        <button
          className={`tab-btn ${activeTab === 'deposits' ? 'active' : ''}`}
          onClick={() => setActiveTab('deposits')}
        >
          Deposits
        </button>
        <button
          className={`tab-btn ${activeTab === 'withdrawals' ? 'active' : ''}`}
          onClick={() => setActiveTab('withdrawals')}
        >
          Withdrawals
        </button>
        <button
          className={`tab-btn ${activeTab === 'transfers' ? 'active' : ''}`}
          onClick={() => setActiveTab('transfers')}
        >
          Transfers
        </button>
      </div>

      {/* Content based on active tab */}
      {activeTab === 'overview' && (
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <div className="card-header">
              <h3>Recent Transactions</h3>
              <button className="view-all-btn">View All</button>
            </div>
            <div className="table-container">
              <table className="data-table">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Type</th>
                    <th>Member</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction) => (
                    <tr key={transaction.id}>
                      <td>#{transaction.id}</td>
                      <td>
                        <span className={`type-badge ${transaction.type.toLowerCase()}`}>
                          {transaction.type}
                        </span>
                      </td>
                      <td>{transaction.member}</td>
                      <td className="amount-cell">{transaction.amount}</td>
                      <td>{transaction.date}</td>
                      <td>
                        <span className={`status-badge ${transaction.status.toLowerCase()}`}>
                          {transaction.status}
                        </span>
                      </td>
                      <td>
                        <button className="action-icon-btn" title="View Details">👁️</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="dashboard-card">
            <div className="card-header">
              <h3>Quick Actions</h3>
            </div>
            <div className="quick-actions">
              <button className="action-btn primary">
                <span className="action-icon">💰</span>
                <span>Record Deposit</span>
              </button>
              <button className="action-btn secondary">
                <span className="action-icon">💸</span>
                <span>Process Withdrawal</span>
              </button>
              <button className="action-btn secondary">
                <span className="action-icon">🔄</span>
                <span>Transfer Funds</span>
              </button>
              <button className="action-btn secondary">
                <span className="action-icon">📊</span>
                <span>Generate Report</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {activeTab === 'deposits' && (
        <div className="dashboard-card">
          <div className="card-header">
            <h3>All Deposits</h3>
            <button className="btn-primary">➕ New Deposit</button>
          </div>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Member</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {transactions.filter(t => t.type === 'Deposit').map((transaction) => (
                  <tr key={transaction.id}>
                    <td>#{transaction.id}</td>
                    <td>{transaction.member}</td>
                    <td className="amount-cell">{transaction.amount}</td>
                    <td>{transaction.date}</td>
                    <td>
                      <span className={`status-badge ${transaction.status.toLowerCase()}`}>
                        {transaction.status}
                      </span>
                    </td>
                    <td>
                      <button className="action-icon-btn" title="View">👁️</button>
                      <button className="action-icon-btn" title="Edit">✏️</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'withdrawals' && (
        <div className="dashboard-card">
          <div className="card-header">
            <h3>All Withdrawals</h3>
            <button className="btn-primary">➕ New Withdrawal</button>
          </div>
          <div className="table-container">
            <table className="data-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Member</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {transactions.filter(t => t.type === 'Withdrawal').map((transaction) => (
                  <tr key={transaction.id}>
                    <td>#{transaction.id}</td>
                    <td>{transaction.member}</td>
                    <td className="amount-cell">{transaction.amount}</td>
                    <td>{transaction.date}</td>
                    <td>
                      <span className={`status-badge ${transaction.status.toLowerCase()}`}>
                        {transaction.status}
                      </span>
                    </td>
                    <td>
                      <button className="action-icon-btn" title="View">👁️</button>
                      <button className="action-icon-btn" title="Approve">✅</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

export default FundsManagement

