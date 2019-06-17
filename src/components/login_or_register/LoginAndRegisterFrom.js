import React from 'react';

function LoginAndRegisterFrom(props) {
  const { email, setEmail, firstName, setFirstName, lastName, setLastName, password, setPassword } = props.inputValues;
  const { mutation, formLogin, loading } = props;

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
      <input disabled={loading} type="submit" value={formLogin ? "Login" : "Register"} />
    </form>
  );
};

export default LoginAndRegisterFrom;
