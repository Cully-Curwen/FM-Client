import React from 'react';
import '../styling/App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Authorization from '../utils';
// import Splash from './Splash';
import Customer from './Customer';
import MarketAdmin from './MarketAdmin';
import TraderAdmin from './TraderAdmin';
import LoginAndRegister from './LoginAndRegister';

function App() {
  const { CustomerAuthorization, MarketAdminAuthorization, TraderAdminAuthorization } = Authorization();

  const authorized = () => {
    if (CustomerAuthorization) return <Redirect to='/customer' />
    if (MarketAdminAuthorization) return <Redirect to='/market_admin' />
    if (TraderAdminAuthorization) return <Redirect to='/trader_admin' />
    return <Redirect to='/login/customer' />
  };

  const routesLoginAndRegister = (props, login) => (
    <Switch>
      <Route path={props.match.url + "/customer"} component={(props) => 
        <LoginAndRegister {...props} userType={"customer"} formLogin={login} />} 
      />
      <Route path={props.match.url + "/trader_admin"} component={(props) => 
        <LoginAndRegister {...props} userType={"trader_admin"} formLogin={login} />} 
      />
      <Route path={props.match.url + "/market_admin"} component={(props) => 
        <LoginAndRegister {...props} userType={"market_admin"} formLogin={login} />} 
      />
    </Switch>
  );

  return (
    <div className="App">
      <div className="header">
        <h1>Reseverd for Mr Header</h1>
      </div>
      <div className="body">
        <Switch>
            <Route path="/login" component={(props) => routesLoginAndRegister(props, true)} />
            <Route path="/register" component={(props) => routesLoginAndRegister(props, false)} />
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
