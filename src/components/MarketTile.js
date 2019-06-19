import React from 'react';

function MarketTile(props) {
  // const { id, name, blurb, address, geoLocation, directions, imgUrl, openHours } = props.market;
  const { name, blurb, imgUrl } = props.market;
  
  return (
    <div className="market-tile tile" >
      <img src={imgUrl} alt="Market Tile Img" />
      <div className="">
        <h3>{name}</h3>
        <p>{blurb}</p>
      </div>
    </div>
  );
};

export default MarketTile;