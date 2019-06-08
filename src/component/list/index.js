import React from 'react'
import PropTypes from 'prop-types'
import Card from '../card/index'
import './styles.sass'

const List = ({
    data=[],
    loading,
    onClickItem
}) => {
    return ( 
        <div className="container-list slideshow ">
                {
                    data.map(item=>{
                        return(
                            <Card key={item.id}
                                onClick={ onClickItem }
                                avatar={item.avatar}  
                                email={item.email}
                                first_name={item.first_name}
                                last_name={item.last_name} 
                            />
                        )
                    })
                }
        </div>
    )
}

List.propTypes = {
    data: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    onClickItem: PropTypes.func.isRequired
}

export default List; 