import React from 'react';
import { Link } from 'react-router-dom';
import { formatPrice } from "../../utils";

function MarketBasketTile(props) {
  const { market, items } = props.basket;

  const totalPrice = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return items.map(item => item.price * item.quantity).reduce(reducer);
  };

  return (
    <Link to={'/market/' + market.id + '/basket' } >
      <div className="market-basket-tile tile">
        <h5>{market.name}</h5>
        <h5>Total: {formatPrice(totalPrice())}</h5>
        <ul>
          {items.map(item => 
            <li key={item.itemId} ><p>{item.name + '  x' + item.quantity}</p></li>
          )}
        </ul>
      </div>
    </Link>
  );
};

export default MarketBasketTile;
