import React from 'react';
import { NavLink, Link } from 'react-router-dom';

function NavBar(props) {

  // const customer = props.match.path.toString.include("customer");

  return (
    <nav styling={{ display: 'flex', justifyContent: 'space-between' }}>
      <NavLink 
        exact
        to='/customer/markets'
        activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}
      >Market List</NavLink>
      {/* {customer ? <NavLink >Shopping Basket</NavLink> : null } */}
      <NavLink 
        exact
        to='/customer' 
        activeStyle={{
          fontWeight: "bold",
          color: "red"
        }}
      >Customer</NavLink>
        <button 
          className="SignOut"
          onClick={() => localStorage.clear()}
        >
          <Link to='/customer/login' >
            SignOut
          </Link>
        </button>
    </nav>
  );
};

export default NavBar;