import React, { useState } from 'react';
import { ITEM_CREATE_MUTATION, TRADER_ADMIN_DATA_QUERY } from '../../graphql-types';
import { Mutation } from 'react-apollo';
import ItemForm from './ItemForm';

function CreateItemForm(props) {
  const { traderCardId } = props;
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [stock, setStock] = useState('');
  const [price, setPrice] = useState(0);

  const variables = { traderCardId, name, description, stock: Number(stock), price };
  const submitButton = 'Add Item';
  const values = { name, description, stock, price };
  const setValues = { setName, setDescription, setStock, setPrice };
   
  return (
    <Mutation 
      mutation={ITEM_CREATE_MUTATION}
      refetchQueries={[{query: TRADER_ADMIN_DATA_QUERY}]}
      onCompleted={() => props.setNewItemForm(false)}
    >
      {(itemCreate, {loading, error}) => (
        <ItemForm 
          mutation={itemCreate}
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

export default CreateItemForm;
