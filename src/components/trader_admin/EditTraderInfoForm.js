import React, { useState } from 'react';
import { TRADER_CARD_UPDATE_MUTATION } from '../../graphql-types';
import { Mutation } from 'react-apollo';
import TraderCardInfoForm from './TraderCardInfoForm';

function EditTraderInfoForm(props) {
  const { traderCard } = props;

  const id = traderCard.id;
  const [name, setName] = useState(traderCard.name);
  const [blurb, setBlurb] = useState(traderCard.blurb);
  const [imgUrl, setImgUrl] = useState(traderCard.imgUrl);
  const [produceTags, setProduceTags] = useState(traderCard.produceTags);
  const [website, setWebsite] = useState(traderCard.links.website);
  const [email, setEmail] = useState(traderCard.links.email);
  const [facebook, setFacebook] = useState(traderCard.links.facebook);
  const [twitter, setTwitter] = useState(traderCard.links.twitter);
  const [instagram, setInstagram] = useState(traderCard.links.instagram);
  const links = { website, email, facebook, twitter, instagram };

  const variables = { id, name, blurb, imgUrl, links, produceTags };
  const submitButton = 'Save Changes';
  const values = { name, blurb, imgUrl, produceTags, website, email, facebook, twitter, instagram }; 
  const setValues = { setName, setBlurb, setImgUrl, setProduceTags, setWebsite, setEmail, setFacebook, setTwitter, setInstagram };

  return (
    <Mutation mutation={TRADER_CARD_UPDATE_MUTATION} >
      {(traderAdminUpdate, { loading, error }) => (
        <TraderCardInfoForm 
          mutation={traderAdminUpdate}
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

export default EditTraderInfoForm;
