import React, { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import InputMask from 'react-input-mask';

import { Button, FormHelperText, InputLabel, FormControl, Avatar } from '@material-ui/core';

import validationSchema from './validationSchema';

import CustomInput from '../CustomInput';
import SelectYourPosition from '../SelectYourPosition';
import CustomPhotoUploadInput from '../CustomPhotoUploadInput';
import { getPositions, getToken } from '../../../store/actions/registrationActions';

import useStyles from './styles';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';

const FormRegister = React.memo(() => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const { positions, token } = useSelector(state => state.registrationReducer, shallowEqual);

    useEffect(() => {
        dispatch(getToken());

        dispatch(getPositions());
    }, []);

    const [ selectedPhoto, setSelectedPhoto ] = useState({
        url: '',
        name: ''
    });

    // const {positions, token} = useSelector(state => state.registration, shallowEqual);
    // const dispatch = useDispatch();

    // const isFetching = useSelector(store => store.toggleIsFetchingReducer.isFetching);
    const {
        handleSubmit, handleChange,
        setFieldValue,
        values, errors, isValid,
        touched, handleBlur
    } = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: '',
            email: '',
            phone: '',
            position: positions.length > 0 ? positions[0].name :'',
            photo: ''
        },
        validationSchema: validationSchema,
        onSubmit: fields => console.log(JSON.stringify(values, null, 2))
    });

    const handleChangePhotoUpload = (event) => {
        setFieldValue('photo', event.currentTarget.files[0]);

        if (event.target && event.target.files[0]) {
            const name = event.target.files[0].name;
            const url = URL.createObjectURL(event.target.files [0]);

            return setSelectedPhoto({
                url,
                name
            });
        }
        return setSelectedPhoto({
            url: '',
            name: ''
        });
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
                    value={values.phone}
                    maskChar=' '
                    onChange={handleChange}
                    onBlur={handleBlur}
                >
                    {() => <CustomInput
                        error={touched.phone && (Boolean(errors.phone))}
                        id='phone'
                        name='phone'
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

            {positions && positions.length > 0 &&
            (<SelectYourPosition
                    positions={positions}
                    name='positions'
                    setFieldValue={(name) => setFieldValue('position', name)}
                    value={values.position}
                    onChange={(name) => setFieldValue('position', name)}
                />
            )}
            <FormHelperText style={{ display: 'block', position: 'relative', margin: '0 auto 0 0' }} error
                            className={classes.helperText} >
                {errors.position}
            </FormHelperText >


            <FormControl className={classes.formControl} >
                <InputLabel shrink htmlFor='photo' className={classes.label} >
                    Photo
                </InputLabel >

                <CustomPhotoUploadInput
                    name='photo'
                    id='photo'
                    value={values.photo}
                    touchedPhoto={touched}
                    selectedPhoto={selectedPhoto.name}
                    error={touched.photo && (Boolean(errors.photo))}
                    onBlur={handleBlur}
                    onChange={(event) => handleChangePhotoUpload(event)}
                />

                {touched.photo && (Boolean(errors.photo))
                    ? <FormHelperText error className={classes.helperText} >
                        {errors.photo}
                    </FormHelperText >
                    : null}

                {!(errors.photo) && selectedPhoto.url && <Avatar
                    alt={selectedPhoto.name}
                    src={selectedPhoto.url}
                    className={classes.previewAvatar}
                />}
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
});

export default FormRegister;
