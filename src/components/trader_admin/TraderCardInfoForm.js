import React from 'react';

function TraderCardInfoForm(props) {
  const { mutation, variables, submitButton, loading, error } = props;
  const { name, blurb, imgUrl, produceTags, website, email, facebook, twitter, instagram } = props.values;
  const { setName, setBlurb, setImgUrl, setProduceTags, setWebsite, setEmail, setFacebook, setTwitter, setInstagram } = props.setValues;

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
            <label className="form-label" htmlFor="name">Stall's Name: </label>
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
            <label className="form-label" htmlFor="blurb">Information about the Stall: </label>
          </div>
          <div className="form-input-div">
            <textarea 
              name="blurb"
              className="form-input form-textarea" 
              required
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
            <label className="form-label" htmlFor="produceTags">Produce Tags: </label>
          </div>
          <div className="form-input-div">
            <input 
              type="text" 
              className="form-input"
              name="produceTags" 
              required
              value={produceTags}
              onChange={event => setProduceTags([event.target.value])}
            />
          </div>
        </div>
        <div className="form-input-container">
          <div className="form-label-block">
            <label className="form-label" htmlFor="links">External Links: </label>
          </div>
        </div>
        <div className="form-input-container-row">
          <div className="form-label-div">
            <label className="form-label" htmlFor="website">Website: </label>
          </div>
          <div className="form-input-div-row">
            <input 
              type="text" 
              className="form-input"
              name="website"
              value={website}
              onChange={event => setWebsite(event.target.value)}
            />
          </div>
        </div>
        <div className="form-input-container-row">
          <div className="form-label-div">
            <label className="form-label" htmlFor="email">Email: </label>
          </div>
          <div className="form-input-div-row">
            <input 
              type="text" 
              className="form-input"
              name="email"
              value={email}
              onChange={event => setEmail(event.target.value)}
            />
          </div>
        </div>
        <div className="form-input-container-row">
          <div className="form-label-div">
            <label className="form-label" htmlFor="facebook">Facebook: </label>
          </div>
          <div className="form-input-div-row">
            <input 
              type="text" 
              className="form-input"
              name="facebook"
              value={facebook}
              onChange={event => setFacebook(event.target.value)}
            />
          </div>
        </div>
        <div className="form-input-container-row">
          <div className="form-label-div">
            <label className="form-label" htmlFor="twitter">Twitter: </label>
          </div>
          <div className="form-input-div-row">
            <input 
              type="text" 
              className="form-input"
              name="twitter"
              value={twitter}
              onChange={event => setTwitter(event.target.value)}
            />
          </div>
        </div>
        <div className="form-input-container-row">
          <div className="form-label-div">
            <label className="form-label" htmlFor="instagram">Instagram: </label>
          </div>
          <div className="form-input-div-row">
            <input 
              type="text" 
              className="form-input"
              name="instagram"
              value={instagram}
              onChange={event => setInstagram(event.target.value)}
            />
          </div>
        </div>
        <div className="form-submit-div">
          <input 
            className="form-submit-button" 
            type="submit" 
            value={submitButton} 
            disabled={loading}
          />
        </div>
      </form>
    </div>
  );
};

export default TraderCardInfoForm;
