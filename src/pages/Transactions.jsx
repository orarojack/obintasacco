import { useState } from 'react'
import './AdminPages.css'

function Transactions() {
  const [filter, setFilter] = useState('all')

  const transactions = [
    { id: 1, type: 'Deposit', member: 'John Doe', amount: 'KES 25,000', date: '2024-12-14', time: '10:30 AM', status: 'Completed' },
    { id: 2, type: 'Loan Payment', member: 'Jane Smith', amount: 'KES 5,000', date: '2024-12-14', time: '09:15 AM', status: 'Completed' },
    { id: 3, type: 'Withdrawal', member: 'Mike Johnson', amount: 'KES 15,000', date: '2024-12-14', time: '08:45 AM', status: 'Pending' },
    { id: 4, type: 'Deposit', member: 'Sarah Williams', amount: 'KES 50,000', date: '2024-12-13', time: '04:20 PM', status: 'Completed' },
    { id: 5, type: 'Loan Disbursement', member: 'David Brown', amount: 'KES 30,000', date: '2024-12-13', time: '02:10 PM', status: 'Completed' },
  ]

  const filteredTransactions = filter === 'all' 
    ? transactions 
    : transactions.filter(t => t.type.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div className="admin-page">
      <div className="page-header">
        <h2>Transactions</h2>
        <p>View and manage all financial transactions</p>
      </div>

      <div className="page-toolbar">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input type="text" placeholder="Search transactions..." />
        </div>
        <div className="filter-buttons">
          <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>
            All
          </button>
          <button className={`filter-btn ${filter === 'deposit' ? 'active' : ''}`} onClick={() => setFilter('deposit')}>
            Deposits
          </button>
          <button className={`filter-btn ${filter === 'withdrawal' ? 'active' : ''}`} onClick={() => setFilter('withdrawal')}>
            Withdrawals
          </button>
          <button className={`filter-btn ${filter === 'loan' ? 'active' : ''}`} onClick={() => setFilter('loan')}>
            Loans
          </button>
        </div>
      </div>

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Type</th>
              <th>Member</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTransactions.map((transaction) => (
              <tr key={transaction.id}>
                <td>#{transaction.id}</td>
                <td>
                  <span className={`type-badge ${transaction.type.toLowerCase().replace(' ', '-')}`}>
                    {transaction.type}
                  </span>
                </td>
                <td>{transaction.member}</td>
                <td className="amount-cell">{transaction.amount}</td>
                <td>{transaction.date}</td>
                <td>{transaction.time}</td>
                <td>
                  <span className={`status-badge ${transaction.status.toLowerCase()}`}>
                    {transaction.status}
                  </span>
                </td>
                <td>
                  <button className="action-icon-btn" title="View Details">👁️</button>
                  <button className="action-icon-btn" title="Download Receipt">📄</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Transactions

