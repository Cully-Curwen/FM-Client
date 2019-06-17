import React from 'react';
import { NavLink } from "react-router-dom";
import './styling/LoginAndRegisterNav.css'

function LoginAndRegisterNav(props) {
  const { formLogin } = props;

  return (
    <div className="login-register-nav">
      <NavLink to={'/customer' + (formLogin ? '/login' : '/register')} >
        <button 
          className="user-type"
          >Customer</button>
      </NavLink>
      <NavLink to={'/trader_admin' + (formLogin ? '/login' : '/register')} >
        <button 
          className="user-type"
          >Trader</button>
      </NavLink>
      <NavLink to={'/market_admin' + (formLogin ? '/login': '/register')} >
        <button 
          className="user-type"
          >Market Admin</button>
      </NavLink>  
    </div>
  );
};

export default LoginAndRegisterNav;
