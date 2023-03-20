import React, { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Auth from './components/Auth.jsx'
import Profile from './components/Profile.jsx'
import Public from './components/Public.jsx'
import IssueList from './components/IssueList.jsx'
import IssueCommentsPage from './components/IssueCommentsPage.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import { UserContext } from './context/UserProvider.jsx'
import './css/styles.css'

function App() {
  const { token, logout, user } = useContext(UserContext)

  return (
    <div className="app">
      {token && <Navbar logout={logout} />}
        <Routes>
          <Route 
            path='/' 
            element={token ? <Navigate to='/profile' /> : <Auth />} 
          />
          <Route 
            path='/profile'
            element={<ProtectedRoute token={token} redirectTo='/'>
                <Profile />
              </ProtectedRoute>}
          />
          <Route 
            path='/public'
            element={<ProtectedRoute token={token} redirectTo='/'>
                <Public />
              </ProtectedRoute>}
          />
          <Route 
            path='/api/issues/:issueId'
            element={<IssueCommentsPage />}
          />
        </Routes>
    </div>
  )
}

export default App
