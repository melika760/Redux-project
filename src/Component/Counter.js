import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { CounerAction } from './Store/Counter';
const Counter = () => {
  const counter=useSelector(state=>state.Counter.Counter);
  const Show=useSelector(state=>state.Counter.showCounter)
  const dispatch=useDispatch()
  const toggleCounterHandler = () => {
    dispatch(CounerAction.Show())
  };
  function Increamenthandler(){
    dispatch(CounerAction.InCreament())
  }
  function Decreamenthandler(){
    dispatch(CounerAction.DeCreament())
  }
  function Increasehandler(){
    dispatch(CounerAction.Increase(10))
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
