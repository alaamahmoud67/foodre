import React, { useEffect, useState } from 'react'
import { Link , useNavigate} from 'react-router-dom';
import { CiStar } from "react-icons/ci";
import { GrFormView } from "react-icons/gr";
import '../App.css'
const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";
export default function RecipeCard() {

  const [data, setData] = useState([])
  const [query, setQuery] = useState("");

  const fetchData = async () => {
    
    const url = searchApi + query
    const res = await fetch(url);
    const data = await res.json();
    setData(data.meals);
   
  };
  useEffect(() => {
    fetchData()
  }, []);
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchData();
  }

  // useEffect(() => {

  //   const fetchData = async () => {
  //     const api = await fetch("https://www.themealdb.com/api/json/v1/1/search.php?s")
  //     const apii =api+query
  //     const data = await api.json();

  //     console.log(data.meals);
  //     setData(data.meals)
  //   }

  //   fetchData();
  // }, [])

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   fetchData();
  // }
  return (
    <>
    <div className='container mt-5'>
    <div className="input-group mb-5">
            {/* <span className="border-warning input-group-text bg-warning text-white">
              <i className="fa-solid fa-magnifying-glass" />
            </span> */}
           <form className='d-flex w-100 mt-5' onSubmit={handleSubmit}>
           <input
            value={query}
            name="query"
              type="text"
              onChange={(event) => setQuery(event.target.value)}
              className="form-control "
              style={{ color: "#7a7a7a",  border:"solid rgb( 232 ,54 ,103, 1 ) 1px"}}
            />
            <button className="btn  text-white"  type="submit"  value="Search" style={{backgroundColor:"rgb( 232 ,54 ,103, 1 )"}}>Search</button>
           </form>
          </div>


      <div className='row'>
       
 {data.map((d) => {
         return (

          <div className="col-lg-4 col-sm-6 col-md-6 dish-box-wp breakfast" data-cat="breakfast">
          <div className="dish-box text-center">
              <div className="dist-img">
                 
<img src={d.strMealThumb} alt="" style={{width:"80%"}} className=''/>
              </div>
              <div className="dish-rating">
                  5
                  <CiStar style={{color:"rgb( 232 ,54 ,103, 1 )"}} />
              </div>
              <div className="dish-title">
                  <h3 className="h3-title">{d.strCategory}</h3>
                  <h3> {d.strMeal}</h3>
              </div>
              <div className="dish-info">
                  <ul>
                      <li>
                          <p>Type</p>
                          <b>Non Veg</b>
                      </li>
                      <li>
                          <p>Persons</p>
                          <b>2</b>
                      </li>
                  </ul>
              </div>
              <div className="dist-bottom-row">
  <ul>
    <li>
      <b>Rs. 499</b>
    </li>
    <li>
    <Link to={`/${d.idMeal}`} key={d.idMeal}>  
      <button className="dish-add-btn">
      <GrFormView className='fs-3' />
      </button>
</Link>                      

    </li>
  </ul>
</div>

          </div>
      </div>
        

             
 
            )
          })}
    
      </div>

    </div>
     
    
    
    </>
  )
}
