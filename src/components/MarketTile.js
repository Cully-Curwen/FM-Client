import React from 'react';
import { Link } from 'react-router-dom';

function MarketTile(props) {
  const { id, name, blurb, address, geoLocation, directions, imgUrl, openHours } = props.market;
  
  return (
    <Link to={'/market/' + id } >
      <div className="market-tile" styling={styling}>
        <div className="img">
          <img src={imgUrl} alt="Market Tile Img"/>
          <h3>{name}</h3>
          <p>{blurb}</p>
        </div>
      </div>
    </Link>
  );
};

export default MarketTile;

const styling = {
  border: "2px",
  borderColor: "black",
};