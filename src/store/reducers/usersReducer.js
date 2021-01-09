import * as actions from '../actions/types';

const initialState = {
    nextUrl: '',
    totalPages: 0
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.GET_FIRST_USERS:
            return {
                ...state,
                ...action.payload,
                nextUrl: action.payload.links.next_url,
                totalPages: action.payload.total_pages
            };

        case actions.GET_NEXT_USERS:
            return {
                ...state,
                count: action.payload.count,
                page: action.payload.page,
                links: action.payload.links,
                nextUrl: action.payload.links.next_url,
                totalPages: action.payload.total_pages,
                users: [ ...state.users, ...action.payload.users ],
            };

        default:
            return state;
    }
};
