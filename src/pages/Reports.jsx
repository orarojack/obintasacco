import './AdminPages.css'

function Reports() {
  const reportTypes = [
    { name: 'Financial Report', icon: '💰', description: 'Complete financial overview and statements' },
    { name: 'Members Report', icon: '👥', description: 'Member statistics and growth analysis' },
    { name: 'Loans Report', icon: '💳', description: 'Loan portfolio and performance analysis' },
    { name: 'Transactions Report', icon: '📝', description: 'Detailed transaction history and summaries' },
    { name: 'Monthly Summary', icon: '📊', description: 'Monthly performance and statistics' },
    { name: 'Annual Report', icon: '📈', description: 'Yearly comprehensive report' },
  ]

  return (
    <div className="admin-page">
      <div className="page-header">
        <h2>Reports & Analytics</h2>
        <p>Generate and view comprehensive reports and analytics</p>
      </div>

      <div className="reports-grid">
        {reportTypes.map((report, index) => (
          <div key={index} className="report-card">
            <div className="report-icon">{report.icon}</div>
            <h3>{report.name}</h3>
            <p>{report.description}</p>
            <div className="report-actions">
              <button className="btn-primary">Generate</button>
              <button className="btn-secondary">View Sample</button>
            </div>
          </div>
        ))}
      </div>

      <div className="dashboard-card">
        <div className="card-header">
          <h3>Recent Reports</h3>
        </div>
        <div className="recent-reports">
          <div className="report-item">
            <span className="report-name">Financial Report - November 2024</span>
            <span className="report-date">Generated on Dec 1, 2024</span>
            <button className="action-icon-btn">📥</button>
          </div>
          <div className="report-item">
            <span className="report-name">Members Report - Q4 2024</span>
            <span className="report-date">Generated on Dec 5, 2024</span>
            <button className="action-icon-btn">📥</button>
          </div>
          <div className="report-item">
            <span className="report-name">Loans Performance Report</span>
            <span className="report-date">Generated on Dec 10, 2024</span>
            <button className="action-icon-btn">📥</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reports

