import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "./../../reducer.js";
import {uniqueCitySelector} from "../../selectors/selector.js";


const Locations = (props) => {

  const {city, cityArr, onChangeCity} = props;

  return <section className="locations container">
    <ul className="locations__list tabs__list">
      {cityArr.map((item) => {
        return <li className="locations__item" key={item}>
          <a className={`locations__item-link tabs__item ${item === city && `tabs__item--active`}`} href="#" onClick={(evt) => onChangeCity(item, evt)}>
            <span>{item}</span>
          </a>
        </li>;
      })}
    </ul>
  </section>;
};

Locations.propTypes = {
  city: PropTypes.string.isRequired,
  cityArr: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChangeCity: PropTypes.func.isRequired
};

const mapStsteToProps = (state, ownProps) => Object.assign({}, ownProps, {
  city: state.city,
  cityArr: uniqueCitySelector(state),

});

const mapDispatchToProps = (dispatch) => ({
  onChangeCity: (cityName, evt) => {
    evt.preventDefault();
    document.querySelector(`.tabs__item--active`).classList.remove(`tabs__item--active`);
    evt.currentTarget.classList.add(`tabs__item--active`);
    dispatch(ActionCreator.changeCity(cityName));
  },
});

export {Locations};
export default connect(mapStsteToProps, mapDispatchToProps)(Locations);
