import React, { useState } from 'react';
import '../styling/App.css';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { CustomerAuthorization, MarketAdminAuthorization, TraderAdminAuthorization } from '../utils';
import NavBar from "./navbar/NavBar";
import Markets from './Markets';
import Market from './Market';
import TraderCard from './TraderCard';
import MarketAdminDashboard from './market_admin/MarketAdminDashboard';
import TraderAdminDashboard from './trader_admin/TraderAdminDashboard';
import CustomerLogin from './login_or_register/CustomerLogin';
import CustomerRegister from './login_or_register/CustomerRegister';
import MarketAdminLogin from './login_or_register/MarketAdminLogin';
import MarketAdminRegister from './login_or_register/MarketAdminRegister';
import TraderAdminLogin from './login_or_register/TraderAdminLogin';
import TraderAdminRegister from './login_or_register/TraderAdminRegister';
import ShoppingCarts from './customer/ShoppingCarts';
import MarketBasket from './customer/MarketBasket';

function App(props) {
  const [redirect, setRedirect] = useState(false);
  
  const authorized = () => {
    if (CustomerAuthorization()) {
      setRedirect(false);
      return <Redirect to='/markets' />
    };
    if (MarketAdminAuthorization()) {
      setRedirect(false);
      return <Redirect to='/market_admin' />
    };
    if (TraderAdminAuthorization()) {
      setRedirect(false);
      return <Redirect to='/trader_admin' />
    };
  };

  return (
    <div className="App">
      {redirect && authorized()}
      <div className="w3-top">
        <NavBar {...props} />
      </div>
      <div className="body">
        <Switch>
          <Route path='/customer/login' component={props => 
            <CustomerLogin 
              {...props} 
              userType={'customer'} 
              formLogin={true} 
              setRedirect={setRedirect}
            />
          } />
          <Route path='/customer/register' component={props => 
            <CustomerRegister 
              {...props} 
              userType={'customer'} 
              formLogin={false} 
              setRedirect={setRedirect}
            />
          } />
          <Route path='/customer/shopping_carts' component={props => 
            <ShoppingCarts />
          } />
          <Route path='/markets' component={props => <Markets {...props} />} />
          <Route path='/market/:id/basket' component={props => <MarketBasket {...props} />} />
          <Route path='/market/:id' component={props => <Market {...props} />} />
          <Route path='/market_admin/login' component={props => 
            <MarketAdminLogin 
              {...props} 
              userType={'market_admin'} 
              formLogin={true} 
              setRedirect={setRedirect}
            />
          } />
          <Route path='/market_admin/register' component={props => 
            <MarketAdminRegister 
              {...props} 
              userType={'market_admin'} 
              formLogin={false} 
              setRedirect={setRedirect}
            />
          } />
          <Route path='/trader/:id' component={props => <TraderCard {...props} />} />
          <Route path='/trader_admin/login' component={props => 
            <TraderAdminLogin  
              {...props} 
              userType={'trader_admin'} 
              formLogin={true} 
              setRedirect={setRedirect}
            /> 
          } />
          <Route path='/trader_admin/register' component={props => 
            <TraderAdminRegister 
              {...props} 
              userType={'trader_admin'} 
              formLogin={false} 
              setRedirect={setRedirect}
            />} 
          />
          <Route path="/market_admin" component={props => 
            <MarketAdminDashboard {...props} />
          } />
          <Route path='/trader_admin' component={props =>
            <TraderAdminDashboard />
          } />
          <Route path="/" component={() => {
            authorized();
            return <Redirect to='/customer/login' />
          }} />
          <Redirect to='/' />
          <Route component={props => <h1>404 - Not Found</h1>}/>
        </Switch>
      </div>
    </div>
  );
};


export default withRouter(App);
