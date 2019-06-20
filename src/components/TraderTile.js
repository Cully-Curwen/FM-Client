import React from 'react';
import { Link } from 'react-router-dom';

function TraderTile(props) {
  // const { id, admins, name, blurb, imgUrl, links, produceTags } = props.traderCard;
  const { id, name, blurb, imgUrl, produceTags } = props.traderCard;
  
  return (
    <Link to={'/trader/' + id} className="tablink" >
      <div className="trader-tile tile">
        <img src={imgUrl} alt="Trader Card Img"/>
        <div className="tile-body">
          <div className="tile-name">
            {name}
          </div>
          <div className="tile-produce-tags">
            {produceTags.map(tag => 
              <div className="tile-tag">{tag}</div>
            )}
          </div>
          <div className="tile-blurb">
            {blurb}
          </div>
        </div>
        <div className="tile-footer">
        </div>
      </div>
    </Link>
  );
};

export default TraderTile;