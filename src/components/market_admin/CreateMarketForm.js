import React, { useState } from 'react';
import { MARKET_CREATE_MUTATION, MARKET_ADMIN_DATA_QUERY } from '../../graphql-types';
import { Mutation } from 'react-apollo';
import MarketForm from './MarketForm';

function CreateMarketForm(props) {

  const [name, setName] = useState('');
  const [blurb, setBlurb] = useState('');
  const [address, setAddress] = useState('');
  const [longitude, setLongitude] = useState(0.0000);
  const [latitude, setLatitude] = useState(0.0000);
  const geoLocation = {type: 'point', coordinates: [Number(longitude), Number(latitude)]};
  const [directions, setDirections] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [openTime, setOpenTime] = useState('');
  const [closeTime, setCloseTime] = useState('');
  const [tradingDay, setTradingDay] = useState('');
  const openHours = { openTime, closeTime, tradingDay, };

  const variables = { name, blurb, address, geoLocation, directions, imgUrl, openHours };
  const submitButton = 'Create';
  const values = { name, blurb, address, longitude, latitude, directions, imgUrl, openTime, closeTime, tradingDay };
  const setValues = { setName, setBlurb, setAddress, setLongitude, setLatitude, setDirections, setImgUrl, setOpenTime, setCloseTime, setTradingDay };

  return (
    <Mutation 
      mutation={MARKET_CREATE_MUTATION}
      update={(cache, { data: { marketCreate } }) => {
        const { administeredMarkets } = cache.readQuery({ query: MARKET_ADMIN_DATA_QUERY });
        cache.writeQuery({
          query: MARKET_ADMIN_DATA_QUERY,
          data: { administeredMarkets: administeredMarkets.concat([marketCreate]) },
        });
      }}
      onCompleted={() => props.setNewMarketForm(false)} 
    >
      {(marketCreate, { loading, error }) => (
        <MarketForm 
        mutation={marketCreate}
        variables={variables}
        loading={loading}
        error={error}
        submitButton={submitButton}
        values={values}
        setValues={setValues}
      />
      )}
    </Mutation>
  );
};

export default CreateMarketForm;
