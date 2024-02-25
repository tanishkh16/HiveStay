import React from 'react'
import { Link } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";

export default function Signup() {
  const backgroundImageStyle = {
    backgroundImage: "url('https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')",
  };
  return (
    <html>
   
    <body class="bg-gray-200">
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-8">

      </div>
    </div>
  </div>
  <main class="main-content  mt-0">
    <div class="page-header align-items-start min-vh-100" style={backgroundImageStyle}>
      <span class="mask bg-gradient-dark opacity-6"></span> 
      <div class="container my-auto">
        <div class="row">
          <div class="col-lg-6 col-md-8 col-7 mx-auto">
            <div class="card z-index-0 fadeIn3 fadeInBottom">
              <div class="card-header p-0 position-relative mt-n4 mx-8 z-index-2">
                <div class="bg-gradient-primary shadow-primary border-radius-lg py-1 pe-1">
                  <h4 class="text-white font-weight-bolder text-xl text-center mt-2 mb-4">Sign Up</h4>
                  <div class="row mt-1">
                    
        
                  </div>
                </div>
              </div>
              <div class="card-body">
                <form role="form" class="text-start">
              
                <div className="input-group input-group-outline my-3">
      <input type="text" placeholder="First Name" className="form-control" />
      <input type="text" placeholder="Last Name" className="form-control ml-2" style={{ marginLeft: '10px' }} />
    </div>

    <div className="input-group input-group-outline my-3">
      <input type="email" placeholder="Email" className="form-control" />
      <input type="password" placeholder="Password" className="form-control ml-2" style={{ marginLeft: '10px' }} />
    </div>

    <div className="input-group input-group-outline my-3">
      <input type="Number" placeholder="Roll No." className="form-control" />
      <input type="Number" placeholder="Room No." className="form-control ml-2" style={{ marginLeft: '10px' }} />
    </div>
     <div className="input-group input-group-outline my-3">
      <input type="text" placeholder="Branch" className="form-control" />
      <input type="text" placeholder="Mess" className="form-control ml-2" style={{ marginLeft: '10px' }} />
    </div>
    <div className="input-group input-group-outline my-3">
      <input type="number" placeholder="Mobile No. " className="form-control" />
      <input type="number" placeholder="Parent's Mobile No." className="form-control ml-2" style={{ marginLeft: '10px' }} />
    </div>
    <div className="input-group input-group-outline my-3">
      <input type="text" placeholder="Address" className="form-control" />
      </div>

                
                  <div class="text-center">
                    <button type="button" class="bg-pink-600 h-10 rounded-lg hover:bg-pink-500 text-white w-100 my-4 mb-2">Sign Up</button>
                  </div>
                  <p class="mt-4 text-sm text-center">
                    Have Account?
                    <Link to="/login" class="text-primary text-gradient font-weight-bold">Login</Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
     
    </div>
  </main>
</body>
  </html>
  )
}
