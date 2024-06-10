

import React from 'react'
import { useParams ,Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Header from './Header';

export default function SearchBar() {
    const {searchTerm} = useParams();

    
    const [data, setData] = useState([])
    useEffect(() => {
  
        const fetchData = async () => {
          const api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
          const data = await api.json();
    
          // console.log(data.meals);
          setData(data.meals)
          // console.log(data)
        }
    
        fetchData();
      }, [searchTerm])
  return (
    <>
    <Header/>
  {
    data.map((d)=>{
        return(
            <Link to={`/${d.idMeal}`} className='link'>
            <div style={{textAlign:'center'}}>
                <div className="img">
                    <img src={d.strMealThumb} alt="" style={{width:'13rem'}} />
                </div>
                 <h3>{d.strMeal}</h3>
            </div>
            </Link>
        )
    })
 }
    
    
    </>
  )
}
