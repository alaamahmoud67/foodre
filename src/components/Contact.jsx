import React from 'react'
import { useState ,useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import img8 from '../image/about-banner.png';
export default function Contact() {
    const[user, setUser] = useState(
        {
            Name:'',surname:'' , email:'', subject: '', Message: ''
        }
    )
    let values, names
    const data = (e) => 
    {
        values = e.target.value
        names = e.target.name
        setUser({...user, [names]: values})
    }

    // const send = async (e) => 
    // {
    //     const {Name,surname, email, subject, Message} = user
    //     e.preventDefault()
    //     const option = {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'aplication/json'
    //         },
    //         body: JSON.stringify({
    //             Name,surname, email, subject, Message
    //         })
    //     }
    //     const send = await fetch(
    //         'https://react-ecommerce-contact-c7035-default-rtdb.firebaseio.com/', option
    //         )

    //     if (send) {
    //         alert("Message Sent")
    //     }
    //     else
    //     {
    //         alert("Error Occoured Message Sent failed")
    //     }

    // }

    const send = async (e) => 
    {
        const {Name,surname, email, subject, Message} = user
        e.preventDefault()
        const option = {
            method: 'POST',
            headers: {
                'Content-Type': 'aplication/json'
            },
            body: JSON.stringify({
                Name,surname ,email, subject, Message
            })
        }

        const send = await fetch(
            'https://react-ecommerce-contact-c7035-default-rtdb.firebaseio.com/Message.json', option
            )

        if (send) {
            alert("Message Sent")
        }
        else
        {
            alert("Error Occoured Message Sent failed")
        }

    }





  return (
    <>
    
    {/* <div class="container my-5">
  <div class="row justify-content-center">
    <div class="col-lg-9">
      <h1 class="mb-3">Contact Us</h1>
      <form method='POST'>
        <div class="row g-3">
          <div class="col-md-6">
            <label for="your-name" class="form-label">Your Name</label>
            <input type="text" class="form-control" id="your-name" name="Name" value={user.Name}  onChange={data} required  />
          </div>
          <div class="col-md-6">
            <label for="your-surname" class="form-label">Your Surname</label>
            <input type="text" class="form-control" id="your-surname" value={user.surname} name="surname"onChange={data} required />
          </div>
          <div class="col-md-6">
            <label for="your-email" class="form-label">Your Email</label>
            <input type="email" value={user.email} class="form-control" name='email' onChange={data} required />
        
          </div>
          <div class="col-md-6">
            <label for="your-subject" class="form-label">Your Subject</label>
            <input type="text" class="form-control" id="your-subject" value={user.subject} onChange={data} name="subject" />
          </div>
          <div class="col-12">
            <label for="your-message" class="form-label">Your Message</label>
            <textarea class="form-control" id="your-message"  value={user.Message} name='Message' onChange={data}   rows="5" required></textarea>
          </div>
          <div class="col-12">
            <div class="row">
              <div class="col-md-6">
                <button data-res="<?php echo $sum; ?>" type="submit" class="btn btn-dark w-100 fw-bold" onClick={send}>Send</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</div> */}
<div className='container my-5'>
<div className="row">
        <div className="col-lg-6">
          <div className="card-shadow">
            <img
              src={img8}
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-lg-6">
          <div className="contact-box ml-3">
            <h1 className="font-weight-light mt-2">Quick Contact</h1>
            <form className="mt-4">
              <div className="row">
                <div className="col-lg-12">
                  <div className="form-group mt-2">
                    <input
                      className="form-control"
                      type="text"
                      placeholder="name"
                      name="Name" value={user.Name}  onChange={data}
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="form-group mt-2">
                    <input
                      className="form-control"
                      type="email"
                      placeholder="email address"
                      value={user.email} name='email'  onChange={data}
                    />
                  </div>
                </div>
               
                <div className="col-lg-12">
                  <div className="form-group mt-2">
                    <textarea
                      className="form-control"
                      rows={3}
                      placeholder="message"
                      defaultValue={""}
                      value={user.Message} name='Message' onChange={data} 
                    />
                  </div>
                </div>
                <div className="col-lg-12">
                  <button
                    type="submit"
                    className="btn btn-danger mt-3 text-white border-0 px-3 py-2"
                    onClick={send}
                  >
                    <span> SUBMIT</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
       
        
      </div>
</div>

    
    
    
    
    
    
    
    
    
    </>
  )
}
