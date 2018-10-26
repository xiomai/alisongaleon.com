import * as actionTypes from '../actionTypes';

const initialState = {
  loading: false,
  imgSrc: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CH_GOMICS_PENDING: {
      return {
        ...state,
        loading: true,
      };
    }
    case actionTypes.FETCH_CH_GOMICS_FULFILLED: {
      return {
        ...state,
        loading: false,
        imgSrc: action.payload,
      };
    }
    case actionTypes.FETCH_CH_GOMICS_REJECTED: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default reducer;

export { initialState };
