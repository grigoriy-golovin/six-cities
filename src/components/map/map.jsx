import React from 'react';
import PropTypes from 'prop-types';
import leaflet from 'leaflet';
import {connect} from 'react-redux';

class Map extends React.PureComponent {
  constructor(props) {
    super(props);

    this.updataCity();

    this.icon = leaflet.icon({
      iconUrl: `/six-cities/public/img/pin.svg`,
      iconSize: [30, 30]
    });

    this.iconActive = leaflet.icon({
      iconUrl: `/six-cities/public/img/pin-active.svg`,
      iconSize: [35, 35]
    });
  }

  updataCity() {
    this.offerCordsArr = this.props.offerCordsArr;
    this.city = [this.props.cityCords.latitude, this.props.cityCords.longitude];
    this.zoom = this.props.cityCords.zoom;
  }

  render() {
    return <div id="map" style={{height: `100%`}}></div>;
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
    // this.layerForMarkerActive = leaflet.layerGroup().addTo(this.map);

    this.offerCordsArr.map((item) => {
      leaflet
      .marker([item.latitude, item.longitude], {icon: this.icon})
      .addTo(this.layerForMarker);
    });
  }

  componentDidUpdate() {
    const {cordsActiveMark} = this.props;
    this.layerForMarker.clearLayers();
    this.updataCity();
    this.map.setView(this.city, this.zoom);
    this.offerCordsArr.map((item) => {
      leaflet
      .marker([item.latitude, item.longitude], {icon: this.icon})
      .addTo(this.layerForMarker);
    });
    if (cordsActiveMark) {
      leaflet
      .marker([cordsActiveMark.latitude, cordsActiveMark.longitude], {icon: this.iconActive})
      .addTo(this.layerForMarker);
    }
  }

}
Map.propTypes = {
  offerCordsArr: PropTypes.arrayOf(PropTypes.object),
  cityCords: PropTypes.object.isRequired,
  cordsActiveMark: PropTypes.object,
};

const mapStsteToProps = (state, ownProps) => Object.assign({}, ownProps, {
  cordsActiveMark: state.cordsActiveMark,
});

export {Map};
export default connect(mapStsteToProps)(Map);
