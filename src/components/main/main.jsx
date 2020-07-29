import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import Locations from "./../locations/locations.jsx";
import Map from "./../map/map.jsx";
import PlacesList from '../places-list/places-list.jsx';
import PlacesSorting from '../places-sotring/places-sotring.jsx';
import {offersForCitySelector} from "../../selectors/selector.js";


const Main = (props) => {
  const {
    cityName,
    offersForCity,
    offerCordsArr,
    cityCords,
  } = props;
  return <div className="page page--gray page--main">
    <main className="page__main page__main--index">
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
            <section className="cities__map map">
              <Map
                cityCords={cityCords}
                offerCordsArr={offerCordsArr}
              />
            </section>
          </div>
        </div>
      </div>
    </main>
  </div>;
};

Main.propTypes = {
  cityName: PropTypes.oneOf([`Amsterdam`, `Paris`, `Hamburg`, `Cologne`, `Dusseldorf`, `Brussels`]),
  offersForCity: PropTypes.arrayOf(PropTypes.object),
  offerCordsArr: PropTypes.arrayOf(PropTypes.object),
  cityCords: PropTypes.object.isRequired,
};


const mapStsteToProps = (state, ownProps) => Object.assign({}, ownProps, {
  cityName: state.city,
  offersForCity: offersForCitySelector(state),
  offerCordsArr: offersForCitySelector(state).map((item) => item.location),
  cityCords: offersForCitySelector(state)[0].city.location,
});

export {Main};
export default connect(mapStsteToProps)(Main);
