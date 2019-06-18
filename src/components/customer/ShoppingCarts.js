import React from 'react';
import { Query } from 'react-apollo';
import { CUSTOMER_DATA_QUERY } from '../../graphql-types';
import MarketBasketTile from './MarketBasketTile';

function ShoppingCarts(props) {
  return (
    <div className="shopping-carts">
      <Query query={CUSTOMER_DATA_QUERY}>
        {({ data, loading, error }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>{error.message}</p>;
          
          const shoppingCarts = data.customerData.shoppingCarts;
          return (
            <div className="basket-list">
              {shoppingCarts.map(basket => (
                <MarketBasketTile key={basket.market.id} basket={basket} />
              ))}
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default ShoppingCarts;
