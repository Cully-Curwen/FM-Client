import React from 'react';
import { NavLink } from 'react-router-dom';
import { TRADER_MARKET_NAME_QUERY, MARKET_NAME_QUERY } from '../../graphql-types';
import { CustomerAuthorization } from '../../utils';
import basket from '../../icons/shopping-basket-solid.svg';
import { Query } from 'react-apollo';

function NavBasket(props) {
  const id = props.match.params.id;

  if (props.pathSeg === 'trader') return (
    <Query query={TRADER_MARKET_NAME_QUERY} variables={{ traderCardId: id }} >
      {({ data, loading, error }) => {
        if (loading) return <></>;
        if (error) return <></>;
        const { id } = data.traderCardDetails.market;

        return CustomerAuthorization() 
        ? (
            <NavLink 
              to={'/market/' + id + '/basket'} 
              className="w3-bar-item w3-button"
            >
              <img src={basket} alt='Market Basket' className="basket" />
            </NavLink>
        )
        : (<></>)
      }}
    </Query>
  );

  if (props.pathSeg === 'market') return (
    <Query query={MARKET_NAME_QUERY} variables={{ marketId: id }} >
      {({ data, loading, error }) => {
        if (loading) return <></>;
        if (error) return <></>;
        
        return CustomerAuthorization() 
        ? (
            <NavLink 
              to={'/market/' + id + '/basket'} 
              className="w3-bar-item w3-button"
            >
              <img src={basket} alt='Market Basket' className="basket" />
            </NavLink>
        )
        : (<></>)
      }}
    </Query>
  );
};

export default NavBasket;