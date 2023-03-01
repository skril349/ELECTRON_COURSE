import React from 'react'
import { Button } from 'semantic-ui-react'
export function AuthOptions(props) {

  const {openLogin, openRegister} = props;
  return (
    <div style={{backgroundColor:'#000'}}>
      <h1>AuthOptions</h1>
      <Button primary onClick={openRegister}>Registro</Button>
      <Button secondary onClick={openLogin}>Login</Button>
    </div>
  )
}
