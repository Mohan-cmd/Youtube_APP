import { configureStore } from "@reduxjs/toolkit";
import HamSlice from "./HamSlice";
import SearchSlice from "./SearchSlice";
import MessageSlice from "./MessageSlice";
const AppStore=configureStore({
    reducer:{
        app: HamSlice,
        searchdata: SearchSlice,
        chat: MessageSlice,
    }
})

export default AppStore;