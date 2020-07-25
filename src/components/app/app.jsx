import React, {Fragment} from 'react';
import Main from './../main/main.jsx';
import {Switch, Route} from "react-router-dom";
import SingIn from './../sing-in/sing-in.jsx';
import Header from './../header/header.jsx';
import Favorites from '../favorites/favorites.jsx';
import Property from '../property/property.jsx';

// import {connect} from "react-redux";


const App = () => {
  return <Fragment>
    <Header />
    <Switch>
      <Route path="/login" exact component={SingIn}/>
      <Route path="/" exact component={Main}/>
      <Route path="/favorites" exact component={Favorites}/>
      <Route path="/offer/:id" exact component={Property}/>
    </Switch>
  </Fragment>;

};

// App.propTypes = {
//   places: PropTypes.array.isRequired,
// };

// const mapStsteToProps = (state, ownProps) => Object.assign({}, ownProps, {
//   sity: state.sity,
//   offer: state.offer
// });

// const mapDispatchToProps = (dispatch) => ({
//   onCcdcrvervre: () => dispatch(ActionCreator.ckmcomvom()),
//   onDeekvrpvro: () => dispatch(ActionCreator.wwdecevom())
// });

// export {App};
// export default connect(mapStsteToProps, mapDispatchToProps)(App);
export default App;
