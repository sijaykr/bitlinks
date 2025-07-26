import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
      <nav className='h-16 bg-gray-800 text-white flex items-center justify-between px-8  '>
      <div className="logo font-bold text-lg">
                      <Link  href="/" >BitLink</Link >

       </div>
          <ul className='flex space-x-4'>
              <Link  href="/" ><li>Home</li></Link >
              <Link href="/about" ><li>About</li></Link >
              <Link  href="/contact"><li>Contact</li></Link >
              <Link href="/Shorten"><li>Shorten</li></Link >
             <div className="flex space-x-4">
  <Link href="/Shorten">
    <button className="bg-purple-600 text-white font-semibold px-6 py-2 rounded-xl shadow-md hover:bg-purple-700 transition duration-300 ease-in-out hover:cursor-pointer">
      Try Now
    </button>
  </Link>
  
  <Link href="/github">
    <button className="bg-purple-600 text-white font-semibold px-6 py-2 rounded-xl shadow-md hover:bg-purple-700 transition duration-300 ease-in-out hover:cursor-pointer">
      GitHub
    </button>
  </Link>
</div>

          </ul>
   </nav>
  )
}

export default Navbar
