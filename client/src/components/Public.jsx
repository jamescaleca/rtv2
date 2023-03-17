import React, { useContext, useEffect } from 'react'
import PublicIssueList from './PublicIssueList.jsx'
import { UserContext } from '../context/UserProvider.jsx'
import '../css/styles.css'

export default function Public(){
  const { issues, getAllIssues, user: { username } } = useContext(UserContext)
  // console.log(issues)

  useEffect(() => {
    getAllIssues()
  }, [])

  return (
    <div className="public">
      <PublicIssueList 
        username={username}
        issues={issues} 
      />
    </div>
  )
}