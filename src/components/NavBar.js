import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../styling/NavBar.css';
import { Route } from 'react-router-dom';

function NavBar(props) {

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
        <button 
            className="SignOut"
            onClick={() => localStorage.clear()}
            >
            <Link to='/customer/login' >
              SignOut
            </Link>
        </button>
      </div>
    </div>
  );
};

export default NavBar;