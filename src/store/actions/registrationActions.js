import { toggleIsFetching } from './toggleIsFetchingActions';
import axios from 'axios';
import { toast } from 'react-toastify';

import { APIUrls } from '../../configs/APIUrls';
import { MOBILE_MAX_WIDTH } from '../../constans/mobileMaxWidth';

import * as actions from './types';
import { getFirstUsers } from './usersActions';

const urlGetUsers = window.innerWidth < MOBILE_MAX_WIDTH ?
    APIUrls.getUsersMobileStartPage :
    APIUrls.getUsersTabletStartPage;

export const getPositions = () => async dispatch => {
    try {
        dispatch(toggleIsFetching(true));

        const res = await axios.get(APIUrls.getPositions);

        dispatch(toggleIsFetching(false));

        return dispatch({ type: actions.GET_POSITIONS, payload: res.data.positions });

    } catch (error) {
        dispatch(toggleIsFetching(false));

        toast.error(error.response ? error.response.data.message : error.message);

        return dispatch({
            type: actions.ERROR,
            payload: error.response ? error.response.data.message : error.message
        });
    }
};

export const addNewUser = (body, resetForm, setSelectedPhoto, initialState) => async (dispatch) => {
    try {
        dispatch(toggleIsFetching(true));

        const resToken = await axios.get(APIUrls.getToken);

        const config = { headers: { 'Token': `${resToken.data.token}` } };

        const res = await axios.post(APIUrls.addNewUser, body, config);

        dispatch(toggleIsFetching(false));

        if (res) {
            dispatch(toggleModal(true));

            dispatch(getFirstUsers(urlGetUsers));

            resetForm();

            setSelectedPhoto(initialState);
        }
    } catch (error) {
        dispatch(toggleIsFetching(false));

        toast.error(error.response ? error.response.data.message : error.message);

        return dispatch({
            type: actions.ERROR,
            payload: error.response ? error.response.data.message : error.message
        });
    }
};

export const toggleModal = (value) => ({
    type: actions.TOGGLE_MODAL,
    payload: value
});
