import axios from 'axios'
import { useEffect } from 'react'
// https://api.github.com/users/:username

const SearchUsers = () => {

  const getResults = async()=>{
    try {
      const data = await axios.get('https://api.github.com/users/dimachilaia')
     
      console.log(data.data)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(()=>{
    getResults()
  },[])
  return (
    <div>
      
    </div>
  )
}

export default SearchUsers