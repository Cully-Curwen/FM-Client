import React, { useState } from 'react';
import { TRADER_CARD_CREATE_MUTATION, TRADER_ADMIN_DATA_QUERY } from '../../graphql-types';
import { Mutation } from 'react-apollo';

function CreateTraderCardForm(props) {

  const [name, setName] = useState('');
  const [blurb, setBlurb] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [website, setWebsite] = useState('');
  const [email, setEmail] = useState('');
  const [facebook, setFacebook] = useState('');
  const [twitter, setTwitter] = useState('');
  const [instagram, setInstagram] = useState('');
  const links = { website, email, facebook, twitter, instagram };
  const [produceTags, setProduceTags] = useState([]);


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
        <div className="create-market-form form">
          {error && <p>Error: {error.message}</p>}
          <form onSubmit={event => {
              event.preventDefault();
              traderCardCreate({
                variables: { name, blurb, imgUrl, links, produceTags }
              });
              event.target.reset();
            }} 
          >
            <label htmlFor="name">Market Name: </label>
            <input 
              type="text" 
              name="name" 
              value={name} 
              onChange={event => setName(event.target.value)} 
              />
            <br/>
            <label htmlFor="blurb">Information about the market: </label>
            <textarea 
              name="blurb" 
              value={blurb}
              onChange={event => setBlurb(event.target.value)}
              />
            <br/>
            <label htmlFor="imgUrl">Image Url: </label>
            <input 
              type="text" 
              name="imgUrl" 
              value={imgUrl}
              onChange={event => setImgUrl(event.target.value)}
              />
            <br/>
            <label htmlFor="links">External Links: </label>
            <br/>
            <label htmlFor="website">Website: </label>
            <input 
              type="text" 
              name="website"
              value={website}
              onChange={event => setWebsite(event.target.value)}
            />
            <br/>
            <label htmlFor="email">Email: </label>
            <input 
              type="text" 
              name="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
            <br/>
            <label htmlFor="facebook">Facebook: </label>
            <input 
              type="text" 
              name="facebook"
              value={facebook}
              onChange={event => setFacebook(event.target.value)}
            />
            <br/>
            <label htmlFor="twitter">Twitter: </label>
            <input 
              type="text" 
              name="twitter"
              value={twitter}
              onChange={event => setTwitter(event.target.value)}
            />
            <br/>
            <label htmlFor="instagram">Instagram: </label>
            <input 
              type="text" 
              name="instagram"
              value={instagram}
              onChange={event => setInstagram(event.target.value)}
            />
            <br/>
            <label htmlFor="produceTags">Produce Tags: </label>
            <input 
              type="text" 
              name="produceTags" 
              value={produceTags}
              onChange={event => setProduceTags([event.target.value])}
            />
            <br/>
            <input type="submit" value="Create"/>
          </form>
        </div>
      )}
    </Mutation>
  );
};

export default CreateTraderCardForm;
