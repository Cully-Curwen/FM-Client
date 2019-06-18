import React from 'react';
import { Query } from 'react-apollo';
import { CUSTOMER_DATA_QUERY } from '../../graphql-types';
import BasketItem from '../items/BasketItem';

function MarketBasket(props) {
  const id = props.match.params.id

  return (
    <Query query={CUSTOMER_DATA_QUERY} >
      {({ data, loading, error }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>{error.message}</p>
        
        const [{ market, items }] = data.customerData.shoppingCarts.filter(obj => obj.id === id );
        return (
          <div className="basket-list">
            <h4>{market.name}</h4>
            <ul>
              {items.map(item => 
              <BasketItem key={item.itemId} item={item} marketId={market.id} />
              )}
            </ul>
          </div>
        );
      }}
    </Query>
  );
};

export default MarketBasket;
