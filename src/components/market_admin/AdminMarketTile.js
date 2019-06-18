import React from 'react';
// import { Link } from 'react-router-dom';
// import '../../styling/MarketTile.css';

function AdminMarketTile(props) {
  // const { id, name, blurb, address, geoLocation, directions, imgUrl, openHours } = props.market;
  const { name, blurb, imgUrl } = props.market;
  const { setEditMarketForm, market } = props;

  return (
    // <Link to={'/market_admin/market/' + id } >
      <div className="market-tile tile card" onClick={() => setEditMarketForm(market)} >
        <div >
          <img src={imgUrl} className="card-img-top" alt="Market Tile Img" />
        </div>
        <div className="card-body" >
          <h5 className="card-title" >{name}</h5>
          <p className="card-text" >{blurb}</p>
        </div>
      </div>
    // </Link>
  );
};

export default AdminMarketTile;