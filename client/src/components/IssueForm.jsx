import React, { useState, useContext } from 'react'
import { UserContext } from '../context/UserProvider'
import '../css/styles.css'

export default function IssueForm(props) {
  const initInputs = {
    title: props.title || '',
    description: props.description || ''
  }

  const [inputs, setInputs] = useState(initInputs)
  const { editIssue, submitBtnRedirect, addIssue } = useContext(UserContext)
  const { editToggle, toggle } = props
  const { title, description } = inputs

  function handleChange(e) {
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    editToggle ? 
    editIssue(inputs, props._id) :
    addIssue(inputs, props._id)
    setInputs(initInputs)
    toggle()
    submitBtnRedirect()
  }


  return (
    <form onSubmit={handleSubmit}>
      <input 
        type='text'
        name='title'
        value={title}
        onChange={handleChange}
        placeholder='Title'
      />
      <input 
        type='text'
        name='description'
        value={description}
        onChange={handleChange}
        placeholder='Description'
      />
      <button>Submit Issue</button>
    </form>
  )
}