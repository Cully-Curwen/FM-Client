import React from 'react';
// import { Link } from 'react-router-dom';

function AdminTraderCardTile(props) {
  // const { id, admins, name, blurb, imgUrl, links, produceTags } = props.traderCard;
  const { name, blurb, imgUrl, produceTags } = props.traderCard;
  const { setEditTraderCard, traderCard } = props;

  return (
    // <Link to={'/admin_trader/trader/' + id} >
      <div className="trader-tile tile" onClick={() => setEditTraderCard(traderCard)}>
        <img src={imgUrl} alt="Trader Card Img"/>
        <h3>{name}</h3>
        <div>{produceTags.map((tag, index)=> <div key={index}>{tag}</div>)}</div>
        <p>{blurb}</p>
      </div>
    // </Link>
  );
};

export default AdminTraderCardTile;
