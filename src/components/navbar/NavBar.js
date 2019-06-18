import React from 'react';
import { NavLink } from 'react-router-dom';
// import '../../styling/NavBar.css';
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
    <nav className='navbar navbar-nav navbar-dark bg-primary' >
      <div className="nav-item list">
        <NavLink 
          exact
          to='/'
          className="nav-item"
        ><h4>Market List</h4></NavLink>
      </div>
      <div className="nav-item market">
        <Route path='/market/:id' render={props => <MarketName {...props} pathSeg={'market'} />} />
        <Route path='/trader/:id' render={props => <MarketName {...props} pathSeg={'trader'} />} />
      </div>
      <div className="nav-item account">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        {authorized()}
      </div>
    </nav>
  );
};

export default NavBar;