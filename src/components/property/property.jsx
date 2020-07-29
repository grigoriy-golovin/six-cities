import React from "react";
// import {Link} from "react-router-dom";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {ActionCreator} from '../../reducer';
import Map from "../map/map.jsx";
// import {offersForCitySelector} from "../../selectors/selector.js";
import PlaceCard from './../place-card/place-card.jsx';

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
          <section className="property__reviews reviews">
            <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
            <ul className="reviews__list">
              <li className="reviews__item">
                <div className="reviews__user user">
                  <div className="reviews__avatar-wrapper user__avatar-wrapper">
                    <img className="reviews__avatar user__avatar" src="/img/avatar-max.jpg" width="54" height="54" alt="Reviews avatar"/>
                  </div>
                  <span className="reviews__user-name">
                    Max
                  </span>
                </div>
                <div className="reviews__info">
                  <div className="reviews__rating rating">
                    <div className="reviews__stars rating__stars">
                      <span style={{width: `94%`}}></span>
                      <span className="visually-hidden">Rating</span>
                    </div>
                  </div>
                  <p className="reviews__text">
                    A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.
                  </p>
                  <time className="reviews__time" dateTime="2019-04-24">April 2019</time>
                </div>
              </li>
            </ul>
            {isAuthorization && <form className="reviews__form form" action="#" method="post">
              <label className="reviews__label form__label" htmlFor="review">Your review</label>
              <div className="reviews__rating-form form__rating">
                <input className="form__rating-input visually-hidden" name="rating" value="5" id="5-stars" type="radio"/>
                <label htmlFor="5-stars" className="reviews__rating-label form__rating-label" title="perfect">
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>

                <input className="form__rating-input visually-hidden" name="rating" value="4" id="4-stars" type="radio"/>
                <label htmlFor="4-stars" className="reviews__rating-label form__rating-label" title="good">
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>

                <input className="form__rating-input visually-hidden" name="rating" value="3" id="3-stars" type="radio"/>
                <label htmlFor="3-stars" className="reviews__rating-label form__rating-label" title="not bad">
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>

                <input className="form__rating-input visually-hidden" name="rating" value="2" id="2-stars" type="radio"/>
                <label htmlFor="2-stars" className="reviews__rating-label form__rating-label" title="badly">
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>

                <input className="form__rating-input visually-hidden" name="rating" value="1" id="1-star" type="radio"/>
                <label htmlFor="1-star" className="reviews__rating-label form__rating-label" title="terribly">
                  <svg className="form__star-image" width="37" height="33">
                    <use xlinkHref="#icon-star"></use>
                  </svg>
                </label>
              </div>
              <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved"></textarea>
              <div className="reviews__button-wrapper">
                <p className="reviews__help">
                  To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
                </p>
                <button className="reviews__submit form__submit button" type="submit" disabled="">Submit</button>
              </div>
            </form>}
          </section>
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


