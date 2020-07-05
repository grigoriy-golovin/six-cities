import offers from "./super-moke.js";

const initialState = {
  sity: `Amsterdam`,
  offers,
};

export const ActionCreator = {
  changeSity: (sityName) => ({
    type: `CHANGE_SITY`,
    payload: sityName,
  }),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `CHANGE_SITY` : return Object.assign({}, state, {
      sity: action.payload,
    });
    case `WEVRVERB` : return Object.assign({}, state, {

    });
  }
  return state;
};
