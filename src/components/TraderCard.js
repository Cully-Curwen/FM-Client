import React, { useState } from 'react';
import { Query } from 'react-apollo';
import { TRADER_CARD_DETAILS_QUERY } from '../graphql-types';
import Item from './Item';

function TraderCard(props) {
  const [slide, setSlide] = useState('info');

  return (
    <Query 
      query={TRADER_CARD_DETAILS_QUERY}
      variables={{ traderCardId: props.match.params.id}}
    >
      {({ data, error, loading }) => {
        if (loading) { return <div>Loading...</div>; };
        if (error) { return <div>Error! {error.message}</div> };
        
        // const { id, name, blurb, imgUrl, links, produceTags, inventory } = data.traderCardDetails;
        const { name, blurb, imgUrl, links, produceTags, inventory } = data.traderCardDetails;
        
        const displayLogic = () => {
          switch (slide) {
            case 'info':
              return (
                <div className="trader-info">
                  <img src={imgUrl} alt="of Trader"/>
                  <h3>{name}</h3>
                  <p>{produceTags.join(', ')}</p>
                  <p>{blurb}</p>
                  <ul>{Object.keys(links).map(key => <li key={key} >{key + ': ' + links[key]}</li>)}</ul>
                </div>
              );
            case 'traderCards':
              return (
                <div className="inventory">
                  {inventory.map(item => 
                    <Item key={item.id} item={item} {...props} />  
                  )}
                </div>
              );
            default:
              break;
          }
        };
        
        return (
          <div className="trader-card">
            <div className="slide-select-container">
              <button 
                className="slide-select-btn"
                onClick={() => setSlide('info')}
              >Info</button>
              <button 
                className="slide-select-btn"
                onClick={() => setSlide('traderCards')}
              >Products</button>
            </div>
            <div className="trader-card-container">
              {displayLogic()}
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default TraderCard;
