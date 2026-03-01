import React from 'react'
import { NavLink } from 'react-router-dom';


 function Navbar() {
  return (
    <header className="position: sticky; top: 0; z-index: 30; border-bottom: 1px solid #d5e0e4; background-color: #fff; ">
      <nav className="  m-(0 auto) min-w-[(1120px, 92vw)] flex justify-between items-center p-(0.9rem 0)  ">
        <NavLink className="border-2 rounded-2xl p-2 active:bg-violet-700 hover:bg-blue-800 hover:text-white" to="/">
          Kismayo Airbnb
        </NavLink>
        <NavLink to="/search" className={({isActive}) => (isActive ? "nav-link active   active:bg-violet-700 underline text-violet-200 bg-amber-950 border-2 rounded-2xl p-2 " : "border-2 rounded-2xl p-2 hover:bg-blue-800 hover:text-white")} >Search</NavLink>
        <NavLink to="/experiences" className={({isActive}) => (isActive ? "nav-link active   active:bg-violet-700 underline text-violet-200 bg-amber-950 border-2 rounded-2xl p-2 " : "border-2 rounded-2xl p-2 hover:bg-blue-800 hover:text-white")}>Experiences</NavLink>
        <NavLink to="/host" className="border-2 rounded-2xl p-2 active:bg-violet-700 hover:bg-blue-800 hover:text-white">Host</NavLink>
        <NavLink to="/contact us" className={({isActive}) => (isActive ? "nav-link active   active:bg-violet-700 underline text-violet-200 bg-amber-950 border-2 rounded-2xl p-2 " : "border-2 rounded-2xl p-2 hover:bg-blue-800 hover:text-white")} >Contact Us</NavLink>
        <NavLink to="/auth" className={({isActive}) => (isActive ? "nav-link active   active:bg-violet-700 underline text-violet-200 bg-amber-950 border-2 rounded-2xl p-2 " : "border-2 rounded-2xl p-2 hover:bg-blue-800 hover:text-white")}>Login</NavLink>
      </nav>
    </header>
  )
}

export default Navbar