import React,{ useCallback } from 'react'
import PropTypes from 'prop-types'
import Card from '../card/index'
import './styles.sass'

const List = ({
    data=[],
    loading
}) => {
    const onClickUser = useCallback(()=>{
        console.log("Se seleciono el usuario")
    },[])
    return ( 
        <div className="container-list">
                {
                    data.map(item=>{
                        return(
                            <Card key={item.id}
                                onClick={onClickUser}
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
    loading: PropTypes.bool.isRequired
}

export default List; 