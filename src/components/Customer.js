import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CustomerAuthorization } from '../utils';
import LoginAndRegister from './LoginAndRegister';

function Customer(props) {
  const [customerData, setCustomerData] = useState({});

  const handleLoginAndRegisterSubmit = ({customer}) => {
    setCustomerData(customer);
  };
  
  return (
    <div className="customer">
      <p>{Object.keys(customerData)}</p>
      <Switch>
        <Route path='/customer/login' render={props => 
          <LoginAndRegister 
            {...props} 
            userType={'customer'} 
            formLogin={true} 
            handleSubmitState={handleLoginAndRegisterSubmit}
          />
        } />
        <Route path='/customer/register' render={props => 
          <LoginAndRegister 
            {...props} 
            userType={'customer'} 
            formLogin={false} 
            handleSubmitState={handleLoginAndRegisterSubmit}
          />
        } />
        <Route path='/customer/markets' component={props => <h1>Markets</h1>} />
        {CustomerAuthorization 
          ? <Route path='/customer/markets' component={props => <h1>Markets</h1>} />
          : <Redirect to='/customer/login' />
        }
      </Switch>
    </div>
  );
};

export default Customer; 
