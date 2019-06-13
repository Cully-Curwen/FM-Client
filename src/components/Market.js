import React, { useState } from 'react';
import { useQuery } from 'react-apollo-hooks';
import { MARKET_DETAILS_QUERY } from '../graphql-types';
import TraderTile from './TraderTile';

function Market(props) {
  const [slide, setSlide] = useState('info');

  const { data, error, loading } = useQuery(MARKET_DETAILS_QUERY, {variables: { marketId: props.match.params.id}});
  
  if (loading) {
    return <div>Loading...</div>;
  };
  
  if (error) {
    return <div>Error! {error.message}</div>
  };
  
  const { name, blurb, address, geoLocation, directions, imgUrl, openHours, traders } = data.marketDetails;
  
  const displayLogic = () => {
    switch (slide) {
      case 'info':
        return (
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
          className="slide-select-btn"
          onClick={() => setSlide('info')}
        >Info</button>
        <button 
          className="slide-select-btn"
          onClick={() => setSlide('traderCards')}
        >Traders</button>
      </div>
      <div className="market-container">
        {displayLogic()}
      </div>
    </div>
  );
};

export default Market;