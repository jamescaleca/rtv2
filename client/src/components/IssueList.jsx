import React from 'react'
import { Link } from 'react-router-dom'
import IssuePreview from './IssuePreview'
import '../css/styles.css'

export default function IssueList(props) {
  const { issues, editIssue, deleteIssue, username } = props
  // console.log(username)
  return (
    <ul id='profile-issue-list'>
      { issues.map((issue) => 
        <li className='profile-issue-li'>
          <Link 
            to={{
              pathname: `/api/issues/${issue._id}`,
              state: 
                {
                  username: username,
                  _id: issue._id,
                  title: issue.title,
                  description: issue.description,
                  comments: issue.comments
                }
            }}
          >
            <div className='profile-issues-title'>
              <h1>{issue.title}</h1>
            </div>
          </Link>

          <IssuePreview 
            {...issue}
            key={`${issue._id}`}
            deleteIssue={deleteIssue}
            editIssue={editIssue}
            username={username}
            upvotes={issue.upvotes}
            downvotes={issue.downvotes}
          />
          <hr />
        </li>
      )}
    </ul>
  )
}