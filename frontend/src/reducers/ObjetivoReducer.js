import { SET_OBJETIVO } from '../actions/types';

const initialState = '';

const objetivoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_OBJETIVO:
      return action.payload;
    default:
      return state;
  }
};

export default objetivoReducer;

