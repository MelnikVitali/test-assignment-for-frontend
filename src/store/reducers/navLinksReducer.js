import * as actions from '../actions/types';

const initialState = {
    navLinks: [
        { title: `About me`, path: `#sign-up` },
        { title: `Relationships`, path: `#sign-up` },
        { title: `Requirements`, path: `#sign-up` },
        { title: `Users`, path: `#sign-up` },
        { title: `Sign Up`, path: `#sign-up` }
    ],

};

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_NAV_LINKS:
            return {
                ...state,
                navLinks: action.navLinks
            };

        default:
            return state;
    }
};