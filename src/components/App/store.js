import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import basketReducer from '../Basket/reducers';
import logReducer from '../Basket/logReducer';

export default createStore(combineReducers({ basket: basketReducer, log: logReducer }),
  composeWithDevTools());
