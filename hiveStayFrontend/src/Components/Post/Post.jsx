import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

export default function Post() {
    const [post,setPost]=useState([]);
   useEffect(() => {
        const getPosts = async () => {
            try {
              const res = await axios.get("http://localhost:3000/api/getpost", {
                headers: {
                  "Content-Type": "application/json"
                }
              });
              console.log(res.data);
              setPost(res.data);
            } catch (error) {
              console.log(error);
            }
          };
            getPosts();
      }, [post]);
      const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', { timeZone: 'UTC' });
    };
  return (
    <div className=' bg-white -ml-72'>


bghhhhh

{post.map((p,index) => (
    <div key={index} className="border mb-2 border-gray-300 rounded-md p-4 w-1/2 mx-auto">
        <h2 className="text-lg font-bold mb-2">{p.title}</h2>
        <p className="text-gray-600 mb-2">{p.content}</p>
        <div className="flex justify-between">
            <p className="text-sm text-gray-500">{formatDate(p.date)}</p>
            <p className="text-sm text-gray-500">{p.time}</p>
        </div>
    </div>
))}








        
    </div>
   
  
      
  )
}
