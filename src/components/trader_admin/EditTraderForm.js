import React, { useState } from 'react';
import { TRADER_CARD_UPDATE_MUTATION } from '../../graphql-types';
import { Mutation } from 'react-apollo';

function EditTraderForm(props) {
  // const { traderCard, setEditTraderForm, refetch } = props;
  const { traderCard } = props;

  const id = traderCard.id;
  const [name, setName] = useState(traderCard.name);
  const [blurb, setBlurb] = useState(traderCard.blurb);
  const [imgUrl, setImgUrl] = useState(traderCard.imgUrl);
  const [website, setWebsite] = useState(traderCard.links.website);
  const [email, setEmail] = useState(traderCard.links.email);
  const [facebook, setFacebook] = useState(traderCard.links.facebook);
  const [twitter, setTwitter] = useState(traderCard.links.twitter);
  const [instagram, setInstagram] = useState(traderCard.links.instagram);
  const links = { website, email, facebook, twitter, instagram };
  const [produceTags, setProduceTags] = useState(traderCard.produceTags);


  return (
    <Mutation 
      mutation={TRADER_CARD_UPDATE_MUTATION}
      // onCompleted={() => refetch({traderCardId: id})} 
    >
      {(traderAdminUpdate, { loading, error }) => (
        <div className="create-market-form form">
          {error && <p>Error: {error.message}</p>}
          <form onSubmit={event => {
              event.preventDefault();
              traderAdminUpdate({
                variables: { id, name, blurb, imgUrl, links, produceTags }
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
            <input type="submit" value="Save Changes"/>
          </form>
        </div>
      )}
    </Mutation>
  );
};

export default EditTraderForm;
