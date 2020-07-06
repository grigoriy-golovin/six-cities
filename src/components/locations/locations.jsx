import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "./../../reducer.js";


const Locations = (props) => {

  const {cityArr, onChangecity} = props;

  return <section className="locations container">
    <ul className="locations__list tabs__list">
      {cityArr.map((item) => {
        return <li className="locations__item" key={item}>
          <a className="locations__item-link tabs__item" href="#" onClick={(evt) => onChangecity(item, evt)}>
            <span>{item}</span>
          </a>
        </li>;
      })}
    </ul>
  </section>;
};

Locations.propTypes = {
  cityArr: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChangecity: PropTypes.func.isRequired
};

const mapStsteToProps = (state, ownProps) => Object.assign({}, ownProps, {
  // city: state.city,
  cityArr: Array.from(new Set(state.offers.map((item) => item.city.name)))

});

const mapDispatchToProps = (dispatch) => ({
  onChangecity: (cityName, evt) => {
    evt.preventDefault();
    dispatch(ActionCreator.changeCity(cityName));
    dispatch(ActionCreator.setOffersForSity());
  },
});

export {Locations};
export default connect(mapStsteToProps, mapDispatchToProps)(Locations);
