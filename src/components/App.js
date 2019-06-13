import React, { useState } from 'react';
import '../styling/App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CustomerAuthorization, MarketAdminAuthorization, TraderAdminAuthorization } from '../utils';
import NavBar from "./NavBar";
// import Customer from './Customer';
// import MarketAdmin from './MarketAdmin';
// import TraderAdmin from './TraderAdmin';
import LoginAndRegister from './LoginAndRegister';
import Markets from './Markets';
import Market from './Market';
import TraderCard from './TraderCard';

function App() {
  const authorized = () => {
    if (CustomerAuthorization()) return <Redirect to='/markets' />
    if (MarketAdminAuthorization()) return <Redirect to='/market_admin' />
    if (TraderAdminAuthorization()) return <Redirect to='/trader_admin' />
    return <Redirect to='/customer/login' />
  };

  const [customerData, setCustomerData] = useState({});
  const handleCustomerLoginAndRegister = ({customer}) => {
    setCustomerData(customer);
  };

  const [marketAdminData, setMarketAdminData] = useState({});
  const [marketsData, setMarketsData] = useState([]);
  const handleMarketAdminLoginAndRegister = ({ marketAdmin, markets }) => {
    setMarketAdminData(marketAdmin);
    setMarketsData(markets);
  };

  const [traderAdminData, setTraderAdminData] = useState({});
  const [traderCardsData, setTraderCardsData] = useState([]);
  const handleTraderAdminLoginAndRegister = ({ traderAdmin, traderCards }) => {
    setTraderAdminData(traderAdmin);
    setTraderCardsData(traderCards);
  };

  return (
    <div className="App">
      <div className="header">
        <NavBar />
      </div>
      <div className="body">
        <Switch>
          <Route path='/customer/login' component={props => 
            <LoginAndRegister 
              {...props} 
              userType={'customer'} 
              formLogin={true} 
              handleSubmitState={handleCustomerLoginAndRegister}
            />} 
          />
          <Route path='/customer/register' component={props => 
            <LoginAndRegister 
              {...props} 
              userType={'customer'} 
              formLogin={false} 
              handleSubmitState={handleCustomerLoginAndRegister}
            />} 
          />
          <Route path='/markets' component={props => <Markets {...props} />} />
          <Route path='/market/:id' component={props => <Market {...props} />} />
          <Route path='/market_admin/login' component={props => 
            <LoginAndRegister 
              {...props} 
              userType={'market_admin'} 
              formLogin={true} 
              handleSubmitState={handleMarketAdminLoginAndRegister}
            />} 
          />
          <Route path='/market_admin/register' component={props => 
            <LoginAndRegister 
              {...props} 
              userType={'market_admin'} 
              formLogin={false} 
              handleSubmitState={handleMarketAdminLoginAndRegister}
            />} 
          />
          <Route path='/trader/:id' component={props => <TraderCard {...props} />} />
          <Route path='/trader_admin/login' component={props => 
          <LoginAndRegister 
            {...props} 
            userType={'trader_admin'} 
            formLogin={true} 
            handleSubmitState={handleTraderAdminLoginAndRegister}
          />}
        />
        <Route path='/trader_admin/register' component={props => 
          <LoginAndRegister 
            {...props} 
            userType={'trader_admin'} 
            formLogin={false} 
            handleSubmitState={handleTraderAdminLoginAndRegister}
          />} 
        />
          {/* <Route path="/customer" component={Customer} /> */}
          {/* <Route path="/market_admin" component={MarketAdmin} /> */}
          {/* <Route path="/trader_admin" component={TraderAdmin} /> */}
          <Route path="/" component={() => authorized()} />
          <Redirect to='/' />
          <Route component={props => <h1>404 - Not Found</h1>}/>
        </Switch>
      </div>
    </div>
  );
};


export default App;
