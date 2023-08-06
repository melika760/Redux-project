import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const counter=useSelector(state=>state.Counter);
  const Show=useSelector(state=>state.showCounter)
  const dispatch=useDispatch()
  const toggleCounterHandler = () => {
    dispatch({type:"toggle"})
  };
  function Increamenthandler(){
    dispatch({type:"INCREAMENT"})
  }
  function Decreamenthandler(){
    dispatch({type:"DECREMENT"})
  }
  function Increasehandler(){
    dispatch({type:"INCREASE", amount:10})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
     {Show && <div className={classes.value}>{counter}</div>}
    <div>
    <button onClick={Increamenthandler}>INCREAMENT</button>
      <button onClick={Decreamenthandler}>DECREMENT</button>
      <button onClick={Increasehandler}>Increase by 10</button>
    </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
