import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/HamSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cachedSearchResults } from '../utils/SearchSlice';
const Head = () => {
    const dispatch= useDispatch();
    const [searchValue,setSearchValue]=useState("");
    const [suggestionsValue,setSuggestionsValue]=useState([]);
    const [showSuggestions,setShowSuggestions]=useState(false)
    const searchCache= useSelector((state)=>state.searchdata)
    const toggleMenuHandler = ()=>{
       
        dispatch(toggleMenu());
    }
    
    const getSearchSuggestion=async ()=>{ 
      const data= await fetch(YOUTUBE_SEARCH_API+searchValue);
      const json =await data.json();
      setSuggestionsValue(json[1])
      console.log(json)
      dispatch(cachedSearchResults({
        [searchValue]: json[1]
      }))
    }
    useEffect(()=>{
      console.log('called')
       const timer=setTimeout(()=>{
          if(searchCache[searchValue]){
            setSuggestionsValue(searchCache[searchValue])
          }else{
            getSearchSuggestion()
          }
        },1000)
       return ()=>{clearTimeout(timer)}
    },[searchValue])
    
  return (
    <div className='p-8 grid grid-flow-col justify-between'>
      <div className='flex col-span-1'>
      <img className="h-8 w-8 mr-3 cursor-pointer" onClick={()=>toggleMenuHandler()} src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1024px-Hamburger_icon.svg.png"></img>
      <a href='/'>
      <img  className="h-8 w-24" src="https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png"></img>
      </a>
      </div>
      <div className=''>
        <div className='flex justify-center'>
          <input className="border border-gray-400 w-[600px] rounded-l-2xl p-2" type='text' value={searchValue} 
          onChange={(e)=>setSearchValue(e.target.value)}
          onFocus={(e)=>setShowSuggestions(true)} 
          onBlur={(e)=>setSuggestionsValue(false)} 
          />
          <button className='border border-gray-4 00 px-4 w-[80px] rounded-r-2xl bg-gray-200'>🔎</button>
        </div>
        {showSuggestions && suggestionsValue.length>1 &&
        <div className='absolute pt-1 z-50'>
        
          <ul className='  bg-white w-[600px] border border-gray-400 rounded-lg'>
            {suggestionsValue.map((result,index)=><li key={index} className='px-3 py-1 cursor-pointer hover:bg-gray-200'>🔎 {result}</li>)}  
          </ul> 
        </div>
        }
      </div>
       
      <div className='col-span-1'>
        <img className="h-8 w-8" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJeVjQDi3dH6L92Ydk-Ae3zmQmCxtjF6ZZw0tMuWYeiw&s"></img>
      </div>
    </div>
  )
}

export default Head
