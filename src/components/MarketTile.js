import React from 'react';

function MarketTile(props) {
  // const { id, name, blurb, address, geoLocation, directions, imgUrl, openHours } = props.market;
  const { name, blurb, imgUrl, address } = props.market;
  const { openTime, closeTime, tradingDay } = props.market.openHours;
  
  return (
    <div className="market-tile tile" >
      <div className="tile-img">
        <img src={imgUrl} alt="Market Tile Img" />
      </div>
      <div className="tile-name">
        {name}
      </div>
      <div className="tile-blurb">
        {blurb}
      </div>
      <div className="tile-footer">
        <div className="tile-open-hours">
          {tradingDay + ' from ' + openTime + ' - ' + closeTime}
        </div>
        {address &&
          <div className="tile-address">
            {address}
          </div>
        }
      </div>
    </div>
  );
};

export default MarketTile;