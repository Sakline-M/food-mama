import Link from 'next/link'
import React from 'react'

const ResturentHeader = () => {
  return (
    <div className=' w-full max-w-6xl mx-auto  flex justify-between items-center rounded-lg shadow-md p-2 m-2'>
        <div className='logo'>
            <img src="https://upload.wikimedia.org/wikipedia/en/2/2f/Jerry_Mouse.png" alt="" className='w-[50px]' />
        </div>
        <ul className='flex  gap-3'>
            <li className=''>
                <Link className='hover:border-b-2' href="/">Home</Link>
            </li>
            <li>
                <Link className='hover:border-b-2' href="/">Login</Link>
            </li>
            <li>
                <Link className='hover:border-b-2' href="/">Profile</Link>
            </li>
        </ul>
    </div>
  )
}

export default ResturentHeader