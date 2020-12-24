import React from 'react';

import { Box } from '@material-ui/core';

import useStyles from './styles';

const CustomPhotoUploadInput = ({selectedPhoto , error,  name, id, onChange, onBlur }) => {
    const classes = useStyles();

    return (
        <Box component='div' className={classes.wrapperUploadPhoto} >
            <input
                type="file"
                name={name}
                id={id}
                accept="image/jpeg,image/jpg"
                onBlur={onBlur}
                onChange={onChange}
                className={[
                    classes.input,
                    error ? 'Mui-error' : ''
                ].join(' ')}
            />
            <label
                htmlFor='photo'
                className={[
                    classes.label,
                    error ? classes.error : ''
                ].join(' ')}
            >
                {selectedPhoto ? selectedPhoto : 'Upload your photo'}
            </label >
        </Box >

    );
};

export default CustomPhotoUploadInput;
