import React from 'react';
// import { Link } from 'react-router-dom';
import MarketTile from '../MarketTile';

function AdminMarketTile(props) {
  // const { id, name, blurb, address, geoLocation, directions, imgUrl, openHours } = props.market;
  const { setEditMarketForm, market } = props;

  return (
    // <Link to={'/market_admin/market/' + id } >
      <div className="tile-logic" onClick={() => setEditMarketForm(market)} >
        <MarketTile market={market} />
      </div>
    // </Link>
  );
};

export default AdminMarketTile;