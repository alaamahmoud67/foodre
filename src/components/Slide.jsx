import React from 'react'
import { useEffect, useState } from 'react'
import { GrFormView } from "react-icons/gr";

import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import '../App.css'
export default function Slide() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

      const [data, setData] = useState([])

      useEffect(() => {
    
        const fetchData = async () => {
          const api = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian")
          const data = await api.json();
    
          // console.log(data.meals);
          setData(data.meals)
        }
    
        fetchData();
      }, [])
  return (
    <>
    <div className='container my-5'>
    <div className='row'>
  
    <Slider {...settings}>
    
    {data.map((d) => {
         return (
            
           <Link to={`/${d.idMeal}`} key={d.idMeal}>
           <div className='slider2'>
           <img src={d.strMealThumb} alt="" className='img-fluid' />
           <div className='slide'>
           <GrFormView className='fs-3 text-white mt-5' />
           </div>
           </div>
           </Link>
         )
       })} 
  </Slider>
</div>
    </div>
   
    </>
  )
}
