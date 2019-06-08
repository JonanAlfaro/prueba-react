import React from "react";
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect
    } from "react-router-dom";
import Login from './container/login'
import Home from  './container/home'
import Album from './container/album'
import Logout from './container/logout'



const checkAuth = () => {
    const token = localStorage.getItem('token')
    const refreshToken = localStorage.getItem('token')
    if(!token || !refreshToken){
        return false
    }
    return true
}

const PrivateRoute  = ({ component: Component, ...rest }) => {
    return ( 
        <Route
        {...rest}
        render={props =>
            checkAuth() ? (
            <Component {...props} />
            ) : (
            <Redirect
                to={{
                pathname: "/login",
                state: { from: props.location }
                }}
            />
            )
        }
        />
        );
}




const AppRoute = () => {
    return (
    <BrowserRouter>
            <Switch>
                <Route path="/login" component={Login} />
                <PrivateRoute exact path="/home" component={Home} />
                <PrivateRoute exact path="/album" component={Album} />
                <Route exact path="/logout" component={Logout} />
            </Switch>
    </BrowserRouter>
    );
}

export default AppRoute;
