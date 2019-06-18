import React from 'react';
import { Query } from 'react-apollo';
import { CUSTOMER_DATA_QUERY } from '../../graphql-types';
import BasketItem from '../items/BasketItem';
import { formatPrice } from "../../utils";

function MarketBasket(props) {
  const id = props.match.params.id

  const totalPrice = (array) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return array.map(item => item.price * item.quantity).reduce(reducer);
  };

  return (
    <Query query={CUSTOMER_DATA_QUERY} >
      {({ data, loading, error }) => {
        if (loading) return <p>Loading...</p>
        if (error) return <p>{error.message}</p>
        
        const MarketCart = data.customerData.shoppingCarts.filter(obj => obj.id === id );
        if (MarketCart) return <p>Empty Basket</p>
        const [{ market, items }] = MarketCart;
        return (
          <div className="basket-list">
            <h3>{market.name}</h3>
            <ul>
              {items.map(item => 
              <BasketItem key={item.itemId} item={item} marketId={market.id} />
              )}
            </ul>
            <h3>Total: {formatPrice(totalPrice(items))}</h3>
          </div>
        );
      }}
    </Query>
  );
};

export default MarketBasket;
