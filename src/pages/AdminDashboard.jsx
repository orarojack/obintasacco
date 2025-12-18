import './AdminPages.css'

function AdminDashboard() {
  const stats = [
    { label: 'Total Members', value: '10,245', icon: '👥', color: '#0d9488', change: '+12%' },
    { label: 'Total Funds', value: 'KES 520M', icon: '💰', color: '#059669', change: '+8%' },
    { label: 'Active Loans', value: '2,340', icon: '💳', color: '#f59e0b', change: '+5%' },
    { label: 'Pending Applications', value: '156', icon: '📋', color: '#ec4899', change: '-3%' },
  ]

  const recentActivities = [
    { type: 'Loan Approval', member: 'John Doe', amount: 'KES 50,000', time: '2 hours ago' },
    { type: 'New Member', member: 'Jane Smith', amount: 'KES 5,000', time: '4 hours ago' },
    { type: 'Deposit', member: 'Mike Johnson', amount: 'KES 25,000', time: '6 hours ago' },
    { type: 'Loan Application', member: 'Sarah Williams', amount: 'KES 100,000', time: '8 hours ago' },
  ]

  return (
    <div className="admin-page">
      <div className="page-header">
        <h2>Dashboard Overview</h2>
        <p>Welcome back! Here's what's happening with your Sacco today.</p>
      </div>

      {/* Statistics Cards */}
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon" style={{ background: `${stat.color}20`, color: stat.color }}>
              {stat.icon}
            </div>
            <div className="stat-content">
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-change" style={{ color: stat.color }}>
                {stat.change} from last month
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts and Tables Row */}
      <div className="dashboard-grid">
        {/* Recent Activities */}
        <div className="dashboard-card">
          <div className="card-header">
            <h3>Recent Activities</h3>
            <button className="view-all-btn">View All</button>
          </div>
          <div className="activities-list">
            {recentActivities.map((activity, index) => (
              <div key={index} className="activity-item">
                <div className="activity-icon">
                  {activity.type === 'Loan Approval' && '✅'}
                  {activity.type === 'New Member' && '👤'}
                  {activity.type === 'Deposit' && '💰'}
                  {activity.type === 'Loan Application' && '📝'}
                </div>
                <div className="activity-details">
                  <div className="activity-type">{activity.type}</div>
                  <div className="activity-member">{activity.member}</div>
                </div>
                <div className="activity-amount">{activity.amount}</div>
                <div className="activity-time">{activity.time}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="dashboard-card">
          <div className="card-header">
            <h3>Quick Actions</h3>
          </div>
          <div className="quick-actions">
            <button className="action-btn primary">
              <span className="action-icon">➕</span>
              <span>Add New Member</span>
            </button>
            <button className="action-btn secondary">
              <span className="action-icon">💳</span>
              <span>Process Loan</span>
            </button>
            <button className="action-btn secondary">
              <span className="action-icon">💰</span>
              <span>Record Deposit</span>
            </button>
            <button className="action-btn secondary">
              <span className="action-icon">📊</span>
              <span>Generate Report</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard

