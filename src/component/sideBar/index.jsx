import PropTypes  from 'prop-types'
import React , {useCallback} from 'react'
import './styles.sass'
import closeIcon from '../../assert/baseline_close_black_18dp.png'
import editIcon from '../../assert/baseline_edit_black_18dp.png'

const SideBar = ({
    data:{
        email="",
        first_name="",
        last_name="",
        avatar=""
    }
}) => {

    const closeSideBar = useCallback(()=>{
        document.getElementById("sidebar").style.border=null
        document.getElementById("sidebar").style.width= '0px'
    },[])
    return ( 
        <div id="sidebar" className="right-sidebar"> 
            <img className="close-icon" onClick={ closeSideBar } src={ closeIcon } alt="close"/>
            <div className="content"> 
                <div className="container-card-sidebar">
                    <img className="profile-picture" src={avatar} alt={first_name}/>
                    <span className="title-card">{first_name} {last_name} 
                    <img className="edit-icon" src={ editIcon } alt="edit"/></span>
                    <span className="detail-card">{email}
                    <img className="edit-icon" src={ editIcon } alt="edit"/></span>
                </div>
            </div> 
        </div>
    )
}

SideBar.propTypes = {
    data: PropTypes.shape({
        email: PropTypes.string,
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        avatar: PropTypes.string
    })
}

export default SideBar