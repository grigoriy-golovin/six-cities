import {createSelector} from 'reselect';

const getOffers = (state) => state.offers;
const getCity = (state) => state.city;

export const offersForCitySelector = createSelector(
    getOffers,
    getCity,
    (offers, city) => offers.filter((item) => item.city.name === city)
);

export const favoritesSelector = createSelector(
    getOffers,
    (offers) => offers.filter((offer) => offer.is_favorite)
);

export const uniqueCitySelector = createSelector(
    getOffers,
    (offers) => Array.from(new Set(offers.map((item) => item.city.name)))
);

