import React from 'react';
import { Mutation } from 'react-apollo';
import { CART_ADD_ITEM_MUTATION } from '../../graphql-types';

function Item(props) {
  const { traderCardId, marketId } = props;
  const { id, name, description, stock, price } = props.item;
  const item = { traderCardId, itemId: id, name, description, quantity: 1, price };

  return (
    <div className="item-container" >
      <div className="item-column item-info">
        <div className="item-row">
          <div className="item-name item-text">
            {name}
          </div>
          <div className="item-stock item-text">
            {stock}
          </div>
          <div className="item-price item-text">
            {formatPrice(price)}
          </div>
        </div>
        <div className="item-row">
          <div className="item-description item-text">
            {description}
          </div>
        </div>
      </div>
      <div className="item-column item-buttons-col">
        <Mutation mutation={CART_ADD_ITEM_MUTATION} >
          {(cartAddItem, { loading, error }) => (
            <button 
              className="item-button"
              onClick={() => cartAddItem({variables: { marketId, item }})}
              disabled={loading} 
            >Add to Basket</button>
          )}
        </Mutation>
      </div>
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
