import React from 'react'
import {  Form, Icon } from 'semantic-ui-react'
import "./RegisterForm.scss"

export function RegisterForm(props) {
  const {openLogin, goBack} = props;

  return (
    <div className='register-form'>
      <h1>Empieza a escuchar con una cuenta de Musicfy gratis</h1>
      <Form>
        <Form.Input placeholder="Correo electrónico" icon="mail outline" type="text" />
        <Form.Input placeholder="Contraseña" icon={<Icon name='eye' link onClick={()=>console.log("show password")} />} type="password" />
        <Form.Input placeholder="Como deberiamos llamarte?" icon="user circle outline" type="text" />
        <Form.Button  primary fluid type="submit">Continuar</Form.Button>


      </Form>
      <div className='register-form__options'>
        <p onClick={goBack}>Volver</p>
        <p>Ya tienes Musicfy? <span onClick={openLogin}>Iniciar sesión</span></p>

      </div>
    </div>
  )
}
