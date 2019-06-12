import React from 'react';

function MarketTile(props) {
  const { id, name, blurb, address, geoLocation, directions, imgUrl, openHours } = props.market;
  
  return (
    <div className="market-tile" styling={styling}>
      <div className="img">
        <img src={imgUrl} alt="Market Tile Img"/>
        <h3>{name}</h3>
        <p>{blurb}</p>
      </div>
    </div>
  );
};

export default MarketTile;

const styling = {
  border: "2px",
  borderColor: "black",
};