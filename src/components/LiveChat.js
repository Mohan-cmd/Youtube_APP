import React, { useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../utils/MessageSlice'
import { useEffect } from 'react'
import {generate} from '../utils/helper'
import { randomMessage} from '../utils/helper'
const LiveChat = () => {
    const [typedMsg,setTypedMsg]=useState("")
    const dispatch =useDispatch()
     const messages= useSelector(store=>store.chat.messages)
     
    
    useEffect(()=>{
       
       const inter= setInterval(()=>{
            console.log("Api polling")
            dispatch(addMessage({
                name: generate(),
                message:randomMessage(10) +" Good Morning!!!! 🚀"
            }))
        },2000)
        return ()=>clearInterval(inter);
    },[])
  return (
    <form onSubmit={e=>{
        e.preventDefault();
        dispatch(addMessage({
            name:"Mohan Gupta",
            message: typedMsg +" 🚀"
        }))
        setTypedMsg("")
        }}>
       
        <div >
        {messages.map((item,index) => <ChatMessage key={index} name={item.name} message={item.message}/>)}
        </div>
        <div>
        <input type="text" className='border border-black w-[80%] m-2'value={typedMsg} onChange={(e)=>setTypedMsg(e.target.value)} ></input>
        <button className='border border-black px-1'>Post</button>
        </div>
    </form>
  )
}

export default LiveChat
