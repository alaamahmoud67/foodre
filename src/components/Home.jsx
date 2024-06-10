import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Header from './Header'
import RecipeCard from './RecipeCard'
import { FaFacebookF , FaInstagram ,FaLinkedin} from "react-icons/fa";
import '../App.css'
import Aos from 'aos'
import Footer from './Footer';
import Contact from './Contact';
import Category from './Category';
export default function Home() {
  
  
  return (
    <>
   
   <section className='container-xxl py-5  hero-header mb-5' >
    <div className='container my-5 py-5 '>

    <div className="row align-items-center g-5">
  <div className="col-lg-6 text-center text-lg-start" >
    <h1 className="display-3 text-black "data-aos="fade-up">
    Fresh & Healthy Meal Plan <span className='span'>Delivery</span> <br />in Miami
    </h1>
    <p className="text-black  mb-4 pb-2"data-aos="fade-up" data-aos-delay="300">
    Delicious Meals Delivered <br /> to Your Door From $132.95 per week
    </p>
    <Link to="/RecipeCard">
  <button className="button" data-aos="fade-up" data-aos-delay="300">
  <span className="button-content">menu </span>
</button>
  </Link>
  </div>
  <div className="col-lg-6 text-center text-lg-end overflow-hidden" data-aos="zoom-in" data-aos-delay="500" >
    <img className="img-fluid" src="image/hero-BCogpiE1.png" alt="" />
  </div>
</div>


    </div>
 
   </section>
   {/* section2 */}
   <section className='pb-5' >
   <div className='container position-relative'>
<div className='text-center m-lg-4 mt-0   z-3'data-aos="fade-up" data-aos-delay="300">
<h3 className='text-center m-lg-4 mt-0  '>Taste the Healthy Difference</h3>

</div>
<div className='p pp' data-aos="fade-right">
<img src="image/leaf-C1v4Wmxv.png" alt="" className='w-50' />
</div>
<div className='p' style={{right:" 0"}} data-aos="fade-up">
<img src="image/lemon-B-yhuoNo.png" alt="" className='w-75' />
</div>
<div className='row'>
<div className='col-lg-12 mt-5 z-2 '>
<p className=''data-aos="fade-up" data-aos-delay="300">We know that <span className='co'>time</span> is the greatest value in the modern <br /> world.Our healthy meal plan delivery service Good Food in <br /> Miami is the answer for those who want to eat healthily, saving <br /> time for buying food and preparing delicious, healthy meals.</p>

</div>
<div className='col-lg-12 ml-auto mt-5 position-relative z-3'>
  <div className='z-3'>
  <p className='text 'data-aos="fade-up" data-aos-delay="300">We know that <span className='co'>time</span> is the greatest value in the modern <br /> world.Our healthy meal plan delivery service Good Food in <br /> Miami is the answer for those who want to eat healthily, saving <br /> time for buying food and preparing delicious, healthy meals.</p>

  </div>
<div className='p pp'style={{left:"40%"}} data-aos="fade-left">
<img src="image/kiwi-Do64hCSg.png" alt="" className='w-75' />
</div>
</div>
</div>


<div className='text-center mt-3 mb-3 z-3 position-relative'>
  <Link to="/RecipeCard">
  <button className="button"data-aos="fade-up" data-aos-delay="300">
  <span className="button-content">menu </span>
</button>
  </Link>

<div className='p  pp'data-aos="fade-left">
<img src="image/tomato-BArVx_-y.png" alt="" className='w-50' />
</div>
<div className='p pp' style={{right:" 0" }}>
<img src="image/apple-B3cOfIDT.png" alt="" className='w-50' />
</div>
</div>

   </div>
   </section>
  

     <RecipeCard/>

<Category/>
     {/*  */}
   
    
  <Contact/>


<>

  {/* ./Footer */}
</>

    </>
  )
}
