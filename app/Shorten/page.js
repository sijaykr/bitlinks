
"use client"
import Link from 'next/link'
import React from 'react'
import { useState } from 'react'
const Shorten = () => {
    const [url, seturl] = useState("")
    const [shorturl, setshorturl] = useState("")
  const [generated, setgenerated] = useState(false)
  const generate = () => {
    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "url": url,
  "shorturl": shorturl
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("/api/generate", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
    seturl("")
    setshorturl("")
    
    console.log(result)
    alert(result.message)
  })
  .catch((error) => console.error(error));
    
  }
    
  return (
    <div className='bg-purple-100 max-w-lg mx-auto my-16 p-8 rounded-lg flex flex-col gap-4'>
          <h1 className=' font-bold text-lg'>Generete your  short URls </h1>
        <div className=' flex flex-col  gap-5'>
              <input type="text"
                  value={url}
                  placeholder="Enter Your URL"
                  onChange={e=>{seturl(e.target.value)}}
                  className=" bg-white visible-placeholder rounded-md p-4 focus:outline-purple-600" />
              <input type="text"
               
                  value={shorturl}
                   onChange={e=>{setshorturl(e.target.value)}}
                  placeholder="Enter your preferred short URL text"
                  className="visible-placeholder bg-white p-4 rounded-md focus:outline-purple-600" />
                <button onClick={generate} className="bg-purple-800 text-white font-semibold px-6 py-2 rounded-xl shadow-md hover:bg-gray-900 transition duration-300 ease-in-out hover:cursor-pointer">
                Generate
        </button>
        {generated && <> <span className='font-bold text-lg
        '>
        Your Link</span>  <code><Link target="_blank" href={generated} >{generated}</Link>

        </code></>}
          </div>
         


    </div>
  )
}

export default Shorten
