import React, { useEffect } from "react";
import { useState } from "react";
import "../../assets/css/material-dashboard.css";
import "../../assets/css/material-dashboard.min.css";
import "../../assets/css/nucleo-icons.css";
import { IoMdNotifications } from "react-icons/io";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import axios from "axios";

import { useSelector } from "react-redux";
import Post from "../Post/Post";

export default function Home() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const user = useSelector((state) => state.auth.user);
  console.log("from home", user?.email);

  if (user?.email === "warden@iiitu.ac.in") {
    console.log("warden");
  } else {
    console.log("student");
  }

  const handlePost = async (e) => {
    e.preventDefault();
    const date = new Date().toLocaleDateString();
    const time = new Date().toLocaleTimeString();
    const name = "warden";

    const res = await axios.post(
      "http://localhost:3000/api/post",
      { title, content, date, time, name },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res.status === 200) {
      // Clear the title and content fields
      setTitle("");
      setContent("");
    }

  };

  const card = [
    {
      icon: "message",
      message: "Total Message",
      number: "$53k",
      percentage: "+55% than last week",
    },
    {
      icon: "person",
      message: "Total Users",
      number: "2,300",
      percentage: "+3% than last month",
    },
    {
      icon: "person",
      message: "Total Complains",
      number: "3,462",
      percentage: "-2% than yesterday",
    },
    {
      icon: "message",
      message: "Attendance",
      number: "$103,430",
      percentage: "+5% than yesterday",
    },
  ];

  return (
    <div className="g-sidenav-show bg-gray-200 ">
      <Layout title="Dashboard" />
      <main class="main-content position-relative h-100 border-radius-lg lg:ml-72 ">
        <div class="container-fluid py-4">
          <div class="row">
            {user?.email === "warden@iiitu.ac.in" &&
              card.map((item, index) => {
                return (
                  <div class="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                    <div class="card">
                      <div class="card-header p-3 pt-2">
                        <div class="icon icon-lg icon-shape bg-pink-600 shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                          <i class="material-icons opacity-10">{item.icon}</i>
                        </div>
                        <div class="text-end pt-1">
                          <p class="text-sm mb-0 text-capitalize">
                            {item.message}
                          </p>
                          <h4 class="mb-0">{item.number}</h4>
                        </div>
                      </div>
                      <hr class="dark horizontal my-0" />
                      <div class="card-footer p-3"></div>
                    </div>
                  </div>
                );
              })}

            {user?.email === "warden@iiitu.ac.in" ? (
              <div class=" ml-64 w-11/12 mt-6 md:w-6/12 sm:w-9/12 bg-white rounded-2xl transform -translate-y-5">
                <form onSubmit={handlePost}>
                  <section class="p-3  border-gray-600">
                    <input
                      className="border-b p-2 focus:outline-none w-1/2"
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="Title..."
                    />
                  </section>
                  <section class="w-full flex px-3 py-2">
                    <div class="mr-1 mt-2">
                      <img
                        class="rounded-full"
                        src="https://pbs.twimg.com/profile_images/1366772608373387269/K6En5xnu_normal.jpg"
                        alt="Profile Picture"
                      />
                    </div>
                    <div class="flex-1">
                      <textarea
                        class="w-full bg-transparent focus:outline-none border-b border-t p-2 resize-none"
                        rows="4"
                        placeholder="What's happening?"
                        onChange={(e) => setContent(e.target.value)}
                      ></textarea>
                      <div class="flex items-center justify-between pt-2 border-gray-700">
                        <div className="flex justify-end ml-72">
                          <button class="transition duration-500 ease-in-out bg-blue-400  hover:bg-opacity-100 text-white text-opacity-50 hover:text-opacity-100 py-2 px-3 rounded-full text-base font-bold focus:outline-none">
                            Tweet
                          </button>
                        </div>
                      </div>
                    </div>
                  </section>
                </form>
              </div>
            ) : (
              " Here Are some Latest Updates"
            )}
          </div>
        </div>
        <div className="flex">
      <div className=" ml-40 "><Post /></div>
    </div>

        <div className="">
          
        </div>
      </main>
    </div>
  );
}
