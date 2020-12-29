import { toggleIsFetching } from './toggleIsFetchingActions';
import axios from 'axios';
import { APIUrls } from '../../configs/APIUrls';
import * as actions from './types';

export const getPositions = () => async dispatch => {
    try {
        dispatch(toggleIsFetching(true));

        const res = await axios.get(APIUrls.getPositions);

        dispatch(toggleIsFetching(false));
        return dispatch({ type: actions.GET_POSITIONS, payload: res.data.positions });

    } catch (error) {
        dispatch(toggleIsFetching(false));

        return dispatch({
            type: actions.ERROR,
            payload: error.message
        });
    }
};

export const getToken = () => async dispatch => {
    try {
        dispatch(toggleIsFetching(true));

        const res = await axios.get(APIUrls.getToken);

        dispatch(toggleIsFetching(false));
        return dispatch({ type: actions.GET_TOKEN, payload: res.data.token });

    } catch (error) {
        dispatch(toggleIsFetching(false));

        return dispatch({
            type: actions.ERROR,
            payload: error.message
        });
    }
};