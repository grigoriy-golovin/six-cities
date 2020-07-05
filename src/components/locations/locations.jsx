import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "./../../reducer.js";


const Locations = (props) => {
  const {offers, onChangeSity} = props;
  const sityArr = Array.from(new Set(offers.map((item) => item.city.name)));
  return <section className="locations container">
    <ul className="locations__list tabs__list">
      {sityArr.map((item) => {
        return <li className="locations__item" key={item}>
          <a className="locations__item-link tabs__item" href="#" onClick={(evt) => onChangeSity(item, evt)}>
            <span>{item}</span>
          </a>
        </li>;
      })}
    </ul>
  </section>;
};

Locations.propTypes = {
  offers: PropTypes.array.isRequired,
  onChangeSity: PropTypes.func
};

const mapStsteToProps = (state, ownProps) => Object.assign({}, ownProps, {
  // sity: state.sity,
  offers: state.offers
});

const mapDispatchToProps = (dispatch) => ({
  onChangeSity: (sityName, evt) => {
    evt.preventDefault();
    dispatch(ActionCreator.changeSity(sityName));

  },
});

export {Locations};
export default connect(mapStsteToProps, mapDispatchToProps)(Locations);
