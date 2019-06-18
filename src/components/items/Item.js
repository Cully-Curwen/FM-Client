import React from 'react';
import { Mutation } from 'react-apollo';
import { CART_ADD_ITEM_MUTATION } from '../../graphql-types';

function Item(props) {
  const { traderCardId, marketId } = props;
  const { id, name, description, stock, price } = props.item;
  const item = { traderCardId, itemId: id, name, description, quantity: 1, price };

  return (
    <div className="item" >
      <div className="name">
        <h4>{name}</h4>
      </div>
      <div className="price">
        <h4>{formatPrice(price)}</h4>
      </div>
      <div className="stock">
        <h4>{stock}</h4>
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
        <Mutation mutation={CART_ADD_ITEM_MUTATION} >
          {(cartAddItem, { loading, error }) => (
            <div className="button">
              <button 
                onClick={() => cartAddItem({variables: { marketId, item }})}
                disabled={loading} 
              >Add to Basket</button>
              {error && <p>{error.message}</p>}
            </div>
          )}
        </Mutation>
    </div>
  );
};

function formatPrice(value) {
  return (value * Math.pow(10, -2)).toLocaleString('en-GB', {
    style: 'currency',
    currency: 'GBP',
    currencyDisplay: 'symbol',
    useGrouping: true
  });
};

export default Item;
