
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
  },
};

export const ActionCreator = {
  changeCity: (cityName) => ({
    type: `CHANGE_CITY`,
    payload: cityName,
  }),

  setSortingOption: (value) => {
    return {
      type: `SORTING_OPTION`,
      payload: value,
    };
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
  favoriteToggle: (id, isAuthorization) => {
    if (isAuthorization) {
      return {
        type: `FAVORITE_TOGGLE`,
        payload: id,
      };
    } else {
      window.history.pushState(null, ``, `/six-cities/login`);
      window.history.go();
      return {
        type: `FAVORITE_TOGGLE`,
        payload: null,
      };
    }
  }
};

export const Operation = {
  loadOffers: () => (dispatch, _, api) => {
    return api.get(`/hotels`)
    .then((response) => {
      dispatch(ActionCreator.loadOffers(response.data));
      // dispatch(ActionCreator.setOffersForCity());
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
      window.history.pushState(null, ``, `/`);
      window.history.go();
    });
  }
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_CITY` : return Object.assign({}, state, {
      city: action.payload,
    });
    case `SORTING_OPTION` : return Object.assign({}, state, {
      sortingOption: action.payload,
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
    case `FAVORITE_TOGGLE` : return Object.assign({}, state, {
      offers: state.offers.map((offer) => {
        if (offer.id === action.payload) {
          return Object.assign({}, offer, {
            // eslint-disable-next-line camelcase
            is_favorite: !offer.is_favorite,
          });
        }
        return offer;
      })
    });
  }
  return state;
};
