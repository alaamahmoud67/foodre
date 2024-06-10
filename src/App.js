import axios from 'axios';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import logo from './logo.svg';
import { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar';
import RecipeCard from './components/RecipeCard';

import Category from './components/Category';
import RecipeId from './components/RecipeId';
import Home from './components/Home';
import Aos from 'aos';
import 'aos/dist/aos.css'
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  useEffect(() => {
    Aos.init({
      offset: 200,
      duration: 600,
      easing: 'ease-in-sine',
      delay: 100,
    });
    Aos.refresh();
  }, [])
 
  
   
 
  return (
    <> 
    <Router> 
      <Header/> 
    <Routes>

      <Route path='/' element={ <Home/>} />
      <Route path='/RecipeCard' element={ <RecipeCard />} />
      <Route path='/Contactus' element={ <Contact />} />

      <Route path='/:idMeal' element={ <RecipeId />} />
      <Route path='/Team' element={ <Category />} />
      <Route path='/search/:searchTerm' element={ <SearchBar/> } />
    </Routes>
    <Footer/>
  </Router>



 
    </>
  );
}

export default App;
