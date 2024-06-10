import React from 'react'
import { FaFacebookF , FaInstagram ,FaLinkedin} from "react-icons/fa";
import "../App.css"
export default function Category() {
  return (
    <>
      <section className='my-5'>
      <div className='container'>
      <div className="row">
        <div className="col-lg-12">
          <div className="sec-title text-center mb-5">
            <p className="sec-sub-title mb-3">Our Team</p>
            <h2 className="h2-title">Meet our Chefs</h2>
           
          </div>
        </div>
      </div>
<div className='row'>
<div className='col-lg-4 col-md-6 col-sm-6 swiper-slide'>
<div className="team-box text-center">
              <div
                
                className="team-img back-img"></div>
              <h3 className="h3-title">Nilay Hirpara</h3>
              <div className="social-icon">
              <ul>
                  <li>
                    <a href="#">
                    <FaFacebookF />

                    </a>
                  </li>
                  <li>
                    <a href="#">
                    <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                    <FaLinkedin />

                    </a>
                  </li>
                </ul>
              </div>
            </div>
</div>
<div className='col-lg-4 col-md-6 col-sm-6 swiper-slide'>
 <div className="team-box text-center">
              <div
                // style={{ backgroundImage: "image/c3.jpg" }}
                className="team-img bak-img"
              ></div>
              <h3 className="h3-title">Ravi Kumawat</h3>
              <div className="social-icon">
              <ul>
                  <li>
                    <a href="#">
                    <FaFacebookF />

                    </a>
                  </li>
                  <li>
                    <a href="#">
                    <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                    <FaLinkedin />

                    </a>
                  </li>
                </ul>
              </div>
            </div>
</div>
<div className='col-lg-4 col-md-6 col-sm-6 swiper-slide' >
<div className="team-box text-center">
              <div
               
                className="team-img ba-img"
              ></div>
              <h3 className="h3-title">Navnit Kumar</h3>
              <div className="social-icon">
                <ul>
                  <li>
                    <a href="#">
                    <FaFacebookF />

                    </a>
                  </li>
                  <li>
                    <a href="#">
                    <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                    <FaLinkedin />

                    </a>
                  </li>
                </ul>
              </div>
            </div>
</div>

</div>
      </div>
     </section>
    
    
    
    </>
  )
}
