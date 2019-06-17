import React, { useState } from 'react';
import { ITEM_CREATE_MUTATION, TRADER_ADMIN_DATA_QUERY } from '../../graphql-types';
import { Mutation } from 'react-apollo';
import CurrencyInput from './CurrencyInput';

function CreateItemForm(props) {
  const { traderCardId } = props;
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [stock, setStock] = useState('');
  const [price, setPrice] = useState(0);
   
  return (
    <Mutation 
      mutation={ITEM_CREATE_MUTATION}
      refetchQueries={[{query: TRADER_ADMIN_DATA_QUERY}]}
      onCompleted={() => props.setNewItemForm(false)}
    >
      {(itemCreate, {loading, error}) => (
        <form 
          className="create-item-form item"
          onSubmit={event => {
            event.preventDefault();
            itemCreate({ variables: { traderCardId, name, description, stock: Number(stock), price } });
            event.target.reset();
          }}
        >
          <div className="item-name">
            <input
              type="text" 
              name="name"
              required
              placeholder="Name of Item"
              value={name}
              onChange={event => setName(event.target.value)}
            />
          </div>
          <div className="item-stock">
            <input 
              type="number" 
              name="stock"
              required
              placeholder="Stock"
              min='0'
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
          <div className="item-description">
            <textarea 
              name="description" 
              cols="30" 
              rows="2" 
              required
              placeholder="Description of Item"
              value={description}
              onChange={event => setDescription(event.target.value)}
            />
          <div className="item-button">
            <input 
              type="submit" 
              value="Add Item"
              disabled={loading}
            />
          </div>
          </div>
          {error && <p>error.message</p>}
        </form>
      )}
    </Mutation>
  );
};

export default CreateItemForm;
