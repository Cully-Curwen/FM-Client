import React, { useState } from 'react';
import { Query } from 'react-apollo';
import { MARKET_DETAILS_QUERY } from '../graphql-types';
import { Link } from 'react-router-dom';
import TraderTile from './TraderTile';

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
        const { name, blurb, address, directions, imgUrl, openHours, traders } = data.marketDetails;
        const { openTime, closeTime, tradingDay } = openHours;

        
        const displayLogic = () => {
          switch (slide) {
            case 'info':
              return (
                // Market Info Panel needed
                <div className="market-info info">
                  <img src={imgUrl} alt="of Market"/>
                  <h3>{name}</h3>
                  <p>{blurb}</p>
                  <p>{tradingDay}</p>
                  <p>{openTime + ' - ' + closeTime}</p>
                  <p>{address}</p>
                  <p>{directions}</p>
                </div>
              );
            case 'traderCards':
              return (
                <div className="trader-cards list">
                  {traders.map(trader => 
                    <Link key={trader.id} to={'/trader/' + trader.id} className="tablink" >
                      <TraderTile traderCard={trader} {...props} />  
                    </Link>
                  )}
                </div>
              );
            default:
              break;
          }
        };

        return (
          <div className="market panel">
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
            {displayLogic()}
          </div>
        );
      }}
    </Query>
  );
};

export default Market;