import React, { useEffect, useState } from 'react'
import '../CSS/style.css'

const TampApp = () => {
    const[city,setCity] = useState(null);
    const[search,setSearch]=useState("Cuttack");
useEffect(()=>{
    const fetchApi = async()=>{
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=32034491fd50360cc375a8252a7d3549`;
        const response = await fetch(url);
        // console.log(response);
        const resJson = await response.json();
        console.log(resJson);
        setCity(resJson.main);
        
       }
    fetchApi();
},[search])
  return (
    <>
    <div className='box'>
        <div className='inputData'>
            <input type='search'
             onChange={(e)=>{setSearch(e.target.value)}}
            className='inputFild'
            />
            {/* <i className="fa-solid fa-magnifying-glass"></i> */}
        </div>
      {
        city == null ?(
            <p id="InvalidMassage">No data found</p>
        ):(
            
        <div className='info'>
            <h1 className='location'>
            <i className="fa-solid fa-street-view"></i>
            {search}
            </h1>
            <h3 className='tamp'>
            Temp: {city.temp}°C
       
            </h3>
            <h4 className=''>
           Feels Like :{city.feels_like}°C
           
            </h4>
            <p className='tammin_max'>
                Min : {city.temp_min}°C  | Max : {city.temp_max}°C
            </p>
        </div>
       )
     }
    
       <div className='wave-one'>
        
       </div>
       <div className='wave-two'>

       </div>
       <div className='wave-three'>

       </div>
     </div>  
    </>
  )
}

export default TampApp;