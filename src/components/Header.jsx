import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import im2 from '../image/Frame.png'

export default function Header() {
  return (
    <>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
       
          <Link to="/">
          <img src={im2} height={50} alt="CoolBrand" />
          </Link>
       

        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarCollapse">
            <div className="navbar-nav ms-auto  ">
                <Link to="/" className='text-decoration-none '><a href="#" className="nav-item nav-link active">Home</a></Link>
                <Link to="/Contactus" className='text-decoration-none'><a href="#" className="nav-item nav-link active">Contact us</a></Link>

                {/* <a href="#" className="nav-item nav-link">Contact us</a>
                 */}


<Link to="/RecipeCard" className='text-decoration-none'><a href="#" className="nav-item nav-link active">Menu</a></Link>

<Link to="/Team" className='text-decoration-none'><a href="#" className="nav-item nav-link active">team</a></Link>

                

            </div>
           
        </div>
    </div>
</nav>



    
    
    
    
    </>
  )
}
