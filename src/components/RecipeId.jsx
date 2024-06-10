import { useEffect, useState } from 'react'
import '../App.css'

import { useParams ,Link } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import Slide from './Slide'
export default function RecipeId() {
 




  const {idMeal} = useParams()
  const [data, setData] = useState([])
  const [active, setActive] = useState('ingredient')
  useEffect(() => {
  
    const fetchData = async () => {
      const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
      const data = await api.json();

      // console.log(data.meals);
      setData(data.meals[0])
      console.log(data)
    }

    fetchData();
  }, [idMeal])

  return (
    <>
    
    <div className='container mt-5'>
    <h1 className='text-center mb-5'>{data.strMeal}</h1>
      <div className='row'>
        <div className='col-lg-6'>
<img src={data.strMealThumb} alt="" className='w-100 rounded-3 my-3'/>
        </div>
        <div className='col-lg-6  mt-5'>
        <button className="button mx-2 mb-3" >
  <span className="button-content "> Ingredient</span>
</button>
<button className="button" >
  <span className="button-content">Ingredient </span>
</button>
  
<p className='mt-3 h1'>{data.strIngredient1} - {data.strMeasure1}</p>
<p>{data.strIngredient2} - {data.strMeasure2}</p>
<p>{data.strIngredient3} - {data.strMeasure3}</p>

        </div>

      </div>

    </div>
    
    <Slide/>
    </>
  )
}
