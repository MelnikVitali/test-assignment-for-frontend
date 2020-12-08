import { combineReducers } from 'redux';

import navLinksReducer from './navLinksReducer';
import mobileMenuReducers from './mobileMenuReducers';

export default combineReducers({
    navLinksReducer,
    mobileMenuReducers
});