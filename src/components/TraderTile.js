import React from 'react';

function TraderTile(props) {
  // const { id, admins, name, blurb, imgUrl, links, produceTags } = props.traderCard;
  const { name, imgUrl, produceTags } = props.traderCard;
  const { marketName } = props;
  
  return (
    <div className="trader-tile tile">
      <img src={imgUrl} alt="Trader Card Img"/>
      <div className="tile-body">
        <div className="tile-name">
          {name}
        </div>
        <div className="tile-produce-tags">
          {produceTags.map(tag => 
            <div className="tile-tag" key={tag} >{tag}</div>
          )}
        </div>
        {/* <div className="tile-blurb">
          {blurb}
        </div> */}
        {marketName && <div className="tile-name">{marketName}</div> }
      </div>
      <div className="tile-footer">
      </div>
    </div>
  );
};

export default TraderTile;