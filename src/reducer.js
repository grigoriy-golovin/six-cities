import offers from "./super-moke.js";

const initialState = {
  city: `Amsterdam`,
  offers,
};

export const ActionCreator = {
  changeCity: (sityName) => ({
    type: `CHANGE_SITY`,
    payload: sityName,
  }),

  setOffersForSity: () => ({
    type: `SET_OFFERS_FOR_SITY`,
  })
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_SITY` : return Object.assign({}, state, {
      city: action.payload,
    });
    case `SET_OFFERS_FOR_SITY` : return Object.assign({}, state, {
      offersForSity: state.offers.filter((item) => item.city.name === state.city)
    });
  }
  return state;
};
