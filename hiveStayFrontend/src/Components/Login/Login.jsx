import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const backgroundImageStyle = {
    backgroundImage:
      "url('https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')",
  };
const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hello")
    try {
      const res = await axios.post("http://localhost:3000/api/login", {
        email,
        password},{
        headers: {
          "Content-Type": "application/json",
        },
        });
      console.log(res.data);
      if(res.status===200){
        navigate("/");
      }
  }catch(err){
    console.log(err);
    navigate("/login")
  }
}
  return (
    <html>
      <body class="bg-gray-200">
        <div class="container position-sticky z-index-sticky top-0">
          <div class="row">
            <div class="col-8"></div>
          </div>
        </div>
        <main class="main-content  mt-0">
          <div
            class="page-header align-items-start min-vh-100"
            style={backgroundImageStyle}
          >
            <span class="mask bg-gradient-dark opacity-6"></span>
            <div class="container my-auto">
              <div class="row">
                <div class="col-lg-4 col-md-8 col-12 mx-auto">
                  <div class="card z-index-0 fadeIn3 fadeInBottom">
                    <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                      <div class="bg-gradient-primary shadow-primary border-radius-lg py-3 pe-1">
                        <h4 class="text-white font-weight-bolder text-xl text-center mt-2 mb-0">
                          Login
                        </h4>
                        <div class="row mt-3"></div>
                      </div>
                    </div>
                    <div class="card-body">
                      <form onSubmit={handleSubmit} role="form" class="text-start">
                        <div class="input-group input-group-outline my-3">
                          <input
                            type="email"
                            placeholder="Email"
                            class="form-control"
                            required
                            onChange={(e) => setEmail(e.target.value)}
                          />
                        </div>
                        <div class="input-group input-group-outline mb-3">
                          <input
                            type="password"
                            placeholder="Password"
                            class="form-control"
                            required
                            onChange={(e) => setPassword(e.target.value)}
                          />
                        </div>

                        <div class="text-center">
                          <button
                            type="submit"
                            class="bg-pink-600 h-10 rounded-lg hover:bg-pink-500 text-white w-100 my-4 mb-2"
                          >
                            Sign in
                          </button>
                        </div>
                        <p class="mt-4 text-sm text-center">
                          Don't have an account?
                          <Link
                            to="/signup"
                            class="text-primary text-gradient font-weight-bold"
                          >
                            Sign up
                          </Link>
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
  );
}
