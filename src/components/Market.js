import React, { useState } from 'react';
import { Query } from 'react-apollo';
import { MARKET_DETAILS_QUERY } from '../graphql-types';
import TraderTile from './TraderTile';
import '../styling/Market.css'

function Market(props) {
  const [slide, setSlide] = useState('info');

  return (
    <Query 
      query={MARKET_DETAILS_QUERY}
      variables={{ marketId: props.match.params.id}}
    >
      {({ data, error, loading }) => {
        if (loading) { return <div>Loading...</div>; };
        if (error) { return <div>Error! {error.message}</div> };
        
        // const { name, blurb, address, geoLocation, directions, imgUrl, openHours, traders } = data.marketDetails;
        const { name, blurb, address, geoLocation, imgUrl, traders } = data.marketDetails;
        
        const displayLogic = () => {
          switch (slide) {
            case 'info':
              return (
                // Market Info Panel needed
                <div className="market-info">
                  <img src={imgUrl} alt="of Market"/>
                  <h3>{name}</h3>
                  <p>{blurb}</p>
                  <p>{address}</p>
                  <p>{geoLocation.coordinates.join(', ')}</p>
                </div>
              );
            case 'traderCards':
              return (
                <div className="trader-cards">
                  {traders.map(trader => 
                    <TraderTile key={trader.id} traderCard={trader} {...props} />  
                  )}
                </div>
              );
            default:
              break;
          }
        };

        return (
          <div className="market">
            <div className="slide-select-container">
              <button 
                className={"slide-select-btn" + (slide === 'info' ? ' slide-active' : '')}
                onClick={() => setSlide('info')}
              >Info</button>
              <button 
                className={"slide-select-btn" + (slide === 'traderCards' ? ' slide-active' : '')}
                onClick={() => setSlide('traderCards')}
              >Traders</button>
            </div>
            <div className="market-container">
              {displayLogic()}
            </div>
          </div>
        );
      }}
    </Query>
  );
};

export default Market;