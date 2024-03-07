import React from 'react'
import ButtonList from './ButtonList'
import SideBar from './SideBar'
import MainContainer from './MainContainer'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex overflow-hidden'>
     <div className='m-4 w-1/12'>
      <SideBar/>
      </div>
      <div className='m-4 w-11/12'>
      <Outlet/>
      </div>
    </div>
  )
}

export default Body
