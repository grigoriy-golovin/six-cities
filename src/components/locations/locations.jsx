import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "./../../reducer.js";


const Locations = (props) => {

  const {sityArr, onChangeSity} = props;

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
  sityArr: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChangeSity: PropTypes.func.isRequired
};

const mapStsteToProps = (state, ownProps) => Object.assign({}, ownProps, {
  // sity: state.sity,
  sityArr: Array.from(new Set(state.offers.map((item) => item.city.name)))

});

const mapDispatchToProps = (dispatch) => ({
  onChangeSity: (sityName, evt) => {
    evt.preventDefault();
    dispatch(ActionCreator.changeSity(sityName));

  },
});

export {Locations};
export default connect(mapStsteToProps, mapDispatchToProps)(Locations);
