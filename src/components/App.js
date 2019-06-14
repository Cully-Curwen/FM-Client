import React, { useState } from 'react';
import '../styling/App.css';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { CustomerAuthorization, MarketAdminAuthorization, TraderAdminAuthorization } from '../utils';
import NavBar from "./navbar/NavBar";
import LoginAndRegister from './LoginAndRegister';
import Markets from './Markets';
import Market from './Market';
import TraderCard from './TraderCard';
import { useQuery } from 'react-apollo-hooks';
import { CUSTOMER_DATA_QUERY } from '../graphql-types';
import MarketAdminDashboard from './market_admin/MarketAdminDashboard';

function App(props) {

  const { data, error, loading} = useQuery(CUSTOMER_DATA_QUERY);

  const authorized = () => {
    if (CustomerAuthorization()) return <Redirect to='/markets' />
    if (MarketAdminAuthorization()) return <Redirect to='/market_admin' />
    if (TraderAdminAuthorization()) return <Redirect to='/trader_admin' />
    return <Redirect to='/customer/login' />
  };

  return (
    <div className="App">
      <div className="header">
        <NavBar {...props} />
      </div>
      <div className="body">
        <Switch>
          <Route path='/customer/login' component={props => 
            <LoginAndRegister 
              {...props} 
              userType={'customer'} 
              formLogin={true} 
            />
          } />
          <Route path='/customer/register' component={props => 
            <LoginAndRegister 
              {...props} 
              userType={'customer'} 
              formLogin={false} 
            />
          } />
          <Route path='/markets' component={props => <Markets {...props} />} />
          <Route path='/market/:id' component={props => <Market {...props} />} />
          <Route path='/market_admin/login' component={props => 
            <LoginAndRegister 
              {...props} 
              userType={'market_admin'} 
              formLogin={true} 
            />
          } />
          <Route path='/market_admin/register' component={props => 
            <LoginAndRegister 
              {...props} 
              userType={'market_admin'} 
              formLogin={false} 
            />
          } />
          <Route path='/trader/:id' component={props => <TraderCard {...props} />} />
          <Route path='/trader_admin/login' component={props => 
            <LoginAndRegister 
              {...props} 
              userType={'trader_admin'} 
              formLogin={true} 
            /> 
          } />
          <Route path='/trader_admin/register' component={props => 
            <LoginAndRegister 
              {...props} 
              userType={'trader_admin'} 
              formLogin={false} 
            />} 
          />
          <Route path="/market_admin" component={props => 
            <MarketAdminDashboard {...props} />
          } />
          <Route path="/" component={() => authorized()} />
          <Redirect to='/' />
          <Route component={props => <h1>404 - Not Found</h1>}/>
        </Switch>
      </div>
    </div>
  );
};


export default withRouter(App);
