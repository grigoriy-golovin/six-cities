import React from 'react';
import PlaceCard from './../place-card/place-card.jsx';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {ActionCreator} from "../../reducer.js";


class PlacesList extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    const {offers, setActiveMark} = this.props;
    return <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <PlaceCard
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
};

const mapStsteToProps = (state, ownProps) => Object.assign({}, ownProps, {
  offers: state.offersForCity
});

const mapDispatchToProps = (dispatch) => ({
  setActiveMark: (location) => dispatch(ActionCreator.setActiveMark(location)),
});

export {PlacesList};
export default connect(mapStsteToProps, mapDispatchToProps)(PlacesList);

