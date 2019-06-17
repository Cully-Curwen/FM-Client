import React from 'react';
import { Query } from 'react-apollo';
import { CUSTOMER_DATA_QUERY } from '../../graphql-types';
import BasketItem from '../items/BasketItem';

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
              <div key={basket.market.id} className="market-basket-tile tile">
                <h4>{basket.market.name}</h4>
                <ul>
                  {basket.items.map(item => 
                    <BasketItem key={item.itemId} item={item} marketId={basket.market.id} />
                  )}
                </ul>
              </div>
              ))}
            </div>
          );
        }}
      </Query>
    </div>
  );
};

export default ShoppingCarts;
