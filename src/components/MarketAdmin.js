import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { MarketAdminAuthorization } from '../utils';
import LoginAndRegister from './LoginAndRegister';

function MarketAdmin() {
  const [marketAdminData, setMarketAdminData] = useState({});
  const [marketsData, setMarketsData] = useState([]);

  const handleLoginAndRegisterSubmit = ({ marketAdmin, markets }) => {
    setMarketAdminData(marketAdmin);
    setMarketsData(markets);
  };
  
  return (
    <div className="market_admin">
      <p>{Object.keys(marketAdminData)}</p>
      <p>{Object.keys(marketsData)}</p>
      <Switch>
        <Route path='/market_admin/login' component={props => 
          <LoginAndRegister 
            {...props} 
            userType={'market_admin'} 
            formLogin={true} 
            handleSubmitState={handleLoginAndRegisterSubmit}
          />
        } />
        <Route path='/market_admin/register' component={props => 
          <LoginAndRegister 
            {...props} 
            userType={'market_admin'} 
            formLogin={false} 
            handleSubmitState={handleLoginAndRegisterSubmit}
          />
        } />
        {MarketAdminAuthorization()
          ? <>
            <Route path='/market_admin/markets' component={props => <h1>Markets</h1>} />
            <Redirect from='/market_admin'  to='/market_admin/markets' />
          </>
          : <Redirect to='/market_admin/login' />
        }
      </Switch>
    </div>
  );
};

export default MarketAdmin; 
