import React, { useRef, useState } from 'react'
import { YoutubeAPI } from '../utils/constants'
import { useEffect } from 'react'
import VideoCard, { AdVideoCard } from './VideoCard'
import CardContainer from './CardContainer';
import { Link } from 'react-router-dom';

const VideoContainer = () => {
  const[videoData,setvideoData]= useState([]);
  const[arroDisable,setArrowDisable]=useState(true);
  const elementRef =useRef(null);
  const getPopularVideos=async ()=>{
    const data= await fetch(YoutubeAPI);
    const json =await data.json();
   // console.log(json)
    setvideoData(json.items)
  }
  useEffect(()=>{
    getPopularVideos();
  },[])

  const HorizotalScroll =(refer,speed,distance,step)=>{
    //25,100,-10
   // console.log(elementRef)
    let scrollAmount=0;
    const sliderTimer =setInterval(()=>{
        console.log(refer.scrollLeft)
         refer.scrollLeft +=step;
         scrollAmount +=Math.abs(step);
          if(scrollAmount >=distance){
            clearInterval(sliderTimer)
          }
          if(refer.scrollLeft===0){
            setArrowDisable(true);
          }else{
            setArrowDisable(false);
          }
         //console.log(scrollAmount)
        //  }
    },speed)
   //console.log(refer.scrollLeft)
  }

  return (
    <div >
    <div ref={elementRef} className=' flex flex-row overflow-x-scroll overflow-y-hidden'>
       {videoData&& <AdVideoCard info={videoData[0]}/>}
        {videoData.map(item=>{
          return <Link to={"/watch?v="+item.id} ><VideoCard key={item.id} data={item}/></Link>})}
        
        <div className='flex flex-row w-10/12 justify-between absolute'>
        <button disabled={arroDisable} className='h-12 w-12 m-1  bg-white  border rounded-full mt-20 ' onClick={()=>HorizotalScroll(elementRef.current,25,100,-10)}>◀</button> 
        <button className='h-12 w-12  bg-white bg-transparent opacity-95 rounded-full mt-20 'onClick={()=>HorizotalScroll(elementRef.current,25,100,10)}>▶︎</button> 
        </div>
    </div>
    
    </div>
  )
}

export default VideoContainer
