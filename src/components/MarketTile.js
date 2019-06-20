import React from 'react';

function MarketTile(props) {
  // const { id, name, blurb, address, geoLocation, directions, imgUrl, openHours } = props.market;
  const { name, imgUrl, address, openHours } = props.market;
  const { openTime, closeTime, tradingDay } = openHours;
  
  return (
    <div className="market-tile tile" >
      <div className="tile-img">
        <img src={imgUrl} alt="Market Tile Img" />
      </div>
      <div className="tile-body">
        <div className="tile-name">
          {name}
        </div>
        {/* <div className="tile-blurb">
          {blurb}
        </div> */}
        <div className="tile-open-hours">
          {tradingDay}
          <br/>
          {openTime + ' - ' + closeTime}
        </div>
        <div className="tile-address">
          {address}
        </div>
      </div>
    </div>
  );
};

export default MarketTile;