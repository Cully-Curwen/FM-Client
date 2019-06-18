import React from 'react';
import { Mutation } from 'react-apollo';
import { CART_UPDATE_ITEM_MUTATION, CART_REMOVE_ITEM_MUTATION } from '../../graphql-types';
import { formatPrice } from "../../utils";

function Item(props) {
  const { marketId } = props;
  const { traderCardId, itemId, name, description, quantity, price } = props.item;
  const item = { traderCardId, itemId, name, description, price };

  return (
    <div className="item w3-container w3-cell-row" >
      <div className="w3-cell-row">
        <div className="name w3-cell">
          <h4>{name}</h4>
        </div>
        <div className="price w3-cell">
          <h4>{formatPrice(price)}</h4>
        </div>
        <div className="quantity w3-cell">
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
        <div className="total-price w3-cell">
          <h4>{formatPrice(price * quantity)}</h4>
        </div>
      </div>
      <div className="description w3-cell-row">
        <p>{description}</p>
      </div>
      <div className="button w3-cell">
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
    </div>
  );
};

export default Item;
