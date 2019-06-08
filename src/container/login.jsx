import React,{ useCallback } from 'react'
import {Formik, Field } from 'formik'
import PropTypes from 'prop-types';
import loginValidation from '../shemas/login'
import "../styles/login.sass"

const Login = ({ history }) => {

    const onClickSignIn = useCallback( async (values)=>{
            const response  = await fetch('https://reqres.in/api/login', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                    }})
                const { token } = await response.json()
                if(token){
                    localStorage.setItem('token',token)
                    history.push('/home')
                }
                if(!token){
                    alert("Favor revisar el email y password")
                }
    },[history])
    return (     
        <div className="layout">
            <div className="container">
                <div className="login-form">
                <label className="login-title">Sign in</label>
                        <label className="login-detail"><p>Lorem ipsum dolor sit amet, In ac nisi sit amet lectus egestas sagittis.</p></label>
                    <Formik
                        initialValues={ loginValidation.default() }
                        validationSchema={ loginValidation }
                        onSubmit={ onClickSignIn }
                    >
                        { ({handleSubmit}) =>  (
                                <>
                                <Field
                                    name="email"
                                    render={({ field,  form: { touched, errors } }) => (
                                        <div className="input-container">
                                        <input type="email" {...field} placeholder="Email" className="input-text"/>
                                        { touched[field.name] &&
                                        errors[field.name] && <span className="error-input">{errors[field.name]}</span>}
                                        </div>
                                    )}
                                />

                                <Field
                                    name="password"
                                    render={({ field,  form: { touched, errors } }) => (
                                        <div className="input-container">
                                        <input type="password" {...field}  placeholder="Password" className="input-text"/>
                                        { touched[field.name] &&
                                        errors[field.name] && <span className="error-input">{errors[field.name]}</span>}
                                        </div>
                                    )}
                                />
                                    <button type="button" className="button-signin" onClick={ handleSubmit }>Sign in</button>
                                </>
                            )
                        } 
                    </Formik>
                </div>
            </div>
        </div>
            );
}

Login.propTypes = {
    history: PropTypes.object.isRequired
}

export default Login;