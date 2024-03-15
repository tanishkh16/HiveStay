import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'


export default function NotificationCard({name,mobileNumber,status,reason,email,rollNumber,from,to,noOfHolidays,hostelName}) {
const [date,setDate]=React.useState('')
const [lastDate,setLastDate]=React.useState('')
useEffect(()=>{
    const dateOnly=from.split('T')[0]
    const lastDateOnly=to.split('T')[0]
    setDate(dateOnly)
    setLastDate(lastDateOnly)
   },[date,lastDate])
    return (
        <div >
     <div className="flex border -ml-24 mt-4 mr-2">

           <div className="w-1/8 p-4">
             <img
               src="https://upload.wikimedia.org/wikipedia/en/8/83/Indian_Institute_of_Information_Technology%2C_Una_logo.png"
               alt="Placeholder"
               className="h-20 w-28"
             />
           </div>
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
              <h1 className='font-bold'>Reason:</h1>{reason}
             </p>
             <div className='flex mt-2'>
  Your Application is <h1 className='ml-2 mt-1 '>
    {status === 'Pending' ? 'Pending' : status === 'Approved' ? 'Approved' : 'Rejected'}
  </h1>
</div>

           </div>
         </div>
     
         </div>
      
  )
}
