import React, { useState } from 'react';
import { ITEM_UPDATE_MUTATION } from '../../graphql-types';
import { Mutation } from 'react-apollo';
import ItemForm from './ItemForm';

function EditItemForm(props) {
  const { item } = props;
  const id = item.id;
  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);
  const [stock, setStock] = useState(item.stock);
  const [price, setPrice] = useState(item.price);

  const variables = { id, name, description, stock: Number(stock), price };
  const submitButton = 'Save';
  const values = { name, description, stock, price };
  const setValues = { setName, setDescription, setStock, setPrice };

  return (
    <Mutation 
      mutation={ITEM_UPDATE_MUTATION}
    >
      {(itemUpdate, {loading, error}) => (
        <ItemForm 
          mutation={itemUpdate}
          variables={variables}
          loading={loading}
          error={error}
          submitButton={submitButton}
          values={values}
          setValues={setValues}
        />
      )}
    </Mutation>
  );
};

export default EditItemForm;
