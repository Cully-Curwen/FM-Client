import React from 'react';
import { Mutation } from 'react-apollo';
import { CART_UPDATE_ITEM_MUTATION, CART_REMOVE_ITEM_MUTATION } from '../../graphql-types';
import { formatPrice } from "../../utils";

function Item(props) {
  const { marketId } = props;
  const { traderCardId, itemId, name, description, quantity, price } = props.item;
  const item = { traderCardId, itemId, name, description, price };

  return (
    <div className="item-container" >
      <div className="item-column item-info">
      <div className="item-row">
        <div className="item-name item-text">
          <h4>{name}</h4>
        </div>
        <div className="item-price item-text">
          <h4>{formatPrice(price)}</h4>
        </div>
        <div className="item-quantity item-text">
          <Mutation 
            mutation={CART_UPDATE_ITEM_MUTATION} 
          >
            {(cartUpdateItem, { loading, error }) => (
              <form className="item-input" >
                <input 
                  type="number" 
                  name="input-quantity item-input" 
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
        <div className="total-item-price item-text">
          <h4>{formatPrice(price * quantity)}</h4>
        </div>
      </div>
      <div className="item-row">
        <div className="item-description item-text">
          <p>{description}</p>
        </div>
      </div>
      </div>
      <div className="item-column item-buttons-col">
        <Mutation mutation={CART_REMOVE_ITEM_MUTATION} >
          {(cartRemoveItem, { loading, error }) => (
            <button 
              className="item-button basket-remove"
              onClick={() => cartRemoveItem({variables: { marketId, item: { ...item, quantity: Number(0) } }})}
              disabled={loading} 
            >Remove Item</button>
          )}
        </Mutation>
      </div>
    </div>
  );
};

export default Item;
