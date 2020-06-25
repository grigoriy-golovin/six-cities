import React from 'react';
import PlacesList from './../places-list/places-list.jsx';
import PropTypes from "prop-types";

const App = (props) => {

  const {places} = props;
  return <PlacesList places={places} />;
};

App.propTypes = {
  places: PropTypes.array.isRequired,
};

export default App;
