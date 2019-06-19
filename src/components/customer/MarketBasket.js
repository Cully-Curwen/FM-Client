import React from 'react';
import { Query } from 'react-apollo';
import { CUSTOMER_DATA_QUERY } from '../../graphql-types';
import BasketItem from '../items/BasketItem';
import { formatPrice } from "../../utils";

function MarketBasket(props) {
  const id = props.match.params.id

  const totalPrice = (array) => {
    if (array.length === 0) return 0;
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return array.map(item => item.price * item.quantity).reduce(reducer);
  };

  return (
    <Query query={CUSTOMER_DATA_QUERY} >
      {({ data, loading, error }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>{error.message}</p>
        
        const MarketCart = data.customerData.shoppingCarts.filter(obj => obj.id === id );
        if (!MarketCart) return <div>Empty Basket</div>
        const [{ market, items }] = MarketCart;
        return (
          <div className="basket-list w3-panel">
            <h3>{market.name}</h3>
            <div>
              {items.map(item => 
              <BasketItem key={item.itemId} item={item} marketId={market.id} />
              )}
            </div>
            <h3>Total: {formatPrice(totalPrice(items))}</h3>
          </div>
        );
      }}
    </Query>
  );
};

export default MarketBasket;
