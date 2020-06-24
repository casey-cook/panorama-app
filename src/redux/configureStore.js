import { createStore, combineReducers } from 'redux';
import { Employees } from './employees';
import { Reviews } from './reviews';
import { composeWithDevTools } from 'redux-devtools-extension';


export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      employees: Employees,
      reviews: Reviews
    }),
    composeWithDevTools()
  )

  return store;
}