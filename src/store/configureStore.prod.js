import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import makeRootReducer from './reducers';
import todoApp from '../reducers';

const middlewares = [thunk];
// Middleware you want to use in production:
const enhancer = applyMiddleware(...middlewares);

export default function configureStore(initialState) {
  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  return createStore(todoApp, initialState, enhancer);
};
