import * as types from '../types/cities';

export default function getCitiesToReducer(state = {}, actions) {
  const { type, payload } = actions;

  switch (type) {
    case types.GET_NEW_CITIES_TO: {
      const newState = { ...state };
      // console.log(newState, 'Я состояние куда');
      // console.log(type, payload, 'Я пейлоад куда');
      newState.citiesto = payload;
      // console.log(newState.citiesto, 'Я нью стате куда');
      return newState;
    }

    default: {
      return state;
    }
  }
}
