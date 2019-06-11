import React from 'react';
import '../styling/App.css';
import { Switch, Route } from 'react-router-dom';
import Splash from './Splash';
import Customer from './Customer';
import MarketAdmin from './MarketAdmin';
import TraderAdmin from './TraderAdmin';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Reseverd for Mr Header</h1>
      </div>
      <div className="body">
        <Switch>
            <Route exact path="/customer" render={Customer} />
            <Route exact path="/market_admin" render={MarketAdmin} />
            <Route exact path="/trader_admin" render={TraderAdmin} />
            <Route exact path="/" render={Splash} />
            <Route render={props => <h1>404 - Not Found</h1>}/>
          </Switch>
      </div>
    </div>
  );
}

export default App;
