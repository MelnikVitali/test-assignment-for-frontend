import * as actions from './types';

export const getNavLinks = (navLinks) => ({
    type: actions.GET_NAV_LINKS,
    navLinks
});
