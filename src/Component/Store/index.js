import {legacy_createStore} from "redux";

const CounterReducer=(state={Counter:0},action)=>{
if(action.type==="INCREAMENT"){
    return{ Counter: state.Counter+1}
}
if(action.type==="DECREMENT"){
    return{ Counter: state.Counter-1}
}
if(action.type==="INCREASE"){
    return{ Counter: state.Counter+action.amount}
}
return state;
}
const store = legacy_createStore(CounterReducer)
export default store;