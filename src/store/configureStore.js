import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import authReducer from '../reducers/auth';
import weightReducer from '../reducers/weight';
import profileReducer from '../reducers/profile';
import filtersReducer from '../reducers/filters';
import measurementsReducer from '../reducers/measurements';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      weight: weightReducer,
      measurements: measurementsReducer,
      profile: profileReducer,
      filters: filtersReducer,
      auth: authReducer
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
