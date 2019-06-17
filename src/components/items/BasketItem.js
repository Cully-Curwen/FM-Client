import React from 'react';
import { Mutation } from 'react-apollo';
import { CART_UPDATE_ITEM_MUTATION, CART_REMOVE_ITEM_MUTATION } from '../../graphql-types';

function Item(props) {
  console.log(props);
  
  const { marketId } = props;
  const { traderCardId, itemId, name, description, quantity, price } = props.item;
  const item = { traderCardId, itemId, name, description, price };

  return (
    <div className="item" >
      <div className="name">
        <h4>{name}</h4>
      </div>
      <div className="price">
        <h4>{formatPrice(price)}</h4>
      </div>
      <div className="quantity">
        <Mutation 
          mutation={CART_UPDATE_ITEM_MUTATION} 
        >
          {(cartUpdateItem, { loading, error }) => (
            <form className="quantitiy-input" >
              <input 
                type="number" 
                name="quantity" 
                min={0}
                value={quantity}
                onChange={event => cartUpdateItem({variables: { marketId, item: { ...item, quantity: Number(event.target.value) }}})}
                disabled={loading}
              />
              {error && <p>{error.message}</p>}
            </form>
          )}
        </Mutation>
      </div>
      <div className="description">
        <p>{description}</p>
      </div>
        <Mutation mutation={CART_REMOVE_ITEM_MUTATION} >
          {(cartRemoveItem, { loading, error }) => (
            <div className="button">
              <button 
                onClick={() => cartRemoveItem({variables: { marketId, item: { ...item, quantity: Number(0) } }})}
                disabled={loading} 
              >Remove Item</button>
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
