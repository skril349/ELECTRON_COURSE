import React from 'react'
import { Button } from 'semantic-ui-react'
export function LoginForm(props) {
  const {openRegister, goBack} = props;

  return (
    <div style={{backgroundColor:'#f0f'}}>
      <h1>Login Form</h1>
      <Button primary onClick={openRegister}>Registro</Button>
      <Button secondary onClick={goBack}>Atras</Button>
    </div>
  )
}
