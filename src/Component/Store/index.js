import {CounterReducer} from "./Counter"
import {configureStore} from "@reduxjs/toolkit"
import { AuthReducer } from "./Auth";
const store = configureStore({
    reducer:{
        Counter:CounterReducer,
Auth:AuthReducer
    }
})

export default store;