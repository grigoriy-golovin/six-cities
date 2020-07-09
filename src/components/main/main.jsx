import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Locations from "./../locations/locations.jsx";
import Map from "./../map/map.jsx";
import PlacesList from '../places-list/places-list.jsx';
import PlacesSorting from '../places-sotring/places-sotring.jsx';

const Main = (props) => {
  const {cityName, offersForCity} = props;
  return <main className="page__main page__main--index">
    <h1 className="visually-hidden">Cities</h1>
    <div className="tabs">
      <Locations/>
    </div>
    <div className="cities">
      <div className="cities__places-container container">
        <section className="cities__places places">
          <h2 className="visually-hidden">Places</h2>
          <b className="places__found">{offersForCity.length} places to stay in {cityName}</b>
          <PlacesSorting/>
          <PlacesList/>
        </section>
        <div className="cities__right-section">
          <Map/>
        </div>
      </div>
    </div>
  </main>;
};

Main.propTypes = {
  cityName: PropTypes.oneOf([`Amsterdam`, `Paris`, `Hamburg`, `Cologne`, `Dusseldorf`]),
  offersForCity: PropTypes.arrayOf(PropTypes.object)
};


const mapStsteToProps = (state, ownProps) => Object.assign({}, ownProps, {
  cityName: state.city,
  offersForCity: state.offersForCity,
});

// const mapDispatchToProps = (dispatch) => ({
//   onCcdcrvervre: () => dispatch(ActionCreater.ckmcomvom()),
//   onDeekvrpvro: () => dispatch(ActionCreater.wwdecevom())
// });

export {Main};
export default connect(mapStsteToProps)(Main);
