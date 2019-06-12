import React from 'react';
import Authorization from '../utils';
import { Route, Link, Redirect, } from "react-router-dom";
import LoginAndRegister from './LoginAndRegister';

function Splash(props) {
  const { CustomerAuthorization, MarketAdminAuthorization, TraderAdminAuthorization } = Authorization();
  console.log(Authorization());
  
  
  const authorized = () => {  
    if (CustomerAuthorization) return <Redirect to='/customer' />
    if (MarketAdminAuthorization) return <Redirect to='/market_admin' />
    if (TraderAdminAuthorization) return <Redirect to='/trader_admin' />
    return <Redirect to='/customer/login' />
  };

  return (
    <div>
      {authorized()}
      <LoginAndRegister />
    </div>
  );
};

export default Splash;
