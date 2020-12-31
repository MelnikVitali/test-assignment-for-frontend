import React from 'react';

import { Box, Tooltip } from '@material-ui/core';

import useStyles from './styles';

const CustomPhotoUploadInput = ({ selectedPhoto, error, value, onChange, onBlur, ...fieldProps }) => {
    const classes = useStyles();

    return (
        <Box component='div' className={classes.wrapperUploadPhoto} >
            <input
                {...fieldProps}
                onBlur={onBlur}
                onChange={onChange}
                className={[
                    classes.input,
                    error ? 'Mui-error' : ''
                ].join(' ')}
            />

            <Tooltip title={selectedPhoto ?? ''} >
                <label
                    htmlFor='photo'
                    onBlur={onBlur}
                    className={[
                        classes.label,
                        error ? classes.error : ''
                    ].join(' ')}
                >
                    {selectedPhoto ? selectedPhoto : 'Upload your photo'}
                </label >
            </Tooltip >
        </Box >
    );
};

export default CustomPhotoUploadInput;
