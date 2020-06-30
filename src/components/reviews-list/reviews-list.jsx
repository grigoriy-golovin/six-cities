import React from 'react';
import ReviewsItem from './../reviews-item/reviews-item.jsx';

const ReviewsList = (props) => {
  return <section className="property__reviews reviews">
    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
    <ul className="reviews__list">
      <ReviewsItem/>
    </ul>

  </section>;
};

export default ReviewsList;
