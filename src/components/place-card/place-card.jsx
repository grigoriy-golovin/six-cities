/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const _getMark = (isMark) => {
  if (isMark) {
    return <div className="place-card__mark">
      <span>Premium</span>
    </div>;
  } else {
    return null;
  }
};

const PlaceCard = (props) => {
  const {offer, cardOverHandler} = props;
  const {isPremium,
    id,
    preview_image,
    price,
    rating,
    title,
    type,
    location} = offer;

  return (
    <article className="cities__place-card place-card" id={id}>
      {_getMark(isPremium)}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`} onMouseOver={() => cardOverHandler(location)}>
          <img className="place-card__image" src={preview_image} width="260" height="200" alt="Place image" />
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: `${rating * 10}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${id}`}> {title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

PlaceCard.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number,
    isPremium: PropTypes.bool,
    preview_image: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.number,
    title: PropTypes.string,
    type: PropTypes.string,
    location: PropTypes.object,
  }),
  cardOverHandler: PropTypes.func
};

export default PlaceCard;
