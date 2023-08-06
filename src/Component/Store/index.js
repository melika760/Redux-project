import {legacy_createStore} from "redux";
const initalstate={Counter:0,
showCounter:true}
const CounterReducer=(state=initalstate,action)=>{
if(action.type==="INCREAMENT"){
    return{ Counter: state.Counter+1,showCounter:state.showCounter}
}
if(action.type==="DECREMENT"){
    return{ Counter: state.Counter-1,showCounter:state.showCounter}
}
if(action.type==="INCREASE"){
    return{ Counter: state.Counter+action.amount,showCounter:state.showCounter}
}
if(action.type==="toggle"){
return{
    Counter:state.Counter,
    showCounter:!state.showCounter
}
}
return state;
}
const store = legacy_createStore(CounterReducer)
export default store;