import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
  const counter=useSelector(state=>state.Counter);
  const dispatch=useDispatch()
  const toggleCounterHandler = () => {};
  function Increamenthandler(){
    dispatch({type:"INCREAMENT"})
  }
  function Decreamenthandler(){
    dispatch({type:"DECREMENT"})
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
    <div>
    <button onClick={Increamenthandler}>INCREAMENT</button>
      <button onClick={Decreamenthandler}>DECREMENT</button>
    </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
