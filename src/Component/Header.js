import classes from './Header.module.css';
import { useSelector,useDispatch } from 'react-redux';
import { AuthActions } from './Store/Auth';

const Header = () => {
  const isAuth=useSelector(state=>state.Auth.isAuthenticated);
  const dispatch=useDispatch()
  function logouthandler(){
    dispatch(AuthActions.LogOut())
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth &&
      <nav>
        <ul>
          <li>
            <a href='/'>My Products</a>
          </li>
          <li>
            <a href='/'>My Sales</a>
          </li>
          <li>
            <button onClick={logouthandler}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
