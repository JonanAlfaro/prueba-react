import React from 'react'
import AppBar from '../component/appBar'
import '../styles/home.sass'
import useFetch from '../component/UseFetch'
import List from '../component/list/index'


const Home = () => {
    const [data, loading] = useFetch({url: 'https://reqres.in/api/users?delay=4'})
    const { data: listUser=[] } = data
    return ( 
        <div>
            <AppBar/>
            <div className="container-home">
            <List data={ listUser } loading={loading} />
            </div>
        </div>
    )
}


export default Home;