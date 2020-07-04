import React from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";


const Locations = (props) => {
  const {offers} = props;
  const sityArr = Array.from(new Set(offers.map((item) => item.city.name)));
  return <section className="locations container">
    <ul className="locations__list tabs__list">
      {sityArr.map((item) => {
        return <li className="locations__item" key={item.id}>
          <a className="locations__item-link tabs__item" href="#">
            <span>{item}</span>
          </a>
        </li>;
      })}
    </ul>
  </section>;
};

Locations.propTypes = {
  offers: PropTypes.array.isRequired
};

const mapStsteToProps = (state, ownProps) => Object.assign({}, ownProps, {
  // sity: state.sity,
  offers: state.offers
});


export {Locations};
export default connect(mapStsteToProps)(Locations);
