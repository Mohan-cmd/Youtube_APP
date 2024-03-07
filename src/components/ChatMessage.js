import React from 'react'

const ChatMessage = ({name,message}) => {
  return (
    <div className='flex flex-row items-center-center shadow-sm px-1'>
      <img className="h-8 " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJeVjQDi3dH6L92Ydk-Ae3zmQmCxtjF6ZZw0tMuWYeiw&s"></img>
      <div className='px-1 '>
        <span className="text-sm font-bold px-1">{name}</span>
        <span className='text-sm '>{message}</span>
      </div>
    </div>
  )
}

export default ChatMessage
