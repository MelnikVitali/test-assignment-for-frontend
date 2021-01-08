const BASE_URL = 'https://frontend-test-assignment-api.abz.agency/api/v1/';

const DESKTOP_USERS_LIST_COUNT = 6;
const MOBILE_USERS_LIST_COUNT = 3;

export const APIUrls = {
    getUsersTabletStartPage: `${BASE_URL}users?page=1&count=${DESKTOP_USERS_LIST_COUNT}`,
    getUsersMobileStartPage: `${BASE_URL}users?page=1&count=${MOBILE_USERS_LIST_COUNT}`,
    getToken: `${BASE_URL}token`,
    addNewUser: `${BASE_URL}users`,
    getPositions: `${BASE_URL}positions`
};
