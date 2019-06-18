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
      <div className="market-basket-tile tile w3-card-4">
        <header className="w3-container w3-center">
          <h5>{market.name}</h5>
        </header>
        <div className="w3-container w3-center">
          <h6>Total: {formatPrice(totalPrice())}</h6>
          <div>
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
