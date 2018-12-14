import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import country from './country';
import currency from './currency';

const reducers = combineReducers({
    routing:routerReducer,
    country: country,
    currency: currency,
});

export default reducers