import React from "react";
// import {Link} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {ActionCreator} from '../../reducer';
import Map from "../map/map.jsx";
import PlaceCard from './../place-card/place-card.jsx';
// import ReviewsList from "../reviews-list/reviews-list";

const Property = (props) => {
  const {match, offers, isAuthorization, favoriteToggle, setActiveMark} = props;
  const id = parseInt(match.params.id, 10);
  const offer = offers.find((item) => item.id === id);
  const {
    city,
    images,
    title,
    is_favorite: isFavorite,
    is_premium: isPremium,
    rating,
    type,
    bedrooms,
    max_adults: maxAdults,
    price,
    goods,
    host,
    description,
    location
  } = offer;

  const offersInNeighbourhood = offers
  .slice()
  .filter((item) => item.city.name === city.name)
  .sort((a, b) => {
    return (Math.sqrt(Math.pow((a.location.latitude - location.latitude), 2) + Math.pow((a.location.longitude - location.longitude), 2)) -
            Math.sqrt(Math.pow((b.location.latitude - location.latitude), 2) + Math.pow((b.location.longitude - location.longitude), 2)));
  }).slice(1, 4);

  const offersInNeighbourhoodCordsArr = offersInNeighbourhood.map((item) => item.location);

  return <main className="page__main page__main--property">
    <section className="property">
      <div className="property__gallery-container container">
        <div className="property__gallery">
          {images.slice(0, 6).map((item) => {
            return <div className="property__image-wrapper" key={id + item}>
              <img className="property__image" src={item} alt="Photo studio"/>
            </div>;
          })}
        </div>
      </div>
      <div className="property__container container">
        <div className="property__wrapper">
          {isPremium &&
          <div className="property__mark">
            <span>Premium</span>
          </div>
          }
          <div className="property__name-wrapper">
            <h1 className="property__name">
              {title}
            </h1>
            <button
              className={`
              property__bookmark-button
                ${isFavorite && `property__bookmark-button--active`}
                button
              `}
              type="button"
              onClick={() => favoriteToggle(id, isAuthorization)}
            >
              <svg className="property__bookmark-icon place-card__bookmark-icon" width="31" height="33">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="property__rating rating">
            <div className="property__stars rating__stars">
              <span style={{width: `${rating * 10}%`}}></span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="property__rating-value rating__value">{rating}</span>
          </div>
          <ul className="property__features">
            <li className="property__feature property__feature--entire">
              {type}
            </li>
            <li className="property__feature property__feature--bedrooms">
              {bedrooms} Bedrooms
            </li>
            <li className="property__feature property__feature--adults">
              Max {maxAdults} adults
            </li>
          </ul>
          <div className="property__price">
            <b className="property__price-value">&euro;{price}</b>
            <span className="property__price-text">&nbsp;night</span>
          </div>
          <div className="property__inside">
            <h2 className="property__inside-title">What&apos;s inside</h2>
            <ul className="property__inside-list">
              {goods.map((item) => {
                return <li className="property__inside-item" key={id + item}>
                  {item}
                </li>;
              })}
            </ul>
          </div>
          <div className="property__host">
            <h2 className="property__host-title">Meet the host</h2>
            <div className="property__host-user user">
              <div className={`property__avatar-wrapper ${host.is_pro && `property__avatar-wrapper--pro`} user__avatar-wrapper`}>
                <img className="property__avatar user__avatar" src={`/${host.avatar_url}`} width="74" height="74" alt="Host avatar"/>
              </div>
              <span className="property__user-name">
                {host.name}
              </span>
              {host.is_pro && <span className="property__user-status">
                Pro
              </span>}
            </div>
            <div className="property__description">
              <p className="property__text">
                {description}
              </p>
            </div>
          </div>
          {/* <ReviewsList/> */}
        </div>
      </div>
      <section className="property__map map">
        <Map
          cityCords={city.location}
          offerCordsArr={offersInNeighbourhoodCordsArr}
        />
      </section>
    </section>
    <div className="container">
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <div className="near-places__list places__list">

          {offersInNeighbourhood.map((item) => <PlaceCard
            offer={item}
            key={item.id}
            cardOverHandler={(loc) => setActiveMark(loc)}
          />)}

        </div>
      </section>
    </div>
  </main>;
};

Property.propTypes = {
  match: PropTypes.object.isRequired,
  offers: PropTypes.array.isRequired,
  isAuthorization: PropTypes.bool.isRequired,
  favoriteToggle: PropTypes.func.isRequired,
  setActiveMark: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  offers: state.offers,
  isAuthorization: state.isAuthorization,
});

const mapDispatchToProps = (dispatch) => ({
  favoriteToggle: (id, isAuthorization) => dispatch(ActionCreator.favoriteToggle(id, isAuthorization)),
  setActiveMark: (loc) => dispatch(ActionCreator.setActiveMark(loc)),
});


export {Property};
export default connect(mapStateToProps, mapDispatchToProps)(Property);


