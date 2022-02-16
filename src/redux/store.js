import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools} from 'redux-devtools-extension';

// Reducers
import { cartReducer } from './reducers/cartReducers';
import { getShoeDetailsReducer, getShoesReducer } from './reducers/shoeReducers';

const reducer = combineReducers({
    cart: cartReducer,
    getShoes: getShoesReducer,
    getShoeDetails: getShoeDetailsReducer,

});

const middleware = [thunk];

const cartItemsInLocalStorage = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

const INITIAL_STATE = {
  cart: {
    cartItems: cartItemsInLocalStorage,
  },
};

const store =  createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;