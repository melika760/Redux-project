import {legacy_createStore} from "redux";
import Counter from "../Counter";

const CounterReducer=(state={Counter:0},action)=>{
if(action.type==="INCREAMENT"){
    return{ Counter: state.Counter+1}
}
if(action.type==="DECREMENT"){
    return{ Counter: state.Counter-1}
}
return state;
}
const store = legacy_createStore(CounterReducer)
export default store;