import * as types from '../types/cities';

export default function getCitiesReducer(state = {}, actions) {
  const { type, payload } = actions;

  switch (type) {
    case types.GET_NEW_CITIES_FROM: {
      const newState = { ...state };
      // console.log(newState, 'Я состояние откуда');
      // console.log(type, payload, 'Я пейлоад откуда');
      newState.cities = payload;
      // console.log(newState.cities, 'Я нью стате откуда');
      return newState;
    }

    default: {
      return state;
    }
  }
}
