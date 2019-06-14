import React, { useState } from 'react';
import { Link, Redirect } from "react-router-dom";
import { useMutation } from 'react-apollo-hooks';
import { CustomerToken, MarketToken, TraderToken } from '../constants';
import { CustomerAuthorization, MarketAdminAuthorization, TraderAdminAuthorization } from '../utils';

import { 
  CUSTOMER_REGISTER_MUTATION,
  CUSTOMER_LOGIN_MUTATION,
  MARKET_ADMIN_REGISTER_MUTATION,
  MARKET_ADMIN_LOGIN_MUTATION,
  TRADER_ADMIN_REGISTER_MUTATION,
  TRADER_ADMIN_LOGIN_MUTATION,
} from '../graphql-types'

function LoginAndRegister(props) {
  const { userType, formLogin } = props;
  const customer = "customer";
  const traderAdmin = "trader_admin";
  const marketAdmin = "market_admin";

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const customerRegister = useMutation(CUSTOMER_REGISTER_MUTATION, {
    update: (proxy, mutationResult) => {
      const { token } = mutationResult.data.customerRegister;
      localStorage[CustomerToken] = token;
    },
    variables: { email, firstName, lastName, password }
  });

  const customerLogin = useMutation(CUSTOMER_LOGIN_MUTATION, {
    update: (proxy, mutationResult) => {
      const { token } = mutationResult.data.customerLogin;
      localStorage[CustomerToken] = token;
    },
    variables: { email, password },
  });

  const marketAdminRegister = useMutation(MARKET_ADMIN_REGISTER_MUTATION, {
    update: (proxy, mutationResult) => {
      const { token } = mutationResult.data.marketAdminRegister;
      localStorage[MarketToken] = token;
    },
    variables: { email, firstName, lastName, password }
  });

  const marketAdminLogin = useMutation(MARKET_ADMIN_LOGIN_MUTATION, {
    update: (proxy, mutationResult) => {
      const { token } = mutationResult.data.marketAdminLogin;
      localStorage[MarketToken] = token;
    },
    variables: { email, password }
  });

  const traderAdminRegister = useMutation(TRADER_ADMIN_REGISTER_MUTATION, {
    update: (proxy, mutationResult) => {
      const { token } = mutationResult.data.traderAdminRegister;
      localStorage[TraderToken] = token;
    },
    variables: { email, firstName, lastName, password }
  });

  const traderAdminLogin = useMutation(TRADER_ADMIN_LOGIN_MUTATION, {
    update: (proxy, mutationResult) => {
      const { token } = mutationResult.data.traderAdminLogin;
      localStorage[TraderToken] = token;
    },
    variables: { email, password }
  });

  const handleSubmit = event => {
    event.preventDefault();
    switch (userType) {
      case customer:
        formLogin
          ? customerLogin()
          : customerRegister();
        break;
      case traderAdmin:
        formLogin
          ? traderAdminLogin()
          : traderAdminRegister();
        break;
      case marketAdmin:
        formLogin
          ? marketAdminLogin()
          : marketAdminRegister();
        break;
      default:
        break;
    };
  };

  const authorized = () => {
    if (CustomerAuthorization()) return <Redirect push to='/markets' />
    if (MarketAdminAuthorization()) return <Redirect push to='/market_admin' />
    if (TraderAdminAuthorization()) return <Redirect push to='/trader_admin' />
  };

  return (
    <div className="login-and-register form-container">
      {authorized()}
      <div className="account-type">
        <Link to={'/customer' + (formLogin ? '/login' : '/register')} >
          <button 
            className="user-type"
            style={userType === customer ? {backgroundColor: 'blue'} : {} }
          >Customer</button>
        </Link>
        <Link to={'/trader_admin' + (formLogin ? '/login' : '/register')} >
          <button 
            className="user-type"
            style={userType === traderAdmin ? {backgroundColor: 'blue'} : {} }
          >Trader</button>
        </Link>
        <Link to={'/market_admin' + (formLogin ? '/login': '/register')} >
          <button 
            className="user-type"
            style={userType === marketAdmin ? {backgroundColor: 'blue'} : {} }
          >Market Admin</button>
        </Link>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit} >
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          <br/>
          {formLogin ? null : 
            <>
              <label htmlFor="firstName">First Name: </label>
              <input type="text" name="firstName" value={firstName} onChange={(event) => setFirstName(event.target.value)} />
              <br/>
              <label htmlFor="lastName">Last Name: </label>
              <input type="text" name="lastName" value={lastName} onChange={(event) => setLastName(event.target.value)} />
              <br/>
            </>
          }
          <label htmlFor="password">Password: </label>
          <input type="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} />
          <br/>
          <input type="submit" value={formLogin ? "Login" : "Register"} />
        </form>
        <Link to={"/" + userType + (formLogin ? '/register' : '/login')}>
          <button className="form-type btn">{formLogin ? "Change to Register Form" : "Change to Login Form"}</button>
        </Link>
      </div>
    </div>
  );
};

export default LoginAndRegister;
