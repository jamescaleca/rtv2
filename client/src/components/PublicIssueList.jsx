import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserProvider.jsx'
import UpvoteIcon from '../icons/arrow-alt-square-up-regular.svg'
import DownvoteIcon from '../icons/arrow-square-down-regular.svg'
import '../css/styles.css'

export default function IssueList(props) {
  const { issues, username } = props
  const { upvoteIssue, downvoteIssue, getAllIssues } = useContext(UserContext)
  // const [votesTotal, setVotesTotal] = useState(0)

  useEffect(() => {
    getAllIssues()
  }, [])

  const mapIssues = [].concat(issues)
    .sort((a, b) => b.votesTotal - a.votesTotal)
    .map((issue) => 
      <li className='issue-li'>
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
          <h1>{issue.title}</h1>
          <p>{issue.description}</p>
          {/* <h3>Upvotes: {issue.upvotes.length}</h3>
          <h3>Downvotes: {issue.downvotes.length}</h3> */}
          <h3>Total votes: <span>{issue.votesTotal}</span></h3>
        </Link>
        <img 
          className='upvote'
          alt='upvote' 
          src={UpvoteIcon} 
          onClick={() => upvoteIssue(issue._id)}
        />
        <img 
          className='downvote'
          alt='downvote' 
          src={DownvoteIcon} 
          onClick={() => downvoteIssue(issue._id)}
        />
        <hr />
      </li>
    )

  // console.log(issues)

  return (
    <>
      <div id='public-issues-title'>
        <h1>All Issues</h1>
      </div>
      
      <ul id='issue-list'>
        { mapIssues }
      </ul>
    </>
  )
}