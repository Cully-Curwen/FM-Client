import React from 'react';
import { Link } from 'react-router-dom';

function LoginAndRegisterFrom(props) {
  const { email, setEmail, firstName, setFirstName, lastName, setLastName, password, setPassword } = props.inputValues;
  const { mutation, formLogin, userType, loading } = props;

  const variables = {
    email,
    firstName,
    lastName,
    password,
  };

  const handleSubmit = event => {
    event.preventDefault();
    mutation({ variables })
  }

  return (
    <form onSubmit={handleSubmit} className="" >
      <div className="form-input-container">
        <div className="form-label-div">
          <label className="form-label" htmlFor="email">Email: </label>
        </div>
        <div className="form-input-div">
          <input
            type="email" 
            className="form-input"
            name="email" 
            value={email} 
            onChange={(event) => setEmail(event.target.value)} 
          />
        </div>
      </div>
      {formLogin ? null : 
        <>
          <div className="form-input-container">
            <div className="form-label-div">
              <label className="form-label" htmlFor="firstName">First Name: </label>
            </div>
            <div className="form-input-div">
              <input 
                type="text" 
                className="form-input"
                name="firstName" 
                value={firstName} 
                onChange={(event) => setFirstName(event.target.value)} 
              />
            </div>
          </div>
          <div className="form-input-container">
            <div className="form-label-div">
              <label className="form-label" htmlFor="lastName">Last Name: </label>
            </div>
            <div className="form-input-div">
              <input 
                type="text" 
                className="form-input"
                name="lastName" 
                value={lastName} 
                onChange={(event) => setLastName(event.target.value)} 
              />
            </div>
          </div>
        </>
      }
      <div className="form-input-container">
        <div className="form-label-div">
          <label className="form-label" htmlFor="password">Password: </label>
        </div>
        <div className="form-input-div">
          <input 
            type="password" 
            className="form-input"
            name="password" 
            value={password} 
            onChange={(event) => setPassword(event.target.value)} 
          />
        </div>
      </div>
      <div className="form-submit-div">
        <input 
          className="form-submit-button"
          disabled={loading} 
          type="submit" 
          value={formLogin ? "Login" : "Register"} 
        />
      </div>
      <div className="change-form-div">
        <Link to={"/" + userType + (formLogin ? '/register' : '/login')}>
          <button 
            className="change-form-button"
          >
            {formLogin ? "Change to Register Form" : "Change to Login Form"}
          </button>
        </Link>
      </div>
    </form>
  );
};

export default LoginAndRegisterFrom;
