import React from 'react'
import PropTypes from 'prop-types'
import './styles.sass'

const Card = ({
    email,
    first_name,
    last_name,
    avatar,
    onClick
}) => {
    return ( 
    <div onClick={ onClick } className="container-card">
        <img className="profile-picture" src={avatar} alt={first_name}/>
        <span className="title-card">{first_name} {last_name}</span>
        <span className="detail-card">{email}</span>
    </div>
)
}

Card.propTypes = {
    onClick: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    first_name: PropTypes.string.isRequired,
    last_name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
}

export default Card