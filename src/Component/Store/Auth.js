import {createSlice} from "@reduxjs/toolkit";
const initialAuthState={isAuthenticated:false}
const AuthSlice= createSlice({
    name:"Auth",
    initialState:initialAuthState,
    reducers:{
        LogIn(state){
            state.isAuthenticated=true
        },
        LogOut(state){
            state.isAuthenticated=false
        }
    }
})
export const AuthReducer=AuthSlice.reducer
export const AuthActions=AuthSlice.actions