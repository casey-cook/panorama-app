import { createStore, combineReducers } from 'redux';
import { Employees } from './employees';
import { composeWithDevTools } from 'redux-devtools-extension';

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      employees: Employees,
    }),
    composeWithDevTools()
  )

  return store;
}