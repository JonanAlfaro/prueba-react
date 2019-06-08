import { string, object } from 'yup';

const LoginValidtion = object({
    email: string()
        .lowercase()
        .email("Email Incorrecto")
        .trim()
        .default('')
        .required('Email Requerido'),
    password: string()
        .trim()
        .default('')
        .required('Password Requerido')
})

export default LoginValidtion