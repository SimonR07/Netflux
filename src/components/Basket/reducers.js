import { ADD_TO_BASKET, REMOVE_FROM_BASKET } from './actions';


export default function basketReducer(previousState = 0, action) {
  switch (action.type) {
    case ADD_TO_BASKET:
      return previousState + 1;
    case REMOVE_FROM_BASKET:
      return previousState - 1;
    default:
      return previousState;
  }
}
