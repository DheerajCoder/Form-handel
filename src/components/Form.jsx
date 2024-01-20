import React from 'react'
import { useState } from 'react'

function Form() {
    let [name,setName]=useState('')
    let [email,setEmail]=useState('')
    let [mess,setmess]=useState('')




    function handelSubmit(e) {
        e.preventDefault();
        setmess(`Hello ${name} your email is ${email}`)
        

        console.log(e);
        

    }
    

  return (
    <>

<div className="contact-us">
            <h1>CONTACT US</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis cumque, adipisci eius enim architecto minima quidem natus officiis sunt quia.</p>
        </div>

    <div className="form">
        <div className="form-page">
            <div className="form-text">
                <div className="buttons">
                    <button>Via Support Chat</button>
                    <button>Via call</button>
                </div>
                <div className="full-button">
                    <button>Via Email Info</button>

                </div>

                <form onSubmit={handelSubmit}>
                    <input 
                    type="text" 
                    value={name}
                    onChange={(e)=>{
                        setName(e.target.value)
                    }}
                    
                    placeholder='Enter your Name'/>
                    <input type="email" 
                    value={email}
                    onChange={(e)=>{
                        setEmail(e.target.value)
                    }}
                    placeholder='Ente you Email' />
                  <textarea name="" 
                
                  
                  id="" cols="" rows="5" placeholder='Enter The Mseesage'></textarea>
                  <button type='submit'   >Submit</button>
                  <h4>{mess}</h4>
                </form>
            </div>

            
        </div>
        <div className="form-img">
                <img src="images/contact.svg" alt=""  />
            </div>

        

    </div>
    
    </>
  )
}

export default Form