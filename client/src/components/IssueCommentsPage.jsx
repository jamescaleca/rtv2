import React, { useState, useContext } from 'react'
import { UserContext } from '../context/UserProvider.jsx'
import '../css/styles.css'

function IssueCommentsPage(props) {
  const { title, description, _id, user, username } = props.location.state

  const initInputs = {
    comment: '',
    user: user || '',
    username: username || '',
    _id: _id || ''
  }

  const [inputs, setInputs] = useState(initInputs)
  const { addComment, getAllComments, issues } = useContext(UserContext)

  const currentIssue = issues.find(issue => (issue._id === _id))
  const newCommentsArray = currentIssue.comments.map(comment => (
    <>
      <li>
        <p>{comment.comment}</p>
        <p>{comment.user}</p>
      </li>
      <hr />
    </>
  ))

  function handleChange(e) {
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    addComment(inputs, _id)
    setInputs(initInputs)
    getAllComments(_id)
  }


  const { comment } = inputs

  console.log(currentIssue)

  // useEffect(() => {
  //     getIssueById(_id)
  //     getAllComments(_id)
  // }, [])

  return (
    <div id='issue-comments-page'>
      <h1>{title}</h1>
      <h2>{description}</h2>

      <form onSubmit={handleSubmit} id='new-comment-form'>
        <p>Leave a comment as @{username}</p>
        <input
          type='text'
          name='comment'
          value={comment}
          onChange={handleChange}
          placeholder='Write your well-informed opinions here...'
        />
        <button>Comment</button>
      </form>

      <ul id='comments-section'>
        {newCommentsArray}
      </ul>
    </div>
  )
}

export default IssueCommentsPage