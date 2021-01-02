import axios from 'axios';

import { toast } from 'react-toastify';

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

        toast.error(error.response ? error.response.data.message : error.message);

        return dispatch({
            type: actions.ERROR,
            payload: error.response ? error.response.data.message : error.message
        });
    }
};


export const getFirstUsers = url => fetchUsers(url, actions.GET_FIRST_USERS, 'data');

export const getNextUsers = url => fetchUsers(url, actions.GET_NEXT_USERS, 'data');
