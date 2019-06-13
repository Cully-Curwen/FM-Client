import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../../styling/NavBar.css';
import { Route } from 'react-router-dom';
import { useQuery } from 'react-apollo-hooks';
import { CUSTOMER_DATA_QUERY } from '../../graphql-types';
import { CustomerAuthorization, MarketAdminAuthorization, TraderAdminAuthorization } from '../../utils';
import AccountMenu from "./AccountMenu";

function NavBar(props) {
  
  const { data, error, loading} = useQuery(CUSTOMER_DATA_QUERY);

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
        <Route path='/market/:id' render={props => (
          <Link to={'/market/' + props.match.params.id} ><h2>{props.match.params.id}</h2></Link>
        )} />
        <Route path='/trader/:id' render={props => (
          <Link to={'/market/' + 'balls'} ><h2>{props.match.params.id}</h2></Link>
        )} />
      </div>
      <div className="nav-div account">
        {authorized()}
      </div>
    </div>
  );
};

export default NavBar;