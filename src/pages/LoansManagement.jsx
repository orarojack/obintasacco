import { useState } from 'react'
import './AdminPages.css'

function LoansManagement() {
  const [activeTab, setActiveTab] = useState('all')

  const loanStats = [
    { label: 'Total Loans', value: '2,340', icon: '💳', color: '#0d9488' },
    { label: 'Active Loans', value: '1,890', icon: '✅', color: '#059669' },
    { label: 'Pending Applications', value: '156', icon: '⏳', color: '#f59e0b' },
    { label: 'Total Amount Disbursed', value: 'KES 450M', icon: '💰', color: '#ec4899' },
  ]

  const loans = [
    { id: 1, member: 'John Doe', amount: 'KES 50,000', interest: '12%', term: '12 months', status: 'Active', appliedDate: '2024-10-15', dueDate: '2025-10-15', balance: 'KES 35,000' },
    { id: 2, member: 'Jane Smith', amount: 'KES 100,000', interest: '10%', term: '24 months', status: 'Active', appliedDate: '2024-09-20', dueDate: '2026-09-20', balance: 'KES 75,000' },
    { id: 3, member: 'Mike Johnson', amount: 'KES 25,000', interest: '15%', term: '6 months', status: 'Pending', appliedDate: '2024-12-10', dueDate: '-', balance: '-' },
    { id: 4, member: 'Sarah Williams', amount: 'KES 75,000', interest: '12%', term: '18 months', status: 'Active', appliedDate: '2024-08-05', dueDate: '2026-02-05', balance: 'KES 50,000' },
    { id: 5, member: 'David Brown', amount: 'KES 30,000', interest: '14%', term: '12 months', status: 'Overdue', appliedDate: '2023-12-01', dueDate: '2024-12-01', balance: 'KES 5,000' },
  ]

  const filteredLoans = activeTab === 'all' 
    ? loans 
    : loans.filter(loan => loan.status.toLowerCase() === activeTab.toLowerCase())

  return (
    <div className="admin-page">
      <div className="page-header">
        <div>
          <h2>Loans Management</h2>
          <p>Manage loan applications, approvals, and repayments</p>
        </div>
        <button className="btn-primary">➕ New Loan Application</button>
      </div>

      {/* Loan Statistics */}
      <div className="stats-grid">
        {loanStats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon" style={{ background: `${stat.color}20`, color: stat.color }}>
              {stat.icon}
            </div>
            <div className="stat-content">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="tabs-container">
        <button
          className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          All Loans
        </button>
        <button
          className={`tab-btn ${activeTab === 'active' ? 'active' : ''}`}
          onClick={() => setActiveTab('active')}
        >
          Active
        </button>
        <button
          className={`tab-btn ${activeTab === 'pending' ? 'active' : ''}`}
          onClick={() => setActiveTab('pending')}
        >
          Pending
        </button>
        <button
          className={`tab-btn ${activeTab === 'overdue' ? 'active' : ''}`}
          onClick={() => setActiveTab('overdue')}
        >
          Overdue
        </button>
      </div>

      {/* Loans Table */}
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Loan ID</th>
              <th>Member</th>
              <th>Amount</th>
              <th>Interest Rate</th>
              <th>Term</th>
              <th>Status</th>
              <th>Applied Date</th>
              <th>Due Date</th>
              <th>Balance</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredLoans.map((loan) => (
              <tr key={loan.id}>
                <td>#{loan.id}</td>
                <td>{loan.member}</td>
                <td className="amount-cell">{loan.amount}</td>
                <td>{loan.interest}</td>
                <td>{loan.term}</td>
                <td>
                  <span className={`status-badge ${loan.status.toLowerCase()}`}>
                    {loan.status}
                  </span>
                </td>
                <td>{loan.appliedDate}</td>
                <td>{loan.dueDate}</td>
                <td className="amount-cell">{loan.balance}</td>
                <td>
                  <div className="action-buttons">
                    <button className="action-icon-btn" title="View Details">👁️</button>
                    {loan.status === 'Pending' && (
                      <>
                        <button className="action-icon-btn" title="Approve" style={{ color: '#059669' }}>✅</button>
                        <button className="action-icon-btn" title="Reject" style={{ color: '#ef4444' }}>❌</button>
                      </>
                    )}
                    {loan.status === 'Active' && (
                      <button className="action-icon-btn" title="Record Payment">💰</button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default LoansManagement

