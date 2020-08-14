import React from "react";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import FavoriteCard from "../favorite-card/favorite-card.jsx";
import {favoritesSelector} from "../../selectors/selector.js";
import Header from './../header/header.jsx';

const Favorites = (props) => {
  const {offers} = props;
  const cityArr = Array.from(new Set(offers.map((item) => item.city.name)));
  return <div className="page">
    <Header />
    {offers.length === 0 ?
      <main className="page__main page__main--favorites page__main--favorites-empty">
        <div className="page__favorites-container container">
          <section className="favorites favorites--empty">
            <h1 className="visually-hidden">Favorites (empty)</h1>
            <div className="favorites__status-wrapper">
              <b className="favorites__status">Nothing yet saved.</b>
              <p className="favorites__status-description">Save properties to narrow down search or plan yor future trips.</p>
            </div>
          </section>
        </div>
      </main>
      :
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
    }
    <footer className="footer container">
      <Link className="footer__logo-link" to={`/`}>
        <img className="footer__logo" src="/six-cities/public/img/logo.svg" alt="6 cities logo" width="64" height="33" />
      </Link>
    </footer>
  </div>;
};

Favorites.propTypes = {
  offers: PropTypes.array.isRequired,
};

const mapStsteToProps = (state, ownProps) => Object.assign({}, ownProps, {
  offers: favoritesSelector(state),
});

export {Favorites};
export default connect(mapStsteToProps)(Favorites);
