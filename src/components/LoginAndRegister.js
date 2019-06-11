import React, { useState } from 'react';
import { Link } from "react-router-dom";
// import { useMutation } from 'react-apollo-hooks';
// import gql from 'graphql-tag';

function LoginAndRegister(props) {
  const { userType, formLogin } = props;
  const customer = "customer";
  const traderAdmin = "trader_admin";
  const marketAdmin = "market_admin";

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = event => {
    event.preventDefault();

  };

  return (
    <div className="login-and-register form-container">
      <div className="account-type">
        <Link to={(formLogin ? '/login' : '/register') + '/customer'} >
          <button 
            className="user-type"
            style={userType === customer ? {backgroundColor: 'blue'} : {} }
          >Customer</button>
        </Link>
        <Link to={(formLogin ? '/login' : '/register') + '/trader_admin'} >
          <button 
            className="user-type"
            style={userType === traderAdmin ? {backgroundColor: 'blue'} : {} }
          >Trader</button>
        </Link>
        <Link to={(formLogin ? '/login': '/register') + '/market_admin'} >
          <button 
            className="user-type"
            style={userType === marketAdmin ? {backgroundColor: 'blue'} : {} }
          >Market Admin</button>
        </Link>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit} >
          <label htmlFor="email">Eamil: </label>
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
        <Link to={(formLogin ? '/register' : '/login') + "/" + userType}>
          <button className="form-type btn">{formLogin ? "Change to Register Form" : "Change to Login Form"}</button>
        </Link>
      </div>
    </div>
  );
};

export default LoginAndRegister;
