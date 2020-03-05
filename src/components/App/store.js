import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import basketReducer from '../Basket/reducers';

export default createStore(combineReducers({ basket: basketReducer }),
  composeWithDevTools());
