import React from 'react';
// import PlacesList from './../places-list/places-list.jsx';
// import Map from './../map/map.jsx';
import Main from './../main/main.jsx';
import PropTypes from "prop-types";
import {connect} from "react-redux";

const App = (props) => {

  const {places} = props;

  // return <div className="cities">
  //   <div className="cities__places-container container">
  //     <section className="cities__places places">
  //       <h2 className="visually-hidden">Places</h2>
  //       <b className="places__found">312 places to stay in Amsterdam</b>
  //       <form className="places__sorting" action="#" method="get">
  //       </form>
  //       <div className="cities__places-container container">
  //         <PlacesList places={places}/>
  //       </div>
  //     </section>
  //     <div className="cities__right-section">
  //       <Map places={places}/>
  //     </div>
  //   </div>
  // </div>;

  return <div className="page page--gray page--main">
    <Main/>
  </div>;

};

// App.propTypes = {
//   places: PropTypes.array.isRequired,
// };

// const mapStsteToProps = (state, ownProps) => Object.assign({}, ownProps, {
//   sity: state.sity,
//   offer: state.offer
// });

// const mapDispatchToProps = (dispatch) => ({
//   onCcdcrvervre: () => dispatch(ActionCreater.ckmcomvom()),
//   onDeekvrpvro: () => dispatch(ActionCreater.wwdecevom())
// });

// export {App};
// export default connect(mapStsteToProps, mapDispatchToProps)(App);
export default App;
