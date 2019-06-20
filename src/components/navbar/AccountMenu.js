import React, { useState } from 'react';
import { NavLink, Route } from 'react-router-dom';
import { CustomerAuthorization, MarketAdminAuthorization, TraderAdminAuthorization } from '../../utils';
import NavBasket from './NavBasket';
import menuBars from '../../icons/bars-solid.svg';

function AccountMenu(props) {
  const [menuClick, setMenuClick] = useState(false);
  
  if (CustomerAuthorization() | MarketAdminAuthorization() | TraderAdminAuthorization()) {
    return (<></>);
  }; 

  return (
    <div className="w3-bar">
      {CustomerAuthorization() &&
        <div className="navbar-basket">
          <Route path='/market/:id' component={props => ( <NavBasket {...props} pathSeg={'market'} /> )} />
          <Route path='/trader/:id' component={props => ( <NavBasket {...props} pathSeg={'trader'} /> )} />
        </div>
      }
      <div className="w3-dropdown-click">
        <div className="w3-bar-item w3-button" onClick={() => setMenuClick(!menuClick)} >
          <img src={menuBars} alt='Account-menu' className="menu-bars" />
        </div>
        <div 
          className={'dropdown w3-dropdown-content w3-bar-block w3-card-4' + (menuClick && ' w3-show') } 
          onClick={() => setMenuClick(!menuClick)}
        >
          {CustomerAuthorization() &&
            <NavLink 
              to='/customer/shopping_carts'
              className="w3-bar-item w3-button" 
            >Shopping Carts</NavLink>
          }
          <NavLink 
            exact 
            to='/' 
            className="w3-bar-item w3-button" 
          >
            <div 
              onClick={() => {
                localStorage.clear();
                document.location.reload(true);
                document.location.replace('/');
              }}  
            >Log Out</div>
          </NavLink>
        </div>
      </div>
      <div className="w3-clear"></div>
    </div>
  );
};

export default AccountMenu;
