import React from 'react';
import { NavLink } from "react-router-dom";
import '../../styling/LoginAndRegisterNav.css'

function LoginAndRegisterNav(props) {
  const { formLogin } = props;

  return (
    <div className="login-register-nav w3-row">
      <NavLink 
        to={'/customer' + (formLogin ? '/login' : '/register')} 
        className="w3-cell tablink w3-bottombar w3-hover-pale-green w3-padding"
        activeClassName="w3-border-green"
      >
        Customer
      </NavLink>
      <NavLink 
        to={'/trader_admin' + (formLogin ? '/login' : '/register')} 
        className="w3-cell tablink w3-bottombar w3-hover-pale-green w3-padding"
        activeClassName="w3-border-green"
      >
        Trader
      </NavLink>
      <NavLink 
        to={'/market_admin' + (formLogin ? '/login': '/register')} 
        className="w3-cell tablink w3-bottombar w3-hover-pale-green w3-padding"
        activeClassName="w3-border-green"
      >
        Market Admin
      </NavLink>  
    </div>
  );
};

export default LoginAndRegisterNav;
