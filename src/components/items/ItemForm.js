import React from 'react';
import CurrencyInput from './CurrencyInput';

function ItemForm(props) {
  const { mutation, variables, loading, error, submitButton } = props;
  const { name, description, stock, price } = props.values;
  const { setName, setDescription, setStock, setPrice } = props.setValues;

  const addClassName = () => {
    if (submitButton === "Add Item") return 'item-create';
    if (submitButton === "Save") return 'item-edit';
    return '';
  }

  return (
    <div className="item-form">
      <form 
        onSubmit={event => {
          event.preventDefault();
          mutation({ variables });
          event.target.reset();
        }}
      >
        <div className="item-container">
          <div className="item-column item-info">
            <div className="item-row">
              <div className="item-input item-name">
                <input
                  type="text"
                  className="item-name-input" 
                  name="name"
                  required
                  placeholder="Name of Item"
                  value={name}
                  onChange={event => setName(event.target.value)}
                />
              </div>
              <div className="item-input item-stock">
                <input 
                  type="number"
                  className="item-stock-input" 
                  name="stock"
                  required
                  placeholder="Stock"
                  min='0'
                  value={stock}
                  onChange={event => setStock(event.target.value)}
                />
              </div>
              <div className="item-input item-price">
                <CurrencyInput 
                  name={"price"}
                  required
                  value={price}
                  onChange={setPrice}
                  className="item-price-input"
                />
              </div>
            </div>
            <div className="item-row">
              <div className="item-input item-description">
                <textarea 
                  className="item-description-input"
                  name="description" 
                  cols="30" 
                  rows="2" 
                  required
                  placeholder="Description of Item"
                  value={description}
                  onChange={event => setDescription(event.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="item-column item-buttons-col">
            <button 
              type="submit"
              className={"item-button " + addClassName}
              disabled={loading}
            >{submitButton}</button>
          </div>
        </div>
        {error && <p>error.message</p>}
      </form>
    </div>
  );
};

export default ItemForm;
