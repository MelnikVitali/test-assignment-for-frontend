import { combineReducers } from 'redux';

import toggleIsFetchingReducer from './toggleIsFetchingReducer';
import errorReducer from "./errorReducer";
import usersReducer from './usersReducer';
import registrationReducer from './registrationReducer';

export default combineReducers({
    toggleIsFetchingReducer,
    errorReducer,
    usersReducer,
    registrationReducer
});
