
import React from 'react'
import './styles.sass'
const AppBar = () => {
    return ( 
        <div className="header">
        <p className="logo">Done</p>
            <ul className="menu">
            <a href="/home">Home</a>
            <a href="/album">Album</a>
            <a href="/logout">Logout</a>
            <label  className="hide-menu-btn">
                <i className="fas fa-times"></i>
            </label>
            </ul>
            </div>
    )
}

export default AppBar