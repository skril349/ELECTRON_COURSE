import React, {useState} from 'react'
import { Form, Icon } from 'semantic-ui-react'
import "./LoginForm.scss"
import { useFormik } from 'formik';
import { initialValues, validationSchema } from './LoginForm.data';
import { Auth } from '../../api';

const auth = new Auth();

export function LoginForm(props) {
  const {openRegister, goBack} = props;
  const [showPassword, setShowPassword] = useState(false)
  const onShowHiddenPassword = ()=>setShowPassword((prevState)=>!prevState)

  const formik = useFormik({
    initialValues:initialValues(),
    validationSchema:validationSchema(),
    validateOnChange:false,
    onSubmit:async (formValue)=>{
      try {
        await auth.login( formValue.email, formValue.password)
      } catch (error) {
        
      }
    }
  });

  return (
    <div className='login-form'>
      <h1>Musica para todos</h1>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Input name="email" type='text' placeholder="Correo electrónico" icon="mail outline" onChange={formik.handleChange} value={formik.values.email} error={formik.errors.email}/>
        <Form.Input name="password" placeholder="Contraseña" icon={<Icon name={showPassword?"eye slash":"eye"} link onClick={onShowHiddenPassword} />} type={showPassword?"text":"password"}  onChange={formik.handleChange} value={formik.values.password} error={formik.errors.password} />
        <Form.Button  primary fluid type="submit" loading={formik.isSubmitting}>Iniciar sesión</Form.Button>

      </Form>

      <div className='login-form__options'>
        <p onClick={goBack}>Volver</p>
        <p>No tienes cuenta? <span onClick={openRegister}>Registarse</span></p>

      </div>
    </div>
  )
}
