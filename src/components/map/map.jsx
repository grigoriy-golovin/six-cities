import React from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import {connect} from 'react-redux';

class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this.offerCordsArr = this.props.offers.map((item) => item.location);
    this.city = [52.38333, 4.9];

    this.icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    this.zoom = 12;
  }

  render() {
    return <section className="cities__map map">
      <div id="map" style={{height: `100%`}}></div>
    </section>;
  }

  componentDidMount() {
    this.map = leaflet.map(`map`, {
      center: this.city,
      zoom: this.zoom,
      zoomControl: false,
      marker: true
    });

    this.map.setView(this.city, this.zoom);
    leaflet
    .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
      attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
    })
    .addTo(this.map);

    this.layerForMarker = leaflet.layerGroup().addTo(this.map);

    this.offerCordsArr.map((item) => {
      leaflet
      .marker([item.latitude, item.longitude], this.icon)
      .addTo(this.layerForMarker);
    });
  }

  componentDidUpdate() {
    this.layerForMarker.clearLayers();
    this.offerCordsArr = this.props.offers.map((item) => item.location);
    this.offerCordsArr.map((item) => {
      leaflet
      .marker([item.latitude, item.longitude], this.icon)
      .addTo(this.layerForMarker);
    });
  }

}
Map.propTypes = {
  offers: PropTypes.arrayOf(PropTypes.shape({
    coordinates: PropTypes.arrayOf(PropTypes.number),
  }))
};

const mapStsteToProps = (state, ownProps) => Object.assign({}, ownProps, {
  // sity: state.sity,
  offers: state.offersForCity
});

export {Map};
export default connect(mapStsteToProps)(Map);
