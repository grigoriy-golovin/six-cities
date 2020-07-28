/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {ActionCreator} from '../../reducer';
import {connect} from 'react-redux';

const _getMark = (isMark) => {
  if (isMark) {
    return <div className="place-card__mark">
      <span>Premium</span>
    </div>;
  } else {
    return null;
  }
};

const FavoriteCard = (props) => {
  const {offer, cardOverHandler, favoriteToggle} = props;
  const {is_premium: isPremium,
    id,
    preview_image,
    price,
    rating,
    is_favorite: isFavorite,
    title,
    type,
    location} = offer;

  return (
    <article className="favorites__card place-card" id={id}>
      {_getMark(isPremium)}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${id}`} onMouseOver={() => cardOverHandler(location)}>
          <img className="place-card__image" src={preview_image} width="150" height="110" alt="Place image" />
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`
              place-card__bookmark-button
              ${isFavorite && `place-card__bookmark-button--active`}
              button
            `}
            type="button"
            onClick={() => favoriteToggle(id)}
          >
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

FavoriteCard.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number,
    is_premium: PropTypes.bool,
    is_favorite: PropTypes.bool,
    preview_image: PropTypes.string,
    price: PropTypes.number,
    rating: PropTypes.number,
    title: PropTypes.string,
    type: PropTypes.string,
    location: PropTypes.object,
  }),
  cardOverHandler: PropTypes.func,
  favoriteToggle: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
});

const mapDispatchToProps = (dispatch) => ({
  favoriteToggle: (id) => dispatch(ActionCreator.favoriteToggle(id)),
});

export {FavoriteCard};
export default connect(mapStateToProps, mapDispatchToProps)(FavoriteCard);
