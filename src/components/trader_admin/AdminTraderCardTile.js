import React from 'react';
import TraderTile from '../TraderTile';
// import { Link } from 'react-router-dom';

function AdminTraderCardTile(props) {
  // const { id, admins, name, blurb, imgUrl, links, produceTags } = props.traderCard;
  const { setEditTraderCard, traderCard } = props;
  const marketName = traderCard.market ? traderCard.market.name : null;

  return (
    // <Link to={'/admin_trader/trader/' + id} >
    <div
      onClick={() => setEditTraderCard(traderCard)}
    >
      <TraderTile 
        traderCard={traderCard} 
        marketName={marketName}
      />
    </div>
    // </Link>
  );
};

export default AdminTraderCardTile;
