import React from 'react';
import { NavLink } from 'react-router-dom';

function AccountMenu(props) {
  return (
    <div className="account-menu">
      <NavLink to='/' ><button onClick={() => localStorage.clear()} >Log Out</button></NavLink>
      <NavLink to='/customer/shopping_carts' ><button >Shopping Carts</button></NavLink>
    </div>
  );
};

export default AccountMenu;
