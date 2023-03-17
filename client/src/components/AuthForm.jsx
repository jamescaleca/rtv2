import React from 'react'
import '../css/styles.css'

export default function AuthForm(props) {
  const {
    handleChange,
    handleSubmit,
    btnText,
    errMsg,
    inputs: {
      username,
      password
    }
  } = props

  return (
    <form id='auth-form' onSubmit={handleSubmit}>
      <input 
        type='text'
        value={username}
        name='username'
        onChange={handleChange}
        placeholder='Username'
      />
      <input 
        type='password'
        value={password}
        name='password'
        onChange={handleChange}
        placeholder='Password'
      />
      <button>{ btnText }</button>
      <p style={{color: 'red'}}>{ errMsg }</p>
    </form>
  )
}