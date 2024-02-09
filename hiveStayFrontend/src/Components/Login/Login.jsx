import React, { useState  } from "react";
import {  useNavigate ,Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signInStart,signInFailure,signInSuccess } from "../../../redux/user/userSlice.js";

export default function Login() {
  const dispatch=useDispatch();
  const history = useNavigate();
  const [formdata,setFormdata]=useState({});
  const { error, loading } = useSelector((state) => state.user);
  
  const handleChange=(e)=>{
    setFormdata({
      ...formdata,
      [e.target.id]:e.target.value
    })
    console.log(formdata);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(signInStart());

    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(formdata),
    };

    try {
        const response = await fetch('http://localhost:3000/api/login', config);
       
        const data = await response.json();
        if (data.success === false) {
            dispatch(signInFailure(data.message));
            history("/login");
            return;
        }
        dispatch(signInSuccess(data));
        history("/");
    } catch (error) {
        dispatch(signInFailure('An error occurred during login.'));
        history("/login");
    }
}
  return (
    <div>
      <section className="gradient-form  h-full bg-neutral-200 dark:bg-neutral-700">
  <div className="container h-full p-10 ">
    <div
      className=" g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
      <div className="w-full ">
        <div
          className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
          <div className="g-0 lg:flex lg:flex-wrap">
           
            <div className="px-4 md:px-0 lg:w-6/12 bg-teal-200">
              <div className="md:mx-6 md:p-12">

                <div className="text-center">
                  <img
                    className="mx-auto"
                    src="https://iiitu.ac.in/wp-content/uploads/2022/01/1logo-una.png"
                    alt="logo" />
                </div>

                <form onSubmit={handleSubmit} className=''>
                  <p className="mb-4 mt-4 font-semibold">Please login to your account</p>
                  <div className="relative mb-4" data-te-input-wrapper-init>
                    <input
                    onChange={handleChange}
                      type="email"
                      className=" peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInput1"
                      placeholder="abc@iiitu.ac.in" />
                    <label
                      for="exampleFormControlInput1"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary-600 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                      >Email address
                    </label>
                  </div>
                  <div className="relative mb-4" data-te-input-wrapper-init>
                    <input
                    onChange={handleChange}
                      type="password"
                      className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                      id="exampleFormControlInput11"
                      placeholder="Password" />
                    <label
                      for="exampleFormControlInput11"
                      className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary-600 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                      >Password
                    </label>
                  </div>

                  <div className="mb-12 pb-1 pt-1 text-center">
                    <button
                    
                      className=" bg-slate-700 mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                      type="submit"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      Log in
                    </button>

                    <a href="#!">Forgot password?</a>
                  </div>

                  <div className="flex items-center justify-between pb-6">
                    <p className="mb-0 mr-2">Don't have an account?</p>
                    <button
                      type="button"
                      className=" bg-green-400 inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                      data-te-ripple-init
                      data-te-ripple-color="light">
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div
              className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
              >
              <div className="px-4 py-6 text-black md:mx-6 md:p-12">
                <h4 className="mb-6 text-xl font-semibold">
                  We are more than just a company
                </h4>
                <p className="text-sm">
                IIIT Una is one of the 20 IIITs being setup, funded and managed by the Ministry of Education, Govt. of India under the Public Private Partnership (PPP) model. The partners setting up IIIT Una are the Ministry of Education, Govt. of India, the Govt. of Himachal Pradesh, HP Power Corporation Limited and HP Transmission Corporation Limited. Admissions to the undergraduate programmes in the Institute are made through the Joint Entrance Examination (JEE).At present, IIIT Una operates
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}
