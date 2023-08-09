
import {createSlice} from "@reduxjs/toolkit"
const Counterinitalstate={Counter:0,
    showCounter:true}
    const CounterSlice=createSlice({
        name:"Counter",
        initialState:Counterinitalstate,
        reducers:{
            InCreament(state){
    state.Counter++;
            },
            DeCreament(state){
                state.Counter--;
            },
            Increase(state,action){
                state.Counter=state.Counter+action.payload
            },
            Show(state){
                state.showCounter=!state.showCounter
            }
    
        }
    })
    export const CounterReducer= CounterSlice.reducer
    export const CounerAction=CounterSlice.actions
