import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router} from 'react-router-dom'
import { UserProvider } from './context/UserProvider'
import App from './App'
import './css/styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <UserProvider>
  <React.StrictMode>
    <Router>
      <UserProvider>
        <App />
      </UserProvider>
    </Router>
  </React.StrictMode>
  // </UserProvider>
)
