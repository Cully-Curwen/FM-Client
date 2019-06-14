import React, { useState } from 'react';
import { MARKET_UPDATE_MUTATION,  } from '../../graphql-types';
import { Mutation } from 'react-apollo';
import { WGS84_Bounds as GeoLocationBounds } from '../../constants.js'

function EditMarketForm(props) {
  const { step, lon, lat } = GeoLocationBounds;
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
  const openHours = { openTime, closeTime, tradingDay, };

  return (
    <Mutation 
      mutation={MARKET_UPDATE_MUTATION}
      onCompleted={() => props.setEditMarketForm(false)} 
    >
      {(marketCreate, { loading, error }) => (
        <div className="create-market-form form">
          {error && <p>Error: {error.message}</p>}
          <form onSubmit={event => {
              event.preventDefault();
              marketCreate({
                variables: { id, name, blurb, address, geoLocation, directions, imgUrl, openHours }
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
              step={step}
              min={lon.min}
              max={lon.max}
              value={longitude}
              onChange={event => setLongitude(event.target.value)} 
              />
            <br/>
            <label htmlFor="latitude">Latitude: </label>
            <input 
              type="number" 
              name="latitude"
              step={step}
              min={lat.min}
              max={lat.max}
              value={latitude}
              onChange={event => setLatitude(event.target.value)} 
              />
            <br/>
            <input type="submit" value="Save Changes"/>
          </form>
        </div>
      )}
    </Mutation>
  );
};

export default EditMarketForm;
