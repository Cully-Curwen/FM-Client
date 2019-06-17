import React, { useState } from 'react';
import { ITEM_UPDATE_MUTATION } from '../../graphql-types';
import { Mutation } from 'react-apollo';
import CurrencyInput from './CurrencyInput';

function EditItemForm(props) {
  const { item } = props;
  const id = item.id;
  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);
  const [stock, setStock] = useState(item.stock);
  const [price, setPrice] = useState(item.price);

  return (
    <Mutation 
      mutation={ITEM_UPDATE_MUTATION}
      // onCompleted={() => props.setEditItemForm(false)}
    >
      {(itemUpdate, {loading, error}) => (
        <form 
          className="edit-item-form item"
          onSubmit={event => {
            event.preventDefault();
            itemUpdate({ variables: { id, name, description, stock: Number(stock), price } });
            // event.target.reset();
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
              min={0}
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
              value={description}
              onChange={event => setDescription(event.target.value)}
            />
          </div>
          <div className="item-button">
            <input 
              type="submit" 
              value="Save"
              disabled={loading}
            />
          </div>
          {error && <p>error.message</p>}
        </form>
      )}
    </Mutation>
  );
};

export default EditItemForm;
