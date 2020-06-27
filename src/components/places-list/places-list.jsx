import React from 'react';
import PlaceCard from './../place-card/place-card.jsx';
import PropTypes from 'prop-types';

class PlacesList extends React.PureComponent {

  constructor(props) {
    super(props);
  }
  render() {
    const {places} = this.props;
    return <div className="cities__places-list places__list tabs__content">
      {places.map((item, index) => <PlaceCard name={item.name} key={index + ` ` + item.name} />)}
    </div>;
  }
}

PlacesList.propTypes = {
  places: PropTypes.array.isRequired,
};

export default PlacesList;
