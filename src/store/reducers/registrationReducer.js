import * as actions from '../actions/types';

const initialState = {
    positions: [],
    isOpenModal: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_POSITIONS:
            return {
                ...state,
                positions: action.payload
            };

        case actions.TOGGLE_MODAL:
            return {
                ...state,
                isOpenModal: action.payload
            };

        default:
            return state;
    }
};
