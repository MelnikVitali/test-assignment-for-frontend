import * as actions from '../actions/types';

const initialState = {
    isDrawerOpen: false,
    firstDrawerList: [
        { title: `About me`, path: `#sign-up` },
        { title: `Relationships`, path: `#sign-up` },
        { title: `Users`, path: `#sign-up` },
        { title: `Sign Up`, path: `#sign-up` },
        { title: `Terms and Conditions`, path: `#sign-up` },
    ],
    secondDrawerList: [
        { title: `How it works`, path: `#sign-up` },
        { title: `Partnership`, path: `#sign-up` },
        { title: `Help`, path: `#sign-up` },
        { title: `Leave testimonial`, path: `#sign-up` },
        { title: `Contact us`, path: `#sign-up` },
    ],
    thirdDrawerList: [
        { title: `Articles`, path: `#sign-up` },
        { title: `Our news`, path: `#sign-up` },
        { title: `Testimonials`, path: `#sign-up` },
        { title: `Licenses`, path: `#sign-up` },
        { title: `Privacy Policy`, path: `#sign-up` },
    ],

};

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.IS_DRAWER_OPEN:
            return {
                ...state,
                isDrawerOpen: action.isDrawerOpen
            };

        default:
            return state;
    }
};