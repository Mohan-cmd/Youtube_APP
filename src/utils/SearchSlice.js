import { createSlice } from "@reduxjs/toolkit";

const SearchSlice=createSlice({
        name:"searchslice",
        initialState:{},
        reducers:{
            cachedSearchResults:(state,action)=>{
                   state = Object.assign(state,action.payload)
                
            }
        }
})

export const {cachedSearchResults} =  SearchSlice.actions;
export default SearchSlice.reducer;