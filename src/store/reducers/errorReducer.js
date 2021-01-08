import * as actions from '../actions/types';

const initialState = {
    errorMessage: ''
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.ERROR:
            return {
                ...state,
                errorMessage: action.payload
            };

        case actions.CLEAR_ERRORS:
            return {};

        default:
            return state;
    }
};
