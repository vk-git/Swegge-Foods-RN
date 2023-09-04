import {configureStore} from '@reduxjs/toolkit';
import {combineReducers} from 'redux';
import cartState from './reducers/cart';

const reducer = combineReducers({
  cartState,
});

const store = configureStore({
  reducer,
});

export default store;
