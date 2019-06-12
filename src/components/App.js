import React from 'react';
import '../styling/App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CustomerAuthorization, MarketAdminAuthorization, TraderAdminAuthorization } from '../utils';
// import Splash from './Splash';
import NavBar from "./NavBar";
import Customer from './Customer';
import MarketAdmin from './MarketAdmin';
import TraderAdmin from './TraderAdmin';

function App() {
  const authorized = () => {
    if (CustomerAuthorization()) return <Redirect to='/customer' />
    if (MarketAdminAuthorization()) return <Redirect to='/market_admin' />
    if (TraderAdminAuthorization()) return <Redirect to='/trader_admin' />
    return <Redirect to='/login/customer' />
  };

  return (
    <div className="App">
      <div className="header">
        <NavBar />
      </div>
      <div className="body">
        <Switch>
            <Route path="/customer" component={Customer} />
            <Route path="/market_admin" component={MarketAdmin} />
            <Route path="/trader_admin" component={TraderAdmin} />
            <Route path="/" component={() => authorized()} />
            <Route component={props => <h1>404 - Not Found</h1>}/>
          </Switch>
      </div>
    </div>
  );
};


export default App;
