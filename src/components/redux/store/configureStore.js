import { createStore, combineReducers } from 'redux';
import facultyReducer from '../reducers/faculties';
import itemReducer from '../reducers/Items';

// import filtersReducer from '../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
      faculties: facultyReducer,
      items : itemReducer,
      // ,
      // filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
