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
      {places.map((place) => <PlaceCard
        place={place}
        key={place.id}
        cardOverHandler={(evt) => {
          evt.stopPropagation();
          const id = evt.currentTarget.id;
          this.setState({place: id});
        }}
      />)}
    </div>;
  }
}

PlacesList.propTypes = {
  places: PropTypes.array.isRequired,
};

export default PlacesList;
