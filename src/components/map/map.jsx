import React from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import {connect} from 'react-redux';

class Map extends React.PureComponent {
  constructor(props) {
    super(props);
    this.updataCity();
    this.icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
  }

  updataCity() {
    this.offerCordsArr = this.props.offerCordsArr;
    this.city = [this.props.cityCords.latitude, this.props.cityCords.longitude];
    this.zoom = this.props.cityCords.zoom;
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
      .marker([item.latitude, item.longitude], {icon: this.icon})
      .addTo(this.layerForMarker);
    });
  }

  componentDidUpdate() {
    this.layerForMarker.clearLayers();
    this.updataCity();
    this.map.setView(this.city, this.zoom);
    this.offerCordsArr.map((item) => {
      leaflet
      .marker([item.latitude, item.longitude], {icon: this.icon})
      .addTo(this.layerForMarker);
    });
  }

}
Map.propTypes = {
  offerCordsArr: PropTypes.arrayOf(PropTypes.object),
  cityCords: PropTypes.object.isRequired,
};

const mapStsteToProps = (state, ownProps) => Object.assign({}, ownProps, {
  cityCords: state.offersForCity[0].city.location,
  offerCordsArr: state.offersForCity.map((item) => item.location)

});

export {Map};
export default connect(mapStsteToProps)(Map);
