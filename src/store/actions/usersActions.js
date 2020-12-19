import axios from 'axios';

import * as actions from './types';

import { toggleIsFetching } from './toggleIsFetchingActions';


const fetchUsers = (url, actionsType) => async dispatch => {
    try {
        dispatch(toggleIsFetching(true));

        const res = await axios.get(url);

        dispatch(toggleIsFetching(false));

        return dispatch({ type: actionsType, payload: res.data });

    } catch (error) {
        dispatch(toggleIsFetching(false));

        return dispatch({
            type: actions.ERROR,
            payload: error.message
        });
    }
};


export const getFirstUsers = url => fetchUsers(url, actions.GET_FIRST_USERS);

export const getNextUsers = url => fetchUsers(url, actions.GET_NEXT_USERS);



