// useFetch.js
import { useState, useEffect } from 'react'
// npm i axios
import axios from 'axios'

// custom hook for performing GET request
const useFetch = (url, initialValue) => {
  const [data, setData] = useState(initialValue)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const fetchData = async function () {
      try {
        setLoading(true)
        const response = await axios.get(url)
        if (response.status === 200) {
          setData(response.data)
        }
      } catch (error) {
        throw error
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [url])
  return { loading, data }
}

/* 
  import useFetch from "./useFetch"

  const API = "https://justanyrandomapi.com/posts/"

  const { loading, data } = useFetch(API)
*/

export { useFetch }
