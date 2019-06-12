import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { CustomerAuthorization } from '../utils';
import LoginAndRegister from './LoginAndRegister';
import Markets from './Markets'

import { CUSTOMER_DATA_QUERY } from '../graphql'

function Customer(props) {
  const [customerData, setCustomerData] = useState({});

  const handleLoginAndRegisterSubmit = ({customer}) => {
    setCustomerData(customer);
  };
  
  return (
    <div className="customer">
      <Switch>
        <Route path='/customer/login' component={props => 
          <LoginAndRegister 
            {...props} 
            userType={'customer'} 
            formLogin={true} 
            handleSubmitState={handleLoginAndRegisterSubmit}
          />
        } />
        <Route path='/customer/register' component={props => 
          <LoginAndRegister 
            {...props} 
            userType={'customer'} 
            formLogin={false} 
            handleSubmitState={handleLoginAndRegisterSubmit}
          />
        } />
        {CustomerAuthorization() 
          ? <>
            <Route path='/customer/markets' component={props => <Markets {...props} />} />
            <Redirect from='/customer' to='/customer/markets' />
          </>
          : <Redirect to='/customer/login' />
        }
      </Switch>
    </div>
  );
};

export default Customer; 
