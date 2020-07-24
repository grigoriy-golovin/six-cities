
const initialState = {
  city: `Amsterdam`,
  isAuthorization: false,
  userData: {
    id: -1,
    email: `notEmail`,
    name: `notName`,
    // eslint-disable-next-line camelcase
    avatar_url: ``,
    // eslint-disable-next-line camelcase
    is_pro: false

  }
};

export const ActionCreator = {
  changeCity: (cityName) => ({
    type: `CHANGE_CITY`,
    payload: cityName,
  }),

  setOffersForCity: () => ({
    type: `SET_OFFERS_FOR_CITY`,
  }),

  setSortingOption: (value) => {
    switch (value) {
      case `Popular`: return {type: `SORTING_FOR_ID`};
      case `Price: low to high`: return {type: `SORTING_FOR_PRICE_LOW`};
      case `Price: high to low`: return {type: `SORTING_FOR_PRICE_HIGH`};
      case `Top rated first`: return {type: `SORTING_FOR_RATED`};
    }
    return {type: `SORTING_FOR_ID`};
  },
  setActiveMark: (location) => ({
    type: `SET_ACTIVE_MARK`,
    payload: location,
  }),
  loadOffers: (offers) => ({
    type: `LOAD_OFFERS`,
    payload: offers
  }),
  authorization: (isAuthorization) => ({
    type: `AUTHORIZATION`,
    payload: isAuthorization,
  }),
  setUserData: (data) => ({
    type: `SET_USER_DATA`,
    payload: data,
  }),
};

export const Operation = {
  loadOffers: () => (dispatch, _, api) => {
    return api.get(`/hotels`)
    .then((response) => {
      dispatch(ActionCreator.loadOffers(response.data));
      dispatch(ActionCreator.setOffersForCity());
    });
  },

  checkedIsAuthorization: () => (dispatch, _, api) => {
    return api.get(`/login`)
    .then((response) => {
      dispatch(ActionCreator.setUserData(response.data));
      dispatch(ActionCreator.authorization(true));

    })
    .catch(() => {});
  },

  login: (data) => (dispatch, _, api) => {
    return api.post(`/login`,
        {
          email: data.email,
          passworld: data.password,
        }
    ).then((response) => {
      dispatch(ActionCreator.setUserData(response.data));
      dispatch(ActionCreator.authorization(true));
    });
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_CITY` : return Object.assign({}, state, {
      city: action.payload,
    });
    case `SET_OFFERS_FOR_CITY` : return Object.assign({}, state, {
      offersForCity: state.offers.filter((item) => item.city.name === state.city)
    });
    case `SORTING_FOR_ID` : return Object.assign({}, state, {
      offersForCity: Array.from(state.offersForCity).sort((a, b) => a.id - b.id)
    });
    case `SORTING_FOR_PRICE_LOW` : return Object.assign({}, state, {
      offersForCity: Array.from(state.offersForCity).sort((a, b) => a.price - b.price)
    });
    case `SORTING_FOR_PRICE_HIGH` : return Object.assign({}, state, {
      offersForCity: Array.from(state.offersForCity).sort((a, b) => b.price - a.price)
    });
    case `SORTING_FOR_RATED` : return Object.assign({}, state, {
      offersForCity: Array.from(state.offersForCity).sort((a, b) => b.rating - a.rating)
    });
    case `SET_ACTIVE_MARK` : return Object.assign({}, state, {
      cordsActiveMark: action.payload,
    });
    case `LOAD_OFFERS` : return Object.assign({}, state, {
      offers: action.payload,
    });
    case `AUTHORIZATION` : return Object.assign({}, state, {
      isAuthorization: action.payload,
    });
    case `SET_USER_DATA` : return Object.assign({}, state, {
      userData: action.payload,
    });
  }
  return state;
};
