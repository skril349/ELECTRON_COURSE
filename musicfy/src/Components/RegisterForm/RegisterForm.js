import React from 'react'
import { Button } from 'semantic-ui-react'
export function RegisterForm(props) {
  const {openLogin, goBack} = props;

  return (
    <div style={{backgroundColor:'#f00'}}>
      <h1>Register Frm</h1>
      <Button primary onClick={openLogin}>Login</Button>
      <Button secondary onClick={goBack}>Atras</Button>
    </div>
  )
}
