import React from 'react';
import { Link } from 'react-router-dom';

function TraderTile(props) {
  const { id, admins, name, blurb, imgUrl, links, produceTags } = props.traderCard;
  
  return (
    <Link to={'/trader/' + id} >
      <div className="trader-card">
        <img src={imgUrl} alt="Trader Card Img"/>
        <h3>{name}</h3>
        <div>{produceTags.map((tag, index)=> <div key={index}>{tag}</div>)}</div>
        <p>{blurb}</p>
      </div>
    </Link>
  );
};

export default TraderTile;