import React, { useEffect } from "react";
import { useState } from "react";
import "../../assets/css/material-dashboard.css";
import "../../assets/css/material-dashboard.min.css";
import "../../assets/css/nucleo-icons.css";
import { IoMdNotifications } from "react-icons/io";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";

import {  useSelector } from "react-redux";

export default function Home() {
  const user = useSelector((state) => state.auth.user);
  console.log("from home",user?.email);
  
    if(user?.email==="warden@iiitu.ac.in"){
      console.log("warden")
    }
    else{
      console.log("student")
    }

 






 
  const card=[
    {icon:"message", message:"Total Message",number:"$53k",percentage:"+55% than last week"},
    {icon:"person",message:"Total Users",number:"2,300",percentage:"+3% than last month"},
    {icon:"person",message:"Total Complains",number:"3,462",percentage:"-2% than yesterday"},
    {icon:"message",message:"Attendance",number:"$103,430",percentage:"+5% than yesterday"}
  ]
  
  return (
    <div className="g-sidenav-show bg-gray-200 ">
      <Layout title="Dashboard"/>
      <main class="main-content position-relative max-height-vh-100 h-100 border-radius-lg lg:ml-72 ">
        <div class="container-fluid py-4">
          <div class="row">
          {user?.email === "warden@iiitu.ac.in" && card.map((item,index)=>{
  return(
    <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
      <div class="card">
        <div class="card-header p-3 pt-2">
          <div class="icon icon-lg icon-shape bg-pink-600 shadow-dark text-center border-radius-xl mt-n4 position-absolute">
            <i class="material-icons opacity-10">{item.icon}</i>
          </div>
          <div class="text-end pt-1">
            <p class="text-sm mb-0 text-capitalize">{item.message}</p>
            <h4 class="mb-0">{item.number}</h4>
          </div>
        </div>
        <hr class="dark horizontal my-0" />
        <div class="card-footer p-3">
        </div>
      </div>
    </div>
  )
})}

           
          </div>
          <div class="row mt-2 "></div>
          <div class="row ">
            <div class="col-lg-8 col-md-6 mb-md-0 mb-4">
              <div class="card">
                <div class="card-header pb-0">
                  <div class="row">
                  <div className=" min-h-screen">
      <div className="container mx-auto py-8">
    
      
       
      </div>
    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </main>
    </div>
  );
}
