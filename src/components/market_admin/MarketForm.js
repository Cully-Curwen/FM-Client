import React from 'react';
import { WGS84_Bounds as GeoLocationBounds } from '../../constants.js';

function MarketForm(props) {
  const { step, lon, lat } = GeoLocationBounds;
  const { mutation, variables, error, loading, submitButton } = props;
  const { name, blurb, address, longitude, latitude, directions, imgUrl, openTime, closeTime, tradingDay } = props.values;
  const { setName, setBlurb, setAddress, setLongitude, setLatitude, setDirections, setImgUrl, setOpenTime, setCloseTime, setTradingDay } = props.setValues;

  return (
    <div className="create-market-form form-container">
      {error && <p>Error: {error.message}</p>}
      <form onSubmit={event => {
          event.preventDefault();
          mutation({ variables });
          event.target.reset();
        }} 
      >
        <div className="form-input-container">
          <div className="form-label-div">
            <label className="form-input" htmlFor="name">Market Name: </label>
          </div>
          <div className="form-input-div">
            <input 
              type="text" 
              className="form-input"
              name="name"
              required
              value={name} 
              onChange={event => setName(event.target.value)} 
            />
          </div>
        </div>
        <div className="form-input-container">
          <div className="form-label-div">
            <label className="form-input" htmlFor="blurb">Information about the market: </label>
          </div>
          <div className="form-input-block">
            <textarea 
              name="blurb" 
              className="form-input form-textarea"
              required
              cols='auto'
              row={'2'}
              value={blurb}
              onChange={event => setBlurb(event.target.value)}
            />
          </div>
        </div>
        <div className="form-input-container">
          <div className="form-label-div">
            <label className="form-label" htmlFor="imgUrl">Image Url: </label>
          </div>
          <div className="form-input-div">
            <input 
              type="text" 
              className="form-input"
              name="imgUrl" 
              value={imgUrl}
              onChange={event => setImgUrl(event.target.value)}
            />
          </div>
        </div>
        <div className="form-input-container">
          <div className="form-label-div">
            <label className="form-label" htmlFor="openTime">Opening Time: </label>
          </div>
          <div className="form-input-div">
            <input 
              type="time" 
              className="form-input"
              name="openTime"
              required
              value={openTime}
              onChange={event => setOpenTime(event.target.value)}
            />
          </div>
        </div>
        <div className="form-input-container">
          <div className="form-label-div">
            <label className="form-label" htmlFor="closeTime">Closing Time: </label>
          </div>
          <div className="form-input-div">
            <input 
              type="time" 
              className="form-input"
              name="closeTime" 
              required
              value={closeTime}
              onChange={event => setCloseTime(event.target.value)}
            />
          </div>
        </div>
        <div className="form-input-container">
          <div className="form-label-div">
            <label className="form-label" htmlFor="tradingDay">Trading Day: </label>
          </div>
          <div className="form-input-div">
            <select 
              className="form-input form-select"
              name="tradingDay" 
              value={tradingDay} 
              onChange={event => setTradingDay(event.target.value)}
            >
              <option disabled value='' >-select day-</option>
              <option value="Monday">Monday</option>
              <option value="Tuesday">Tuesday</option>
              <option value="Wednesday">Wednesday</option>
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
            </select>
          </div>
        </div>
        <div className="form-input-container">
          <div className="from-label-div">
            <label className="form-label" htmlFor="address">Address: </label>
          </div>
          <div className="form-input-div">
            <input 
              type="text" 
              className="form-input"
              name="address" 
              value={address}
              onChange={event => setAddress(event.target.value)}
            />
          </div>
        </div>
        <div className="form-input-container">
          <div className="from-label-div">
            <label className="form-label" htmlFor="directions">Directions: </label>
          </div>
          <div className="form-input-div">
            <input 
              type="text" 
              className="form-input"
              name="directions" 
              value={directions}
              onChange={event => setDirections(event.target.value)}
            />
          </div>
        </div>
        <div className="form-input-container">
          <div className="form-label-div">
            <label className="form-label" htmlFor="geoLocation">GeoLocation: </label>
          </div>
          <div className="form-input-block">
            <div className="form-input-cell">
              <div className="from-label-block">
                <label className="form-label" htmlFor="longitude">Longitude: </label>
              </div>
              <div className="form-input-div">
                <input 
                  type="number" 
                  className="form-input"
                  name="longitude"
                  step={step}
                  min={lon.min}
                  max={lon.max}
                  required
                  value={longitude}
                  onChange={event => setLongitude(event.target.value)} 
                />
              </div>
            </div>
            <div className="form-input-cell">
              <div className="from-label-div">
                <label className="form-label" htmlFor="latitude">Latitude: </label>
              </div>
              <div className="form-input-div">
                <input 
                  type="number" 
                  className="form-input"
                  name="latitude"
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
        </div>
        <div className="form-submit-div">
          <input 
            type="submit" 
            className="form-submit-button"
            value={submitButton}
            disabled={loading}
          />
        </div>
      </form>
    </div>
  );
};

export default MarketForm;
