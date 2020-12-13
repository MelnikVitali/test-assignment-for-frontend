import * as actions from '../actions/types';

const initialState = {
    subtitleTabletUp: ' We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository. Please be patient, we consider and respond to every application that meets minimum requirements. We look forward to your submission. Good luck! The photo has to scale in the banner area on the different screens',
    subtitleMobile: 'We kindly remind you that your test assignment should be submitted as a link to github/bitbucket repository.'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_SUBTITLE_IN_H1:
            return {
                ...state,
                navLinks: action.navLinks
            };

        default:
            return state;
    }
};