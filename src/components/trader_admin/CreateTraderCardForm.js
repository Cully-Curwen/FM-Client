import React, { useState } from 'react';
import { TRADER_CARD_CREATE_MUTATION, TRADER_ADMIN_DATA_QUERY } from '../../graphql-types';
import { Mutation } from 'react-apollo';
import TraderCardInfoForm from './TraderCardInfoForm';

function CreateTraderCardForm(props) {

  const [name, setName] = useState('');
  const [blurb, setBlurb] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [produceTags, setProduceTags] = useState([]);
  const [website, setWebsite] = useState('');
  const [email, setEmail] = useState('');
  const [facebook, setFacebook] = useState('');
  const [twitter, setTwitter] = useState('');
  const [instagram, setInstagram] = useState('');
  const links = { website, email, facebook, twitter, instagram };

  const variables = {  name, blurb, imgUrl, links, produceTags };
  const submitButton = 'Create';
  const values = { name, blurb, imgUrl, produceTags, website, email, facebook, twitter, instagram }; 
  const setValues = { setName, setBlurb, setImgUrl, setProduceTags, setWebsite, setEmail, setFacebook, setTwitter, setInstagram };

  return (
    <Mutation 
      mutation={TRADER_CARD_CREATE_MUTATION}
      update={(cache, { data: { traderCardCreate } }) => {
        const { administeredTraders } = cache.readQuery({ query: TRADER_ADMIN_DATA_QUERY });
        cache.writeQuery({
          query: TRADER_ADMIN_DATA_QUERY,
          data: { administeredTraders: administeredTraders.concat([traderCardCreate]) },
        });
      }}
      onCompleted={() => props.setNewTraderForm(false)} 
    >
      {(traderCardCreate, { loading, error }) => (
        <TraderCardInfoForm 
          mutation={traderCardCreate}
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

export default CreateTraderCardForm;
