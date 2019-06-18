import React from 'react';
import { Link } from 'react-router-dom';
import '../styling/MarketTile.css';

function MarketTile(props) {
  // const { id, name, blurb, address, geoLocation, directions, imgUrl, openHours } = props.market;
  const { id, name, blurb, imgUrl } = props.market;
  
  return (
    <Link to={'/market/' + id } >
      <div className="market-tile tile w3-card-4" >
        <img src={imgUrl} alt="Market Tile Img" />
        <div className="w3-container w3-center">
          <h3>{name}</h3>
          <p>{blurb}</p>
        </div>
      </div>
    </Link>
  );
};

export default MarketTile;