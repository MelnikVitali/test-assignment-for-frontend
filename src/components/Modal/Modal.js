import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
    Box,
    DialogActions,
    DialogContent,
    Divider,
    Button,
    Dialog,
    IconButton,
    Typography
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';

import { toggleModal } from '../../store/actions/registrationActions';

import useStyles from './styles';

const Modal = () => {
    const classes = useStyles();

    const dispatch = useDispatch();

    const { isOpenModal } = useSelector(state => state.registrationReducer);

    const handleClose = () => {
        dispatch(toggleModal(false));
    };

    useEffect(() => {
    }, [ isOpenModal ]);

    return (
        <div >
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={isOpenModal}
                    className={classes.root} >
                <Box component='div' id="customized-dialog-title" onClose={handleClose} >
                    <h5 className={classes.modalTitle} > Congratulations </h5 >
                    <IconButton aria-label="close" className={classes.closeButton} onClick={handleClose} >
                        <CloseIcon className={classes.closeIcon} />
                    </IconButton >
                </Box >

                <Divider />

                <DialogContent className={classes.content} >
                    <Typography >
                        You have successfully passed the registration
                    </Typography >
                </DialogContent >

                <Divider />

                <DialogActions className={classes.wrapperBtn} >
                    <Button variant='contained' onClick={handleClose} color="primary" className={classes.btn} >
                        Great
                    </Button >
                </DialogActions >
            </Dialog >
        </div >
    );
};

export default Modal;
