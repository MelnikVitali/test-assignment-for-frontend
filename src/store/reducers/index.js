import { combineReducers } from 'redux';

import toggleIsFetchingReducer from './toggleIsFetchingReducer';
import errorReducer from "./errorReducer";
import usersReducer from './usersReducer';

export default combineReducers({
    toggleIsFetchingReducer,
    errorReducer,
    usersReducer
});
