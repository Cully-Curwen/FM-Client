import React from 'react';
import { NavLink, Route } from 'react-router-dom';

function AccountMenu(props) {
  return (
    <div className="account-menu">
      <Route path='/market/:id' component={props => (
        <NavLink to='/customer/market_basket' ><button >Market Basket</button></NavLink>
      )} />
      <NavLink to='/customer/shopping_carts' ><button >Shopping Carts</button></NavLink>
      <NavLink exact to='/' ><button onClick={() => localStorage.clear()} >Log Out</button></NavLink>
    </div>
  );
};

export default AccountMenu;
