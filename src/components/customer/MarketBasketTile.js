import React from 'react';
import { Link } from 'react-router-dom';
import BasketItem from '../items/BasketItem';

function MarketBasketTile(props) {
  const { market, items } = props.basket;

  return (
    <Link to={'/market/' + market.id + '/basket' } >
      <div className="market-basket-tile tile">
        <h4>{market.name}</h4>
        <ul>
          {items.map(item => 
            <BasketItem key={item.itemId} item={item} marketId={market.id} />
          )}
        </ul>
      </div>
    </Link>
  );
};

export default MarketBasketTile;
