import React from 'react';
import { NavLink } from 'react-router-dom';
import { TRADER_MARKET_NAME_QUERY, MARKET_NAME_QUERY } from '../../graphql-types';
import { Query } from 'react-apollo';

function MarketName(props) {
  const id = props.match.params.id;

  if (props.pathSeg === 'trader') return (
    <Query query={TRADER_MARKET_NAME_QUERY} variables={{ traderCardId: id }} >
      {({ data, loading, error }) => {
        if (loading) return <></>;
        if (error) return <></>;
        const { name, id } = data.traderCardDetails.market;

        return (
          <NavLink className="market-name" to={'/market/' + id} >
            <h3>{name}</h3>
          </NavLink>
        );
      }}
    </Query>
  );

  if (props.pathSeg === 'market') return (
    <Query query={MARKET_NAME_QUERY} variables={{ marketId: id }} >
      {({ data, loading, error }) => {
        if (loading) return <></>;
        if (error) return <></>;
        const name = data.marketDetails.name;
        
        return (
          <NavLink className="market-name" to={'/market/' + id} >
            <h3>{name}</h3>
          </NavLink>
        );
      }}
    </Query>
  );
};

export default MarketName;