import { LOG_IN } from './actions';


export default function isLogged(state = 'on', action) {
  switch (action.type) {
    case LOG_IN:
      return state === 'on' ? 'off' : 'on';
    default:
      return state;
  }
}
