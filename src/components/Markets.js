import React, {  } from 'react';
import { Link } from 'react-router-dom';
import { Query } from 'react-apollo';
import MarketTile from './MarketTile';
import { MARKET_LIST_QUERY } from '../graphql-types';

function Markets(props) {
  return (
    <Query query={MARKET_LIST_QUERY} >
      {({ data, error, loading }) => {
        if (loading) { return <div>Loading...</div>; };
        if (error) { return <div>Error! {error.message}</div> };

        return (
          <div className="markets panel list">
            {data.marketsList.map(market => 
              <Link className="tablink" key={market.id} to={'/market/' + market.id } >
                <MarketTile market={market} />
              </Link>
            )}
          </div>
        );
      }}    
    </Query>
  );
};

export default Markets;