import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Counter from './Component/Counter';
import Header from "./Component/Header";
import Auth from "./Component/Auth";
import UserProfile from "./Component/UserProfile";
import './App.css';
import React from 'react';

function App() {
 const Authuse =useSelector((state)=>state.Auth.isAuthenticated)
  return (
    <Fragment>
      <Header/>
      {!Authuse && <Auth/>}
      {Authuse &&<UserProfile/>}
       <Counter />
    </Fragment>
     
    );

}

export default App;
