import { createStore, combineReducers } from 'redux';
// import { Reducer, initialState } from './reducer';
import { Employees } from './employees';
import { composeWithDevTools } from 'redux-devtools-extension';


// PRIOR to COMBINING REDUCERS
// export const ConfigureStore = () => {
//   const store = createStore(
//     Reducer,
//     initialState
//   )

//   return store;
// }


export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      employees: Employees
    }),
    composeWithDevTools()
  )

  return store;
}