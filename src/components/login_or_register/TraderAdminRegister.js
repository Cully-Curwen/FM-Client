import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import LoginAndRegisterNav from './LoginAndRegisterNav';
import LoginAndRegisterFrom from './LoginAndRegisterFrom';
import { TraderToken } from '../../constants';
import { CustomerAuthorization, MarketAdminAuthorization, TraderAdminAuthorization } from '../../utils';
import { Mutation } from 'react-apollo';
import { TRADER_ADMIN_REGISTER_MUTATION } from '../../graphql-types';

function TraderAdminRegister(props) {
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

  const tokenSet = (token) => localStorage[TraderToken] = token;
  
  return (
    <div className="login-and-register">
      {authorized()}
      <LoginAndRegisterNav {...props} />
      <Mutation mutation={TRADER_ADMIN_REGISTER_MUTATION} >
        {(traderAdminRegister, { data, error, loading }) => (
          <div className="form-container" >
            <div className="error-message error">
              {data && data.traderAdminRegister.token && tokenSet(data.traderAdminRegister.token) && setRedirect(true)}
              {error && <p>Error: {error.message}</p>}
            </div>
            <LoginAndRegisterFrom 
              loading={loading}
              formLogin={formLogin} 
              inputValues={inputValues}
              mutation={traderAdminRegister}
              userType={userType}
            />
          </div>
        )}  
      </Mutation>
    </div>
  );
};

export default TraderAdminRegister;