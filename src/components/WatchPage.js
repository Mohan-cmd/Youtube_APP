import React from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/HamSlice';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
const WatchPage = () => {
     const dispatch =useDispatch();
     const [searchParams] =useSearchParams();
     const uniqueVideoID=searchParams.get("v")
    const toggleSidebar=()=>{
        dispatch(closeMenu())
    }
    useEffect(()=>{
        toggleSidebar()
    },[])
  return (
    <div className='rounded-lg '>
      <div className='flex flex-row w-full'>
        <iframe width="900" height="700 " src={"https://www.youtube.com/embed/"+uniqueVideoID}
        title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen></iframe>
        <div className='border m-2 border-black w-[30%] h-[700px] overflow-y-scroll rounded-sm flex flex-col-reverse'>
        <div className='font-bold p-2'>
            LiveChat
            <LiveChat/>
        </div>
        
        </div>
      </div>
       
      <CommentsContainer/>
    </div>

  )
}

export default WatchPage
