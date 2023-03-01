import React, {useState} from 'react'
import "./Auth.scss"
import { Button } from 'semantic-ui-react'
import {AuthOptions, RegisterForm, LoginForm} from "../../Components"

export function Auth() {

  const [typeForm, setTypeForm] = useState(null);

  const openLogin = () => setTypeForm("login")
  const openRegister = () => setTypeForm("register")
  const goBack = () => setTypeForm(null)


  const renderForm = () => {
    if(typeForm === "login"){
      return <LoginForm openRegister={openRegister} goBack={goBack}/>
    }
    if(typeForm === "register"){
      return <RegisterForm openLogin={openLogin} goBack={goBack}/>
    }

    return <AuthOptions openLogin={openLogin} openRegister={openRegister} />
  }
  return (
    <div>
          {renderForm()}
    </div>
  )
}
