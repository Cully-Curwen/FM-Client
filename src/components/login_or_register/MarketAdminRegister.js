import React, { useState } from 'react';
import { Redirect, Link } from "react-router-dom";
import LoginAndRegisterNav from './LoginAndRegisterNav';
import LoginAndRegisterFrom from './LoginAndRegisterFrom';
import { MarketToken } from '../../constants';
import { CustomerAuthorization, MarketAdminAuthorization, TraderAdminAuthorization } from '../../utils';
import { Mutation } from 'react-apollo';
import { MARKET_ADMIN_REGISTER_MUTATION } from '../../graphql-types';

function MarketAdminRegister(props) {
  const { userType, formLogin, setRedirect } = props;
  
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");
  
  const inputValues = {
    email, setEmail,
    firstName, setFirstName,
    lastName, setLastName,
    password, setPassword,
  };
  
  const authorized = () => {
    if (CustomerAuthorization()) return <Redirect push to='/markets' />
    if (MarketAdminAuthorization()) return <Redirect push to='/market_admin' />
    if (TraderAdminAuthorization()) return <Redirect push to='/trader_admin' />
    return false
  };

  const tokenSet = (token) => localStorage[MarketToken] = token;
  
  return (
    <div className="login-and-register form-container">
      {authorized()}
      <LoginAndRegisterNav {...props} />
      <Mutation mutation={MARKET_ADMIN_REGISTER_MUTATION} >
        {(marketAdminRegister, { data, error, loading }) => (
          <>
            <div className="error-message error">
              {data && data.marketAdminRegister.token && tokenSet(data.marketAdminRegister.token) && setRedirect(true)}
              {error && <p>Error: {error.message}</p>}
            </div>
            <LoginAndRegisterFrom 
              loading={loading}
              formLogin={formLogin} 
              inputValues={inputValues}
              mutation={marketAdminRegister}
            />
            <Link to={"/" + userType + (formLogin ? '/register' : '/login')}>
              <button className="form-type btn">{formLogin ? "Change to Register Form" : "Change to Login Form"}</button>
            </Link>
          </>
        )}  
      </Mutation>
    </div>
  );
};

export default MarketAdminRegister;