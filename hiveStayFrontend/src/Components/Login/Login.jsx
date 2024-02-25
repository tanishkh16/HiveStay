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
      
    </div>
  )
}
