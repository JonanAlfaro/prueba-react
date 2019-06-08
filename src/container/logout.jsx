import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from "react-router-dom"

const Logout = ({location}) => {
    useEffect(()=>{
        localStorage.removeItem('token')
    },[])
    return(
        <Redirect
        to={{
        pathname: "/login",
        state: { from: location }
        }}
    />
    )
}

Logout.propTypes ={
    location: PropTypes.object.isRequired
}

export default Logout;
