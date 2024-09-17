import React from 'react'
import { useWeather } from '../Context/Weather'


const SearchBar = (props) => {
    const weather = useWeather();
console.log("weather" , weather)
  return (
   
        <input  className='input-field' placeholder={props.placeholder} value={props.value} onChange={props.onChange} />

  )
}

export default SearchBar