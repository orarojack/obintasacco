import { useState } from 'react'
import './AdminPages.css'

function Settings() {
  const [activeTab, setActiveTab] = useState('general')

  return (
    <div className="admin-page">
      <div className="page-header">
        <h2>Settings</h2>
        <p>Configure Sacco system settings and preferences</p>
      </div>

      <div className="settings-container">
        <div className="settings-sidebar">
          <button
            className={`settings-nav-item ${activeTab === 'general' ? 'active' : ''}`}
            onClick={() => setActiveTab('general')}
          >
            ⚙️ General
          </button>
          <button
            className={`settings-nav-item ${activeTab === 'financial' ? 'active' : ''}`}
            onClick={() => setActiveTab('financial')}
          >
            💰 Financial
          </button>
          <button
            className={`settings-nav-item ${activeTab === 'loans' ? 'active' : ''}`}
            onClick={() => setActiveTab('loans')}
          >
            💳 Loans
          </button>
          <button
            className={`settings-nav-item ${activeTab === 'notifications' ? 'active' : ''}`}
            onClick={() => setActiveTab('notifications')}
          >
            🔔 Notifications
          </button>
          <button
            className={`settings-nav-item ${activeTab === 'security' ? 'active' : ''}`}
            onClick={() => setActiveTab('security')}
          >
            🔒 Security
          </button>
        </div>

        <div className="settings-content">
          {activeTab === 'general' && (
            <div className="settings-section">
              <h3>General Settings</h3>
              <form className="settings-form">
                <div className="form-group">
                  <label>Sacco Name</label>
                  <input type="text" defaultValue="Obinta Sacco" />
                </div>
                <div className="form-group">
                  <label>Contact Email</label>
                  <input type="email" defaultValue="info@obintasacco.co.ke" />
                </div>
                <div className="form-group">
                  <label>Contact Phone</label>
                  <input type="tel" defaultValue="+254 700 000 000" />
                </div>
                <div className="form-group">
                  <label>Address</label>
                  <textarea rows="3" defaultValue="123 Financial Street, Nairobi, Kenya" />
                </div>
                <button type="submit" className="btn-primary">Save Changes</button>
              </form>
            </div>
          )}

          {activeTab === 'financial' && (
            <div className="settings-section">
              <h3>Financial Settings</h3>
              <form className="settings-form">
                <div className="form-group">
                  <label>Minimum Deposit Amount</label>
                  <input type="number" defaultValue="1000" />
                </div>
                <div className="form-group">
                  <label>Maximum Withdrawal per Day</label>
                  <input type="number" defaultValue="500000" />
                </div>
                <div className="form-group">
                  <label>Interest Rate on Savings (%)</label>
                  <input type="number" step="0.1" defaultValue="5.0" />
                </div>
                <div className="form-group">
                  <label>Reserve Fund Percentage (%)</label>
                  <input type="number" step="0.1" defaultValue="10.0" />
                </div>
                <button type="submit" className="btn-primary">Save Changes</button>
              </form>
            </div>
          )}

          {activeTab === 'loans' && (
            <div className="settings-section">
              <h3>Loan Settings</h3>
              <form className="settings-form">
                <div className="form-group">
                  <label>Minimum Loan Amount</label>
                  <input type="number" defaultValue="5000" />
                </div>
                <div className="form-group">
                  <label>Maximum Loan Amount</label>
                  <input type="number" defaultValue="5000000" />
                </div>
                <div className="form-group">
                  <label>Default Interest Rate (%)</label>
                  <input type="number" step="0.1" defaultValue="12.0" />
                </div>
                <div className="form-group">
                  <label>Minimum Loan Term (months)</label>
                  <input type="number" defaultValue="6" />
                </div>
                <div className="form-group">
                  <label>Maximum Loan Term (months)</label>
                  <input type="number" defaultValue="60" />
                </div>
                <button type="submit" className="btn-primary">Save Changes</button>
              </form>
            </div>
          )}

          {activeTab === 'notifications' && (
            <div className="settings-section">
              <h3>Notification Settings</h3>
              <form className="settings-form">
                <div className="form-group checkbox-group">
                  <label>
                    <input type="checkbox" defaultChecked />
                    Email notifications for new members
                  </label>
                </div>
                <div className="form-group checkbox-group">
                  <label>
                    <input type="checkbox" defaultChecked />
                    Email notifications for loan applications
                  </label>
                </div>
                <div className="form-group checkbox-group">
                  <label>
                    <input type="checkbox" defaultChecked />
                    SMS notifications for transactions
                  </label>
                </div>
                <div className="form-group checkbox-group">
                  <label>
                    <input type="checkbox" />
                    Weekly summary reports
                  </label>
                </div>
                <button type="submit" className="btn-primary">Save Changes</button>
              </form>
            </div>
          )}

          {activeTab === 'security' && (
            <div className="settings-section">
              <h3>Security Settings</h3>
              <form className="settings-form">
                <div className="form-group">
                  <label>Session Timeout (minutes)</label>
                  <input type="number" defaultValue="30" />
                </div>
                <div className="form-group checkbox-group">
                  <label>
                    <input type="checkbox" defaultChecked />
                    Require two-factor authentication
                  </label>
                </div>
                <div className="form-group checkbox-group">
                  <label>
                    <input type="checkbox" defaultChecked />
                    Log all admin activities
                  </label>
                </div>
                <div className="form-group">
                  <label>Change Password</label>
                  <input type="password" placeholder="Enter new password" />
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input type="password" placeholder="Confirm new password" />
                </div>
                <button type="submit" className="btn-primary">Save Changes</button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Settings

