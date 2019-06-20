import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from "../../utils";

function MarketBasketTile(props) {
  const { market, items } = props.basket;

  // fix needed, need to wipe from Databse
  if (items.length === 0) return <></>;

  const totalPrice = () => {
    if (items.length === 0) return 0;
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return items.map(item => item.price * item.quantity).reduce(reducer);
  };

  return (
    <Link to={'/market/' + market.id + '/basket' } className="tablink" >
      <div className="market-basket-tile tile ">
        <div className="tile-basket">
          <div className="tile-name">
            {market.name}
          </div>
          <div className="tile-total">
            Total: {formatPrice(totalPrice())}
          </div>
          <div className="tile-item">
            {items.map(item => 
              <li key={item.itemId} ><p>{item.name + '  x' + item.quantity}</p></li>
              )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MarketBasketTile;
