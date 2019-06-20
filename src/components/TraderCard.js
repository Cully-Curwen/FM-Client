import React, { useState } from 'react';
import { Query } from 'react-apollo';
import { TRADER_CARD_DETAILS_QUERY } from '../graphql-types';
import Item from './items/Item';
import { capitalizeFirst } from '../utils';

function TraderCard(props) {
  const [slide, setSlide] = useState('info');

  return (
    <Query 
      query={TRADER_CARD_DETAILS_QUERY}
      variables={{ traderCardId: props.match.params.id}}
      fetchPolicy={'cache-and-network'}
    >
      {({ data, error, loading }) => {
        if (loading) { return <div>Loading...</div>; };
        if (error) { return <div>Error! {error.message}</div> };
        
        const { id, name, blurb, imgUrl, links, produceTags, inventory, market } = data.traderCardDetails;
        const linksKeys = Object.keys(links).filter(string => string !== '__typename');

        const displayLogic = () => {
          switch (slide) {
            case 'info':
              return (
                <div className="trader-info info">
                  <img src={imgUrl} alt="of Trader"/>
                  <h3>{name}</h3>
                  <div className="info-produce-tags">
                    {produceTags.map(tag => 
                      <div className="tile-tag" key={tag} >{tag}</div>
                    )}
                  </div>
                  <p>{blurb}</p>
                  <div className="info-links">
                    {linksKeys.map(key => links[key] ? (
                      <div className="link" key={key} >
                        {capitalizeFirst(key) + ': '}<a href={links[key]}>{links[key]}</a>
                      </div>
                      )
                      : null
                    )}
                  </div>
                </div>
              );
            case 'traderCards':
              return (
                <div className="inventory">
                  {inventory.map(item => 
                    <Item 
                      key={item.id} 
                      item={item} 
                      marketId={market.id}
                      traderCardId={id}
                      {...props} 
                    />  
                  )}
                </div>
              );
            default:
              break;
          }
        };
        
        return (
          <div className="trader-card panel">
            <div className="slide-select-container">
              <button 
                className={"slide-select-btn" + (slide === 'info' ? ' slide-active' : '')}
                onClick={() => setSlide('info')}
              >Info</button>
              <button 
                className={"slide-select-btn" + (slide === 'traderCards' ? ' slide-active' : '')}
                onClick={() => setSlide('traderCards')}
              >Products</button>
            </div>
            {displayLogic()}
          </div>
        );
      }}
    </Query>
  );
};

export default TraderCard;