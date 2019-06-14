import React from 'react';
// import { Link } from 'react-router-dom';
import '../../styling/MarketTile.css';

function AdminMarketTile(props) {
  // const { id, name, blurb, address, geoLocation, directions, imgUrl, openHours } = props.market;
  const { name, blurb, imgUrl } = props.market;
  const { setEditMarketForm, market } = props;

  return (
    // <Link to={'/market_admin/market/' + id } >
      <div className="market-tile" onClick={() => setEditMarketForm(market)} >
        <div className="img">
          <img src={imgUrl} alt="Market Tile Img" />
        </div>
          <h3>{name}</h3>
          <p>{blurb}</p>
      </div>
    // </Link>
  );
};

export default AdminMarketTile;