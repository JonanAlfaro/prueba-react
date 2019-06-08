import React, { useCallback, useState  } from 'react'
import AppBar from '../component/appBar'
import '../styles/home.sass'
import useFetch from '../component/UseFetch'
import List from '../component/list/index'
import SideBar from '../component/sideBar/index'


const Home = () => {
    const [itemSelect,setItemSelect] = useState({
        email:"",
        first_name:"",
        last_name:"",
        avatar:""
    })
    const onClickUser = useCallback(({email,first_name,last_name,avatar})=>{
        setItemSelect({email,first_name,last_name,avatar})
        document.getElementById('sidebar').style.border='1px solid rgba(0,0,0,0.5)'
        document.getElementById('sidebar').style.width='32%'
    },[])
    const [data, loading] = useFetch({url: 'https://reqres.in/api/users?delay=4'})
    const { data: listUser=[] } = data
    return ( 
        <div>
            <AppBar/>
            <div className="container-home">
            <List onClickItem={onClickUser} data={ listUser } loading={loading} />
            <SideBar data={ itemSelect }/>
            </div>
        </div>
    )
}


export default Home;