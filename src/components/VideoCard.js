import React from 'react'

const VideoCard = ({data}) => {
    // console.log(data)
  return (
    <div>
    
       <div className='h-72  w-80 m-4 rounded-lg'>
       <img className='bg-black rounded-lg opacity-95' src={data?.snippet?.thumbnails?.maxres?.url}></img> 
       <div className='font-bold p-1'>{data?.snippet?.title}</div>
       <div className='font-medium p-1'>{data?.statistics?.viewCount} Views</div>
       </div> 
    </div>
  )
}
 export const AdVideoCard=({info})=>{
    return(
        <div className='p-1 m-1 border border-red-900'>
            <VideoCard data={info}/>
        </div>
    )
 }
export default VideoCard
