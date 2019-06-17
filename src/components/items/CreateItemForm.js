import React, { useState } from 'react';
import { ITEM_CREATE_MUTATION, TRADER_ADMIN_DATA_QUERY } from '../../graphql-types';
import { Mutation } from 'react-apollo';
import CurrencyInput from './CurrencyInput';

function CreateItemForm(props) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [stock, setStock] = useState(0);
  const [price, setPrice] = useState(0);

  return (
    <Mutation 
      mutation={ITEM_CREATE_MUTATION}
      update={(cache, { data: { itemCreate } }) => {
        const { administeredTraders } = cache.readQuery({ query: TRADER_ADMIN_DATA_QUERY });
        cache.writeQuery({
          query: TRADER_ADMIN_DATA_QUERY,
          data: { administeredTraders: administeredTraders.inventory.concat([itemCreate]) },
        });
      }}
      onCompleted={() => props.setNewItemForm(false)}
    >
      {(itemCreate, {loading, error}) => (
        <form 
          className="create-item-form"
          onSubmit={event => {
            event.preventDefault();
            itemCreate({ variables: { name, description, stock, price } });
            event.target.reset();
          }}
        >
          <div className="item-name">
            <input
              type="text" 
              name="name"
              required
              value={name}
              onChange={event => setName(event.target.value)}
            />
          </div>
          <div className="item-stock">
            <input 
              type="number" 
              name="stock"
              required
              value={stock}
              onChange={event => setStock(event.target.value)}
            />
          </div>
          <div className="item-price">
            <CurrencyInput 
              name={"price"}
              required
              value={price}
              onChange={setPrice}
            />
          </div>
          <div className="item-button">
            <input 
              type="submit" 
              value="Add Item"
              disabled={loading}
            />
          </div>
          <div className="item-description">
            <textarea 
              name="description" 
              cols="30" 
              rows="10" 
              required
              value={description}
              onChange={event => setDescription(event.target.value)}
            />
          </div>
          {error && <p>error.message</p>}
        </form>
      )}
    </Mutation>
  );
};

export default CreateItemForm;
