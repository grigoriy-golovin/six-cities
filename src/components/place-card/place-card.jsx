import React from 'react';
import PropTypes from 'prop-types';

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
  const {place, cardOverHandler} = props;
  const {isPremium,
    id,
    imageSrc,
    price,
    rating,
    name,
    type} = place;

  return <article className="cities__place-card place-card" onMouseOver={cardOverHandler} id={id}>
    {_getMark(isPremium)}
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img className="place-card__image" src={imageSrc} width="260" height="200" alt="Place image" />
      </a>
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
          <span style={{width: `${rating}%`}}></span>
          <span className="visually-hidden">Rating</span>
        </div>
      </div>
      <h2 className="place-card__name">
        <a href="#">{name}</a>
      </h2>
      <p className="place-card__type">{type}</p>
    </div>
  </article>;
};

PlaceCard.propTypes = {
  place: PropTypes.exact({
    id: PropTypes.string,
    isPremium: PropTypes.bool,
    imageSrc: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.number,
    name: PropTypes.string,
    type: PropTypes.string,
    coordinates: PropTypes.arrayOf(PropTypes.number),
  }),
  cardOverHandler: PropTypes.func
};

export default PlaceCard;
