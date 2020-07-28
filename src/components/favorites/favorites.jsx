import React, {Fragment} from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import FavoriteCard from "../favorite-card/favorite-card.jsx";
import {favoritesSelector} from "../../selectors/selector.js";

const Favorites = (props) => {
  const {offers} = props;
  const cityArr = Array.from(new Set(offers.map((item) => item.city.name)));
  return <Fragment>
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        <section className="favorites">
          <h1 className="favorites__title">Saved listing</h1>
          <ul className="favorites__list">
            {cityArr.map((cityName) => {
              return <li className="favorites__locations-items" key={cityName}>
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>{cityName}</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  {offers.filter((offer) => offer.city.name === cityName).map((item) => {
                    return <FavoriteCard offer={item} key={item.id}/>;
                  })}
                </div>
              </li>;
            })}
          </ul>
        </section>
      </div>
    </main>
    <footer className="footer container">
      <Link className="footer__logo-link" to={`/`}>
        <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
      </Link>
    </footer>
  </Fragment>;
};

Favorites.propTypes = {
  offers: PropTypes.array.isRequired,
};

const mapStsteToProps = (state, ownProps) => Object.assign({}, ownProps, {
  offers: favoritesSelector(state),
});

export {Favorites};
export default connect(mapStsteToProps)(Favorites);
