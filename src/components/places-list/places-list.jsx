import React from 'react';
import PlaceCard from './../place-card/place-card.jsx';
import PropTypes from 'prop-types';

const PlacesList = (props) => {
  const {places} = props;
  return <div className="cities__places-list places__list tabs__content">
    {places.map((item, index) => <PlaceCard name={item} key={index + ` ` + item} />)}
  </div>;
};

PlacesList.propTypes = {
  places: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PlacesList;
