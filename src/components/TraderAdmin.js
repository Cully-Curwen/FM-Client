import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { TraderAdminAuthorization } from '../utils';
import LoginAndRegister from './LoginAndRegister';

function TraderAdmin() {
  const [traderAdminData, setTraderAdminData] = useState({});
  const [traderCardsData, setTraderCardsData] = useState([]);

  const handleLoginAndRegisterSubmit = ({ traderAdmin, traderCards }) => {
    console.log(traderAdmin, traderCards);
    setTraderAdminData(traderAdmin);
    setTraderCardsData(traderCards);
  };
  
  return (
    <div className="trader_admin">
      <p>{Object.keys(traderAdminData)}</p>
      <p>{Object.keys(traderCardsData)}</p>
      <Switch>
        <Route path='/trader_admin/login' render={props => 
          <LoginAndRegister 
            {...props} 
            userType={'trader_admin'} 
            formLogin={true} 
            handleSubmitState={handleLoginAndRegisterSubmit}
          />
        } />
        <Route path='/trader_admin/register' render={props => 
          <LoginAndRegister 
            {...props} 
            userType={'trader_admin'} 
            formLogin={false} 
            handleSubmitState={handleLoginAndRegisterSubmit}
          />
        } />
        {TraderAdminAuthorization()
          ? <Route path='/trader_admin/markets' component={props => <h1>Markets</h1>} />
          : <Redirect to='/trader_admin/login' />
        }
      </Switch>
    </div>
  );
};

export default TraderAdmin;
