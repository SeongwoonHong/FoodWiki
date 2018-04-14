/* eslint-disable max-len */
import * as types from '../actions/types';

const initialState = {
  status: 'INIT',
  payload: null
};

export default function yelpReducer(state = initialState, action) {

  switch (action.type) {

    case types.FETCH_YELP:
      return {
        status: 'WAITING'
      };

    case types.FETCH_YELP_SUCCESS:
      console.log(action.payload);
      return {
        status: 'SUCCESS',
        payload: action.payload.businesses
      };

    case types.FETCH_YELP_FAILURE:
      return {
        status: 'FAILURE',
        payload: action.error
      };

    default:
      return state;

  }

}
