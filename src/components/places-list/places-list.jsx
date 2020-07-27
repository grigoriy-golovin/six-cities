import React from 'react';
import PlaceCard from './../place-card/place-card.jsx';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from "../../reducer.js";
import {offersForCitySelector} from "../../selectors/selector.js";


class PlacesList extends React.PureComponent {

  constructor(props) {
    super(props);


  }

  sort(sortingOption, offers) {
    switch (sortingOption) {
      case `Popular`: return offers.sort((a, b) => a.id - b.id);
      case `Price: low to high`: return offers.sort((a, b) => a.price - b.price);
      case `Price: high to low`: return offers.sort((a, b) => b.price - a.price);
      case `Top rated first`: return offers.sort((a, b) => b.rating - a.rating);
    }
    return offers.sort((a, b) => a.id - b.id);
  }

  render() {
    const {offers, setActiveMark, sortingOption} = this.props;
    return <div className="cities__places-list places__list tabs__content">
      {this.sort(sortingOption, offers).map((offer) => <PlaceCard
        offer={offer}
        key={offer.id}
        cardOverHandler={(location) => setActiveMark(location)}
      />)}
    </div>;
  }
}

PlacesList.propTypes = {
  offers: PropTypes.array.isRequired,
  setActiveMark: PropTypes.func,
  sortingOption: PropTypes.oneOf([`Popular`, `Price: low to high`, `Price: high to low`, `Top rated first`]),
};

const mapStsteToProps = (state, ownProps) => Object.assign({}, ownProps, {
  offers: offersForCitySelector(state),
  sortingOption: state.sortingOption,
});

const mapDispatchToProps = (dispatch) => ({
  setActiveMark: (location) => dispatch(ActionCreator.setActiveMark(location)),
});

export {PlacesList};
export default connect(mapStsteToProps, mapDispatchToProps)(PlacesList);

