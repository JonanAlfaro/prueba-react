import { PropTypes } from 'prop-types';
import {useEffect,useState} from 'react'

const useFetch = ({url}) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect( () => {
        const fetchData = async ()=>{
            const response = await fetch(url)
            const json = await response.json()
            setData(json)
            setLoading(false)
        }
        fetchData()
    }, [url])
    return [data, loading]
    }

useFetch.propTypes = {
    url: PropTypes.string.isRequired
}
export default useFetch 