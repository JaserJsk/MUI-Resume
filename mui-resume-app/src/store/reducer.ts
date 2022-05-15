// third-party
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Project Imports
import userReducer from './slices/user';
import cartReducer from './slices/cart';
import menuReducer from './slices/menu';
import snackbarReducer from './slices/snackbar';

// ==============================|| COMBINE REDUCER ||============================== //

const reducer = combineReducers({
  snackbar: snackbarReducer,
  cart: persistReducer(
    {
      key: 'cart',
      storage,
      keyPrefix: 'senseidev-',
    },
    cartReducer
  ),
  user: userReducer,
  menu: menuReducer,
});

export default reducer;
