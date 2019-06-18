import React, { useState } from 'react';
import { MARKET_CREATE_MUTATION, MARKET_ADMIN_DATA_QUERY } from '../../graphql-types';
import { Mutation } from 'react-apollo';
import { WGS84_Bounds as GeoLocationBounds } from '../../constants.js'

function CreateMarketForm(props) {
  const { step, lon, lat } = GeoLocationBounds;

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
          <form 
            onSubmit={event => {
              event.preventDefault();
              marketCreate({
                variables: { name, blurb, address, geoLocation, directions, imgUrl, openHours }
              });
              event.target.reset();
            }} 
          >
            <div className="form-group">
              <label htmlFor="name">Market Name: </label>
              <input 
                type="text" 
                name="name"
                id="name"
                className="form-control"
                required
                value={name} 
                onChange={event => setName(event.target.value)} 
                />
            </div>
            <div className="form-group">
              <label htmlFor="blurb">Information about the market: </label>
              <textarea 
                name="blurb"
                id="blurb"
                className="form-control" 
                required
                value={blurb}
                onChange={event => setBlurb(event.target.value)}
                />
            </div>
            <div className="form-group">
              <label htmlFor="imgUrl">Image Url: </label>
              <input 
                type="text" 
                name="imgUrl"
                id="imgUrl"
                className="form-control"
                value={imgUrl}
                onChange={event => setImgUrl(event.target.value)}
                />
            </div>
            <div className="form-group form-row">
              <div className="form-group form-row col">
                <label htmlFor="openTime" className="col-form-label">Opening Time: </label>
                <input 
                  type="time" 
                  name="openTime"
                  id="openTime"
                  className="form-control col"
                  required
                  value={openTime}
                  onChange={event => setOpenTime(event.target.value)}
                  />
              </div>
              <div className="form-group form-row col">
                <label htmlFor="closeTime" className="col-form-label">Closing Time: </label>
                <input 
                  type="time" 
                  name="closeTime" 
                  id="closeTime" 
                  className="form-control col"
                  required
                  value={closeTime}
                  onChange={event => setCloseTime(event.target.value)}
                  />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="tradingDay">Trading Day: </label>
              <select 
                name="tradingDay"
                id="tradingDay"
                className="form-control" 
                value={tradingDay} 
                onChange={event => setTradingDay(event.target.value)}
              >
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="address">Address: </label>
              <input 
                type="text" 
                name="address" 
                id="address" 
                className="form-control"
                value={address}
                onChange={event => setAddress(event.target.value)}
                />
            </div>
            <div className="form-group">
              <label htmlFor="directions">Directions: </label>
              <input 
                type="text" 
                name="directions" 
                id="directions" 
                className="form-control"
                value={directions}
                onChange={event => setDirections(event.target.value)}
                />
            </div>
            <div className="form-group">
              <div className="form-group">
                <label htmlFor="geoLocation">GeoLocation: </label>
              </div>
              <div className="form-row">
                <div className="form-row col">
                  <label htmlFor="longitude" className="col-form-label" >Longitude: </label>
                  <input 
                    type="number" 
                    name="longitude"
                    id="longitude"
                    className="form-control col"
                    step={step}
                    min={lon.min}
                    max={lon.max}
                    required
                    value={longitude}
                    onChange={event => setLongitude(event.target.value)} 
                    />
                </div>
                <div className="form-row col">
                  <label htmlFor="latitude" className="col-form-label" >Latitude: </label>
                  <input 
                    type="number" 
                    name="latitude"
                    id="latitude"
                    className="form-control col"
                    step={step}
                    min={lat.min}
                    max={lat.max}
                    required
                    value={latitude}
                    onChange={event => setLatitude(event.target.value)} 
                    />
                </div>
              </div>
            </div>
            <input type="submit" value="Create"/>
          </form>
        </div>
      )}
    </Mutation>
  );
};

export default CreateMarketForm;
