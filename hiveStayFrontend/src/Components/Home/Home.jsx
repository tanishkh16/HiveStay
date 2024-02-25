import React from "react";
import { useState } from "react";
import "../../assets/css/material-dashboard.css";
import "../../assets/css/material-dashboard.min.css";
import "../../assets/css/nucleo-icons.css";
import { IoMdNotifications } from "react-icons/io";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";

export default function Home() {
  const [tweets, setTweets] = useState([]);
  const [tweet, setTweet] = useState('');

  const handleChange = (e) => {
    setTweet(e.target.value);
  };

  const handlePost = () => {
    if (tweet.trim() !== '') {
      setTweets([...tweets, tweet]);
      setTweet('');
    }
  };
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
            {card.map((item,index)=>{
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
          <div class="row mt-4"></div>
          <div class="row mb-4">
            <div class="col-lg-8 col-md-6 mb-md-0 mb-4">
              <div class="card">
                <div class="card-header pb-0">
                  <div class="row">
                  <div className=" min-h-screen">
      <div className="container mx-auto py-8">
    
        <div className="max-w-md mx-auto  -mt-24">
          <h1></h1>
          <textarea
            className="w-full h-32 p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Write your tweet..."
            value={tweet}
            onChange={handleChange}
          ></textarea>
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md mt-2"
            onClick={handlePost}
          >
            Post
          </button>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Recent Tweets</h2>
          <div>
            {tweets.map((tweet, index) => (
              <div key={index} className="bg-white rounded-md p-4 mb-2">
                {tweet}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
                  </div>
                </div>
                <div class="card-body px-0 pb-2"></div>
              </div>
            </div>
          </div>
          <footer class="footer py-4  ">
            <div class="container-fluid">
              <div class="row align-items-center justify-content-lg-between">
                <div class="col-lg-6 mb-lg-0 mb-4">
                  <div class="copyright text-center text-sm text-muted text-lg-start">
                    © <script>document.write(new Date().getFullYear())</script>,
                    made with <i class="fa fa-heart"></i> by
                    <a
                      href="https://www.creative-tim.com"
                      class="font-weight-bold"
                      target="_blank"
                    >
                      Creative Tim
                    </a>
                    for a better web.
                  </div>
                </div>
                <div class="col-lg-6">
                  <ul class="nav nav-footer justify-content-center justify-content-lg-end">
                    <li class="nav-item">
                      <a
                        href="https://www.creative-tim.com"
                        class="nav-link text-muted"
                        target="_blank"
                      >
                        Creative Tim
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        href="https://www.creative-tim.com/presentation"
                        class="nav-link text-muted"
                        target="_blank"
                      >
                        About Us
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        href="https://www.creative-tim.com/blog"
                        class="nav-link text-muted"
                        target="_blank"
                      >
                        Blog
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        href="https://www.creative-tim.com/license"
                        class="nav-link pe-0 text-muted"
                        target="_blank"
                      >
                        License
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
