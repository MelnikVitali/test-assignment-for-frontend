import { combineReducers } from 'redux';

import navLinksReducer from './navLinksReducer';
import mobileMenuReducers from './mobileMenuReducer';
import subtitleInH1Reducer from "./subtitleInH1Reducer";
import toggleIsFetchingReducer from './toggleIsFetchingReducer';
import errorReducer from "./errorReducer";
import usersReducer from './usersReducer';

export default combineReducers({
    toggleIsFetchingReducer,
    errorReducer,
    navLinksReducer,
    mobileMenuReducers,
    subtitleInH1Reducer,
    usersReducer
});
