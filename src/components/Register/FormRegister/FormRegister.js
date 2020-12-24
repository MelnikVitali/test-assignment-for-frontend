import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import InputMask from 'react-input-mask';

import { Button, FormHelperText, InputLabel, FormControl } from '@material-ui/core';

import validationSchema from './validationSchema';

import useStyles from './styles';
import CustomInput from '../CustomInput';
import SelectYourPosition from '../SelectYourPosition';
import CustomPhotoUploadInput from '../CustomPhotoUploadInput';

const FormRegister = () => {
    const classes = useStyles();

    const [ selectedPhoto, setSelectedPhoto ] = useState('');

    // const {positions, token} = useSelector(state => state.registration, shallowEqual);
    // const dispatch = useDispatch();

    // const isFetching = useSelector(store => store.toggleIsFetchingReducer.isFetching);
    const {
        handleSubmit, handleChange,
        values, errors, isValid,
        touched, handleBlur
    } = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            // position: '',
            photo: ''
        },
        validationSchema: validationSchema,
        onSubmit: fields => console.log(fields)
    });

    const handleChangePhotoUpload = (event) => {
        handleChange(event);

        if (event.target && event.target.files) {
            const photo = event.target.files[0] || '';
            console.log(photo);
            return setSelectedPhoto(photo.name);
        }
        return setSelectedPhoto('');


    };

    return (
        <form className={classes.root} noValidate onSubmit={handleSubmit} >
            <FormControl className={classes.formControl} >
                <InputLabel shrink htmlFor='name' className={classes.label} >
                    Name
                </InputLabel >
                <CustomInput
                    error={touched.name && (Boolean(errors.name))}
                    id='name'
                    name='name'
                    autoComplete='name'
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder='Your name'
                />
                {touched.name && (Boolean(errors.name))
                    ? <FormHelperText error className={classes.helperText} >
                        {errors.name}
                    </FormHelperText >
                    : null}
            </FormControl >

            <FormControl className={classes.formControl} >
                <InputLabel shrink htmlFor='email' className={classes.label} >
                    Email
                </InputLabel >
                <CustomInput
                    error={touched.email && (Boolean(errors.email))}
                    id='email'
                    name='email'
                    autoComplete='email'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder='Your email'
                />
                {touched.email && (Boolean(errors.email))
                    ? <FormHelperText error className={classes.helperText} >
                        {errors.email}
                    </FormHelperText >
                    : null}
            </FormControl >

            <FormControl className={classes.formControl} >
                <InputLabel shrink htmlFor='phone' className={classes.label} >
                    Phone number
                </InputLabel >
                <InputMask
                    id='phone'
                    mask='+380 99 999 99 99'
                    disabled={false}
                    maskChar=' '
                    value={values.phone}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    autoComplete='phone'
                    placeholder='+380 XX XXX XX XX'
                >
                    {() => <CustomInput
                        error={touched.phone && (Boolean(errors.phone))}
                        id='phone'
                        name='phone'
                        // autoComplete='phone'
                        // value={values.phone}
                        placeholder='+380 XX XXX XX XX'
                    />}
                </InputMask >
                {touched.phone && (Boolean(errors.phone))
                    ? <FormHelperText error className={classes.helperText}
                    >
                        {errors.phone}
                    </FormHelperText >
                    : <FormHelperText className={classes.helperText} >
                        Enter phone number in open format
                    </FormHelperText >}
            </FormControl >

            <SelectYourPosition />

            <FormControl className={classes.formControl} >
                <InputLabel shrink htmlFor='photo' className={classes.label} >
                    Photo
                </InputLabel >

                <CustomPhotoUploadInput
                    name='photo'
                    id='photo'
                    value={values.photo}
                    touchedPhoto={touched}
                    selectedPhoto={selectedPhoto}
                    error={touched.photo && (Boolean(errors.photo))}
                    onBlur={handleBlur}
                    onChange={ handleChangePhotoUpload}
                />

                {touched.photo && (Boolean(errors.photo))
                    ? <FormHelperText error className={classes.helperText} >
                        {errors.photo}
                    </FormHelperText >
                    : null}
            </FormControl >

            <Button
                disabled={!isValid}
                type='submit'
                variant='contained'
                color='primary'
                className={classes.btn}
            >
                Sing up now
            </Button >
        </form >
    );
};

export default FormRegister;
