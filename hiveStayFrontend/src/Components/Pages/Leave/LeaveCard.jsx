import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'

export default function LeaveCard({name,email,rollNumber,from,to,reason,status,id,mobileNumber,noOfHolidays,hostelName}) {
   const [date,setDate]=React.useState('')
   const [lastDate,setLastDate]=React.useState('')

   useEffect(()=>{
    const dateOnly=from.split('T')[0]
    const lastDateOnly=to.split('T')[0]
    setDate(dateOnly)
    setLastDate(lastDateOnly)
   },[date,lastDate])
   
   
    const handleApproved=async(id)=>{
    try{
        const res= await axios.put(`http://localhost:3000/api/holidaysApplication/updateStatus/${id}`,{status:"Approved"},{
            headers: {
                "Content-Type": "application/json",
              },
            }
            )
            console.log(res.data)
    }catch(err){
        console.log(err);
    }
   
   }
   const handleReject=async(id)=>{
console.log(id)
    try{
        const res= await axios.put(`http://localhost:3000/api/holidaysApplication/updateStatus/${id}`,{status:"Rejected"},{
            headers: {
                "Content-Type": "application/json",
              },
            }
            )
            console.log(res.data)
    }catch(err){
        console.log(err);
    }

   }
  return (
    <div >
     

<div className="flex border -ml-24 mt-4 mr-2">
    <h1></h1>
      {/* Left Box */}
      <div className="w-1/8 p-4">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/8/83/Indian_Institute_of_Information_Technology%2C_Una_logo.png"
          alt="Placeholder"
          className="h-20 w-28"
        />
      </div>
      {/* Right Box */}
      <div className="w- p-4">
        <div className='flex justify-between'>
            <h1 className='flex'><h1 className='font-bold'>Name</h1> : {name} </h1>
            <h1 className='ml-20 flex'><h1 className='font-bold'>Email</h1>  : {email}</h1>
            <h1 className='ml-20 flex'><h1 className='font-bold'>Roll No</h1> : {rollNumber}</h1>
            <h1 className='ml-10 flex'><h1 className='font-bold'>Mobile No</h1>: {mobileNumber}</h1>
        </div>
        <div className='mt-4 flex justify-between'>
<h1 className='flex'><h1 className='font-bold'> From</h1>: {date}</h1>
<h1 className='flex ml-10'><h1 className='font-bold'> to</h1>: {lastDate}</h1>
<h1 className='flex ml-10'><h1 className='font-bold'>No. of Days</h1>: {noOfHolidays}</h1>
<h1 className='flex ml-10'><h1 className='font-bold'>Hostel:</h1>: {hostelName}</h1>

        </div>
        <p className="mt-4">
         <h1 className='font-bold'>Reason:</h1> {reason}
        </p>
        <div className='flex justify-around mt-2'>
        <button  onClick={()=>handleApproved(id)} className='border p-2 bg-green-500 hover:bg-green-600 text-white rounded-xl'>Approved</button>
        <button onClick={()=>handleReject(id)} className='border p-2 bg-red-500 hover:bg-red-600 text-white rounded-xl'>Reject</button>

        </div>
      </div>
    </div>

    </div>
  )
}
