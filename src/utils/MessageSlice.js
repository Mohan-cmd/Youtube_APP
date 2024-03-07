import { createSlice } from "@reduxjs/toolkit";


const MessageSlice=createSlice({
    name:"chat",
    initialState:{
       messages:[]
    },
    reducers:{
        addMessage:(state,action)=>{
            state.messages.splice(20,1)
            state.messages.push(action.payload)
        },
    }
})

export const {addMessage} = MessageSlice.actions;
export default MessageSlice.reducer;