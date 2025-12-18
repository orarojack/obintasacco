import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AdminLayout from './components/AdminLayout'
import AdminDashboard from './pages/AdminDashboard'
import UsersManagement from './pages/UsersManagement'
import FundsManagement from './pages/FundsManagement'
import LoansManagement from './pages/LoansManagement'
import Transactions from './pages/Transactions'
import Reports from './pages/Reports'
import Settings from './pages/Settings'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="users" element={<UsersManagement />} />
          <Route path="funds" element={<FundsManagement />} />
          <Route path="loans" element={<LoansManagement />} />
          <Route path="transactions" element={<Transactions />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
