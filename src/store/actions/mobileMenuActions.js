import * as actions from './types';

export const setIsDrawerOpen = (isDrawerOpen) => ({
    type: actions.IS_DRAWER_OPEN,
    isDrawerOpen
});

export const getMobileMenu = (navLinks) => ({
    type: actions.GET_MOBILE_NAV_LINKS,
    navLinks
});
