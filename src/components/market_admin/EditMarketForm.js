import React, { useState } from 'react';
import { MARKET_UPDATE_MUTATION,  } from '../../graphql-types';
import { Mutation } from 'react-apollo';
import MarketForm from './MarketForm';

function EditMarketForm(props) {
  const { market } = props;
  
  const id = market.id;
  const [name, setName] = useState(market.name);
  const [blurb, setBlurb] = useState(market.blurb);
  const [address, setAddress] = useState(market.address);
  const [longitude, setLongitude] = useState(market.geoLocation.coordinates[0]);
  const [latitude, setLatitude] = useState(market.geoLocation.coordinates[1]);
  const geoLocation = {type: 'point', coordinates: [Number(longitude), Number(latitude)]};
  const [directions, setDirections] = useState(market.directions);
  const [imgUrl, setImgUrl] = useState(market.imgUrl);
  const [openTime, setOpenTime] = useState(market.openHours.openTime);
  const [closeTime, setCloseTime] = useState(market.openHours.closeTime);
  const [tradingDay, setTradingDay] = useState(market.openHours.tradingDay);
  const openHours = { openTime, closeTime, tradingDay };

  const variables = { id, name, blurb, address, geoLocation, directions, imgUrl, openHours };
  const submitButton = 'Save Changes';
  const values = { name, blurb, address, longitude, latitude, directions, imgUrl, openTime, closeTime, tradingDay };
  const setValues = { setName, setBlurb, setAddress, setLongitude, setLatitude, setDirections, setImgUrl, setOpenTime, setCloseTime, setTradingDay };

  return (
    <Mutation 
      mutation={MARKET_UPDATE_MUTATION}
      onCompleted={() => props.setEditMarketForm(false)} 
    >
      {(marketUpdate, { loading, error }) => (
        <MarketForm 
          mutation={marketUpdate}
          loading={loading}
          error={error}
          variables={variables}
          submitButton={submitButton}
          values={values}
          setValues={setValues}
        />
      )}
    </Mutation>
  );
};

export default EditMarketForm;
