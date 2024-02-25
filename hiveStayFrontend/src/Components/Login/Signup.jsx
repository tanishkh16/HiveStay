import React from 'react'
import { Link } from 'react-router-dom'
import { FaGoogle } from "react-icons/fa";

export default function Signup() {
  const backgroundImageStyle = {
    backgroundImage: "url('https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')",
  };
  return (
    <html>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      <link rel="apple-touch-icon" sizes="76x76" href="../assets/img/apple-icon.png" />
      <link rel="icon" type="image/png" href="../assets/img/favicon.png" />
      <title>Material Dashboard 2 by Creative Tim</title>
      <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700" />
      <link href="../assets/css/nucleo-icons.css" rel="stylesheet" />
      <link href="../assets/css/nucleo-svg.css" rel="stylesheet" />
      <script src="https://kit.fontawesome.com/42d5adcbca.js" crossorigin="anonymous"></script>
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet" />
      <link id="pagestyle" href="../assets/css/material-dashboard.css?v=3.1.0" rel="stylesheet" />
      <script defer data-site="YOUR_DOMAIN_HERE" src="https://api.nepcha.com/js/nepcha-analytics.js"></script>
    </head>
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
      <input type="number" placeholder="Last Name" className="form-control ml-2" style={{ marginLeft: '10px' }} />
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
