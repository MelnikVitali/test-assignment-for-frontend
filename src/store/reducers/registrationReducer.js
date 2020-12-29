import * as actions from '../actions/types';

const initialState = {
    token: '',
    positions: [],
    requestMessage: '',
    requestSuccess: null
};

export default (state = initialState,  action) => {
    switch (action.type) {
        case actions.GET_TOKEN:
            return {...state, token: action.payload};

        case actions.GET_POSITIONS:
            return {
                ...state,
                positions: action.payload
            };

        // case GET_REQUEST_MESSAGE:
        //     return {...state, requestMessage: payload};
        // case GET_REQUEST_SUCCESS:
        //     return {...state, requestSuccess: payload};
        default:
            return state;
    }
};

