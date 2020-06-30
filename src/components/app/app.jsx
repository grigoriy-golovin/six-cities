import React from 'react';
import PlacesList from './../places-list/places-list.jsx';
import Map from './../map/map.jsx';
import PropTypes from "prop-types";

const App = (props) => {

  const {places} = props;

  return <div className="cities">
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">312 places to stay in Amsterdam</b>
        <form className="places__sorting" action="#" method="get">
        </form>
        <div className="cities__places-container container">
          <PlacesList places={places}/>
        </div>
      </section>
      <div className="cities__right-section">
        <Map places={places}/>
      </div>
    </div>
  </div>;

};

App.propTypes = {
  places: PropTypes.array.isRequired,
};

export default App;
