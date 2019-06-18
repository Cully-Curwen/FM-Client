import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styling/NavBar.css';
import { Route } from 'react-router-dom';
import AccountMenu from "./AccountMenu";
import MarketName from './MarketName'

function NavBar(props) {

  return (
    <div className='w3-bar w3-green' >
      <div className="w3-bar-item w3-cell w3-left list">
        <NavLink 
          exact
          to='/customer/markets'
          className="w3-bar-item w3-button"
          >
          Market List
        </NavLink>
      </div>
      <div className="w3-bar-item w3-cell market">
        <Route path='/market/:id' render={props => <MarketName {...props} pathSeg={'market'} />} />
        <Route path='/trader/:id' render={props => <MarketName {...props} pathSeg={'trader'} />} />
      </div>
      <div className="w3-bar-item w3-cell w3-right account">
        <AccountMenu />
      </div>
    </div>
  );
};

export default NavBar;