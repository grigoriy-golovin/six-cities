import offers from "./super-moke.js";

const initialState = {
  city: `Amsterdam`,
  offers,
};

export const ActionCreator = {
  changeCity: (cityName) => ({
    type: `CHANGE_CITY`,
    payload: cityName,
  }),

  setOffersForCity: () => ({
    type: `SET_OFFERS_FOR_CITY`,
  })
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_CITY` : return Object.assign({}, state, {
      city: action.payload,
    });
    case `SET_OFFERS_FOR_CITY` : return Object.assign({}, state, {
      offersForCity: state.offers.filter((item) => item.city.name === state.city)
    });
  }
  return state;
};
