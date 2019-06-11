import React, { useEffect } from 'react';
import Authorization from '../utils';
import { Route, Link, Redirect, } from "react-router-dom";

function Splash(props) {
  
  const authorized = () => {
    const { CustomerAuthorization, MarketAdminAuthorization, TraderAdminAuthorization } = Authorization();
    
    if (CustomerAuthorization) return <Redirect to='/customer' />
    if (MarketAdminAuthorization) return <Redirect to='/market_admin' />
    if (TraderAdminAuthorization) return <Redirect to='/trader_admin' />
  };

  return (
    <div>
      {authorized()}
      Welcome All
    </div>
  );
};

export default Splash;
