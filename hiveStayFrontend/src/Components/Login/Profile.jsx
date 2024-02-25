import React from 'react'
import Layout from '../Layout/Layout'

export default function Profile() {
  return (
    <div>
        <Layout title="Profile Page"/>
        <div class="h-screen dark:bg-gray-700 bg-gray-200 pt-4 ">

    <div class="max-w-sm mx-auto bg-white wdark:bg-gray-900 rounded-lg overflow-hidden shadow-lg">
        <div class="border-b px-4 pb-6">
            <div class="text-center my-2">
                <img class="h-32 w-32 rounded-full border-4 border-white dark:border-gray-800 mx-auto my-4"
                    src="https://randomuser.me/api/portraits/women/21.jpg" alt=""/>
                <div class="my-1 flex ">
                   <input  className='border rounded-lg mr-2 p-2 -ml-4 w-40 text-xs' placeholder='First Name' type='name'></input>
                   <input  className='border rounded-lg mr-3 p-2 w-40 text-xs' placeholder='Last Name' type='name'></input>
                   <input  className='border rounded-lg  p-2 w-40 h-10 text-xs' placeholder='Email' type='email'></input>
                </div>
                <div class="my-1 flex ">
                   <input  className='border rounded-lg mr-2 p-2 -ml-4 w-40 text-xs' placeholder='Roll No.' type='number'></input>
                   <input  className='border rounded-lg mr-3 p-2 w-40 text-xs' placeholder='Room No.' type='number'></input>
                   <input  className='border rounded-lg  p-2 w-40 h-10 text-xs' placeholder='Hostel' type='name'></input>
                </div>
                <div class="my-1 flex ">
                   <input  className='border rounded-lg mr-2 p-2 -ml-4 w-40 text-xs' placeholder='Branch' type='name'></input>
                   <input  className='border rounded-lg mr-3 p-2 w-40 text-xs' placeholder='Mess' type='name'></input>
                   <input  className='border rounded-lg  p-2 w-40 h-10 text-xs' placeholder='Semester' type='number'></input>
                </div>
                <div class="my-1 flex ">
                   <input  className='border rounded-lg mr-2 p-2 -ml-4 w-40 text-xs' placeholder='Address' type='name'></input>
                   <input  className='border rounded-lg mr-3 p-2 w-40 text-xs' placeholder='Mobile No.' type='number'></input>
                </div>
               
            </div>
           
        </div>
        <div class="px-4 py-4">
            <div class="flex gap-2 items-center text-gray-800 dark:text-gray-300 mb-4">
                <svg class="h-6 w-6 text-gray-600 dark:text-gray-400" fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                    <path class=""
                        d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10zm0-2a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm9 11a1 1 0 0 1-2 0v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a1 1 0 0 1-2 0v-2a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v2z" />
                </svg>
                <span><strong class="text-black dark:text-white">12</strong> Followers you know</span>
            </div>
          
        </div>
    </div>

</div>

</div> 

  )
}
