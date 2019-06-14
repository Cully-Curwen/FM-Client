import React, { useState } from 'react';
import { MARKET_CREATE_MUTATION, MARKET_ADMIN_DATA_QUERY } from '../../graphql-types';
import { Mutation } from 'react-apollo';

function CreateMarketForm(props) {

  const [name, setName] = useState('');
  const [blurb, setBlurb] = useState('');
  const [address, setAddress] = useState('');
  const [longitude, setLongitude] = useState(0.0);
  const [latitude, setLatitude] = useState(0.0);
  const geoLocation = {type: 'point', coordinates: [Number(longitude), Number(latitude)]}
  const [directions, setDirections] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [openTime, setOpenTime] = useState('');
  const [closeTime, setCloseTime] = useState('');
  const [tradingDay, setTradingDay] = useState('');
  const openHours = { openTime, closeTime, tradingDay, };

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
        <div className="create-market-form form">
          {error && <p>Error: {error.message}</p>}
          <form onSubmit={event => {
              event.preventDefault();
              marketCreate({
                variables: { name, blurb, address, geoLocation, directions, imgUrl, openHours }
              });
              event.target.reset();
            }} 
          >
            <label htmlFor="name">Market Name: </label>
            <input 
              type="text" 
              name="name" 
              value={name} 
              onChange={event => setName(event.target.value)} 
              />
            <br/>
            <label htmlFor="blurb">Information about the market: </label>
            <textarea 
              name="blurb" 
              value={blurb}
              onChange={event => setBlurb(event.target.value)}
              />
            <br/>
            <label htmlFor="imgUrl">Image Url: </label>
            <input 
              type="text" 
              name="imgUrl" 
              value={imgUrl}
              onChange={event => setImgUrl(event.target.value)}
              />
            <br/>
            <label htmlFor="openTime">Opening Time: </label>
            <input 
              type="time" 
              name="openTime"
              value={openTime}
              onChange={event => setOpenTime(event.target.value)}
              />
            <br/>
            <label htmlFor="closeTime">Closing Time: </label>
            <input 
              type="time" 
              name="closeTime" 
              value={closeTime}
              onChange={event => setCloseTime(event.target.value)}
              />
            <br/>
            <label htmlFor="tradingDay">Trading Day: </label>
            <select name="tradingDay" onSelect={setTradingDay}>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
            </select>
            <br/>
            <label htmlFor="address">Address: </label>
            <input 
              type="text" 
              name="address" 
              value={address}
              onChange={event => setAddress(event.target.value)}
              />
            <br/>
            <label htmlFor="directions">Directions: </label>
            <input 
              type="text" 
              name="directions" 
              value={directions}
              onChange={event => setDirections(event.target.value)}
              />
            <br/>
            <label htmlFor="geoLocation">GeoLocation: </label>
            <br/>
            <label htmlFor="longitude">Longitude: </label>
            <input 
              type="number" 
              name="longitude"
              value={longitude}
              onChange={event => setLongitude(event.target.value)} 
              />
            <br/>
            <label htmlFor="latitude">Latitude: </label>
            <input 
              type="number" 
              name="latitude"
              value={latitude}
              onChange={event => setLatitude(event.target.value)} 
              />
            <br/>
            <input type="submit" value="Create"/>
          </form>
        </div>
      )}
    </Mutation>
  );
};

export default CreateMarketForm;
