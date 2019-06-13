import React, { useState } from 'react';

function CreateMarketForm(props) {

  const [name, setName] = useState('');
  const [blurb, setBlurb] = useState('');
  const [address, setAddress] = useState('');
  const [longatude, setLongatude] = useState(0.0);
  const [latatude, setLatatude] = useState(0.0);
  const geoLocation = {type: 'point', coordinates: [longatude, latatude]}
  const [directions, setDirections] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [openTime, setOpenTime] = useState('');
  const [closeTime, setCloseTime] = useState('');
  const [tradingDay, setTradingDay] = useState('');
  const openHours = { openTime, closeTime, tradingDay, };


  const handleSubmit = event => {
    event.preventDefault();

  };

  return (
    <div className="create-market-form form">
      <form onSubmit={handleSubmit} >
        <label htmlFor="name">Market Name: </label>
        <input 
          type="text" 
          name="name" 
          value={name} 
          onChange={event => setName(event.target.value)} 
        />
        <label htmlFor="blurb">Information about the market: </label>
        <textarea 
          name="blurb" 
          value={blurb}
          onChange={event => setBlurb(event.target.value)}
        />
        <label htmlFor="imgUrl">Image Url: </label>
        <input 
          type="text" 
          name="imgUrl" 
          value={imgUrl}
          onChange={event => setImgUrl(event.target.value)}
        />
        <label htmlFor="openTime">Opening Time: </label>
        <input 
          type="time" 
          name="openTime"
          value={openTime}
          onChange={event => setOpenTime(event.target.value)}
        />
        <label htmlFor="closeTime">Closing Time: </label>
        <input 
          type="time" 
          name="closeTime" 
          value={closeTime}
          onChange={event => setCloseTime(event.target.value)}
        />
        <label htmlFor="tradingDay">Trading Day: </label>
        <input 
          type="text" 
          name="tradingDay"
        />
        <select name="tradingDay" onSelect={setTradingDay}>
          <option value="Saturday">Saturday</option>
          <option value="Sunday">Sunday</option>
          <option value="Monday">Monday</option>
          <option value="Tuesday">Tuesday</option>
          <option value="Wednesday">Wednesday</option>
          <option value="Thursday">Thursday</option>
          <option value="Friday">Friday</option>
        </select>
        <label htmlFor="address">Address: </label>
        <input 
          type="text" 
          name="address" 
          value={address}
          onChange={event => setAddress(event.target.value)}
        />
        <label htmlFor="directions">Directions: </label>
        <input 
          type="text" 
          name="directions" 
          value={directions}
          onChange={event => setDirections(event.target.value)}
        />
        <label htmlFor="geoLocation">GeoLocation: </label>
        <label htmlFor="longatude">Longatude: </label>
        <input 
          type="number" 
          name="longatude"
          value={longatude}
          onChange={event => setLongatude(event.target.value)} 
        />
        <label htmlFor="latatude">latatude: </label>
        <input 
          type="number" 
          name="latatude"
          value={latatude}
          onChange={event => setLatatude(event.target.value)} 
        />
        <input type="submit" value="Create"/>
      </form>
    </div>
  );
};

export default CreateMarketForm;
