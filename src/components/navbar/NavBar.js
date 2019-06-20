import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styling/NavBar.css';
import { Route } from 'react-router-dom';
import AccountMenu from "./AccountMenu";
import MarketName from './MarketName'

function NavBar(props) {

  return (
    <div className='navbar w3-green' >
      <div className="nav-list">
        <NavLink 
          exact
          to='/customer/markets'
          className="w3-bar-item w3-button"
          >
          Markets
        </NavLink>
      </div>
      <div className="nav-market">
        <Route path='/market/:id' render={props => <MarketName {...props} pathSeg={'market'} />} />
        <Route path='/trader/:id' render={props => <MarketName {...props} pathSeg={'trader'} />} />
      </div>
      <div className="nav-account" id="account" >
        <AccountMenu />
      </div>
    </div>
  );
};

export default NavBar;