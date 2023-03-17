import React from 'react'
import { BrowserRouter as Routes, Route, Link } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Auth from './components/Auth.jsx'
import Profile from './components/Profile.jsx'
import Public from './components/Public.jsx'
import IssueList from './components/IssueList.jsx'
import IssueCommentsPage from './components/IssueCommentsPage.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import './App.css'
import { UserProvider } from './context/UserProvider.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <UserProvider>
        <Routes>
          <Route path='/' element={<Auth />} />
        </Routes>
      </UserProvider>
    </Router>
  )
}

export default App
