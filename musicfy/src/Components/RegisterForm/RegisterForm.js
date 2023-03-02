import React from 'react'
import {  Form, Icon } from 'semantic-ui-react'
import "./RegisterForm.scss"
import { useFormik } from 'formik';
import { initialValues, validationSchema } from './RegisterForm.data';

export function RegisterForm(props) {
  const {openLogin, goBack} = props;
  const formik = useFormik({
    initialValues:initialValues(),
    validationSchema:validationSchema(),
    validateOnChange:false,
    onSubmit:(formValue)=>{
      console.log("Registro OK ", formValue)
    }
  });


  return (
    <div className='register-form'>
      <h1>Empieza a escuchar con una cuenta de Musicfy gratis</h1>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Input name="email" placeholder="Correo electrónico" icon="mail outline" type="text" onChange={formik.handleChange} value={formik.values.email} error={formik.errors.email}/>
        <Form.Input name="password" placeholder="Contraseña" icon={<Icon name='eye' link onClick={()=>console.log("show password")} />} type="password"  onChange={formik.handleChange} value={formik.values.password} error={formik.errors.password} />
        <Form.Input name="username" placeholder="Como deberiamos llamarte?" icon="user circle outline" type="text"  onChange={formik.handleChange} value={formik.values.username} error={formik.errors.username}/>
        <Form.Button  primary fluid type="submit" loading={formik.isSubmitting}>Continuar</Form.Button>


      </Form>
      <div className='register-form__options'>
        <p onClick={goBack}>Volver</p>
        <p>Ya tienes Musicfy? <span onClick={openLogin}>Iniciar sesión</span></p>

      </div>
    </div>
  )
}
