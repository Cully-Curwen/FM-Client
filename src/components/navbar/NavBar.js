import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styling/NavBar.css';
import { Route } from 'react-router-dom';
import { CustomerAuthorization, MarketAdminAuthorization, TraderAdminAuthorization } from '../../utils';
import AccountMenu from "./AccountMenu";
import MarketName from './MarketName'

function NavBar(props) {
  
  const authorized = () => {
    if (CustomerAuthorization()) return (
      <AccountMenu />
    );
    if (MarketAdminAuthorization()) return (
      <AccountMenu />
    ); 
    if (TraderAdminAuthorization()) return (
      <AccountMenu />
    ); 
    return ( <h3>Welcome</h3> ); 
  };

  return (
    <div className='navbar' >
      <div className="nav-div list">
        <NavLink 
          exact
          to='/customer/markets'
          activeStyle={{
            fontWeight: "bold",
            color: "red"
          }}
        ><h4>Market List</h4></NavLink>
      </div>
      <div className="nav-div market">
        <Route path='/market/:id' render={props => <MarketName {...props} market={true} />} />
        <Route path='/trader/:id' render={props => <MarketName {...props} market={false} />} />
      </div>
      <div className="nav-div account">
        {authorized()}
      </div>
    </div>
  );
};

export default NavBar;