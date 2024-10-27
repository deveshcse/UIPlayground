import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex gap-2 font-medium bg-slate-950 text-white'>
        <Link to="/todo">Check-Todo</Link>
        <Link to="/carousal" >Carouasal</Link>
        <Link to="/starRating">Star Rating</Link>
    </div>
  )
}

export default Navbar