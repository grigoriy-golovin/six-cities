import React from 'react';
import PlaceCard from './../place-card/place-card.jsx';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class PlacesList extends React.PureComponent {

  constructor(props) {
    super(props);
  }

  render() {
    const {offers} = this.props;
    return <div className="cities__places-list places__list tabs__content">
      {offers.map((offer) => <PlaceCard
        offer={offer}
        key={offer.id}
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
  offers: PropTypes.array.isRequired,
};

const mapStsteToProps = (state, ownProps) => Object.assign({}, ownProps, {
  // sity: state.sity,
  offers: state.offersForCity
});


export {PlacesList};
export default connect(mapStsteToProps)(PlacesList);

