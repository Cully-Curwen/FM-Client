import React from 'react';
import { NavLink } from 'react-router-dom';
import { useQuery } from 'react-apollo-hooks';
import { TRADER_MARKET_NAME_QUERY, MARKET_NAME_QUERY } from '../../graphql-types';

function MarketName(props) {
  const QUERY = props.market ? MARKET_NAME_QUERY : TRADER_MARKET_NAME_QUERY;
  const variables = props.market ? { marketId: props.match.params.id } : { traderCardId: props.match.params.id };
  const { data, error, loading } = useQuery(QUERY, { variables });
  
  if (loading) {
    return <div></div>;
  };

  const name = props.market ? data.marketDetails.name : data.traderCardDetails.market.name;
  const id = props.market ? data.marketDetails.id : data.traderCardDetails.market.id;

  return (
    <NavLink className="market-name" to={'/market/' + id} >
      <h3>{name}</h3>
    </NavLink>
  );
};

export default MarketName;
