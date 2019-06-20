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
        <div className="item-text">
          {name}
        </div>
        <div className="item-text">
          {formatPrice(price)}
        </div>
        <div className="item-text">
          <Mutation 
            mutation={CART_UPDATE_ITEM_MUTATION} 
          >
            {(cartUpdateItem, { loading, error }) => (
              <form className="item-quantity-input" >
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
        <div className="item-text">
          {formatPrice(price * quantity)}
        </div>
      </div>
      <div className="item-row">
        <div className="item-text item-description">
          <p>{description}</p>
        </div>
      </div>
      </div>
      <div className="item-column item-buttons-col">
        <Mutation mutation={CART_REMOVE_ITEM_MUTATION} >
          {(cartRemoveItem, { loading, error }) => (
            <button 
              className="item-button"
              onClick={() => cartRemoveItem({variables: { marketId, item: { ...item, quantity: Number(0) } }})}
              disabled={loading} 
            >
              Remove
            </button>
          )}
        </Mutation>
      </div>
    </div>
  );
};

export default Item;
