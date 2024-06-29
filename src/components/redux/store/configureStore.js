import { createStore, combineReducers } from 'redux';
import facultyReducer from '../reducers/faculties';
import itemReducer from '../reducers/Items';
import listReducer from '../reducers/list';
import ordersReducer from '../reducers/orders';

// import filtersReducer from '../reducers/filters';

export default () => {
  const store = createStore(
    combineReducers({
      faculties: facultyReducer,
      items : itemReducer,
      list: listReducer,
      orders: ordersReducer
      // ,
      // filters: filtersReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  return store;
};
