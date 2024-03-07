import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
const SideBar = () => {
    const isMenuDisplay = useSelector(store=>store.app.isMenuOpen)

    if(!isMenuDisplay) return null;
  return (
    <div className='w- p-4 shadow-md w-32' >
    <ul className='items-center'>
        <Link to="/"><li>Home</li></Link>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>
      <h1 className='font-bold pt-5'>Subscriptions</h1>
      <ul className='items-center'>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <div className='mb-2 pt-5'>
      <h1 className='font-bold'>Watch Later</h1>
      <ul className='items-center'>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      </div>
    </div>
  )
}

export default SideBar
