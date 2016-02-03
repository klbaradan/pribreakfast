'use strict';

import assign from 'object-assign';

import { BACKGROUND_COLOR_CHANGE, BACKGROUND_IMAGE_CHANGE, BACKGROUND_IMAGE_LOADING,
  REMOVE_BACKGROUND_IMAGE, BACKGROUND_TYPE_CHANGE, DEFAULT_BACKGROUND_IMAGE,
  BACKGROUND_TYPES, BACKGROUND_COLOR, BACKGROUND_IMAGE, BACKGROUND_LOADING,
  DEFAULT_BACKGROUND, BACKGROUND_IMAGE_UPLOAD } from '../../actions/background';


export default function backgroundReducer(state=DEFAULT_BACKGROUND, action) {
  switch (action.type) {
    case BACKGROUND_COLOR_CHANGE:
      let backgroundColor = action.value;
      return assign({}, state, { backgroundColor, backgroundType: BACKGROUND_COLOR });
    case BACKGROUND_IMAGE_CHANGE:
      return assign({}, state, { backgroundImg: action.value, backgroundType: BACKGROUND_IMAGE });
    case BACKGROUND_IMAGE_UPLOAD:
    case BACKGROUND_IMAGE_LOADING:
      return assign({}, state, { backgroundType: BACKGROUND_LOADING });
    case REMOVE_BACKGROUND_IMAGE:
      return assign({}, state, { backgroundImg: assign({}, DEFAULT_BACKGROUND_IMAGE) });
    case BACKGROUND_TYPE_CHANGE:
      if (BACKGROUND_TYPES.indexOf(action.value) >= 0) {
        return assign({}, state, { backgroundType: action.value });
      }
  }
  return state;
}
