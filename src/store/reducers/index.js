import { combineReducers } from 'redux';

import navLinksReducer from './navLinksReducer';
import mobileMenuReducers from './mobileMenuReducer';
import subtitleInH1Reducer from "./subtitleInH1Reducer";

export default combineReducers({
    navLinksReducer,
    mobileMenuReducers,
    subtitleInH1Reducer
});