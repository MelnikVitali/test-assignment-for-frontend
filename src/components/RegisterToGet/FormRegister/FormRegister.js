import React, { useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { useFormik } from 'formik';
import InputMask from 'react-input-mask';

import {
    Button,
    FormHelperText,
    InputLabel,
    FormControl,
    Avatar,
    CircularProgress,
    Box,
} from '@material-ui/core';

import validationSchema from './validationSchema';
import fieldProps from './fieldProps';
import CustomInput from '../CustomInput';
import SelectYourPosition from '../SelectYourPosition';
import CustomPhotoUploadInput from '../CustomPhotoUploadInput';
import { getPositions, getToken } from '../../../store/actions/registrationActions';

import useStyles from './styles';

const FormRegister = React.memo(() => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const { positions, token } = useSelector(state => state.registrationReducer, shallowEqual);
    const isFetching = useSelector(store => store.toggleIsFetchingReducer.isFetching);

    useEffect(() => {
        dispatch(getToken());

        dispatch(getPositions());
    }, [ dispatch ]);

    const initialState = { url: '', name: '' };
    const [ selectedPhoto, setSelectedPhoto ] = useState(initialState);

    const formikInitialValues = {
        name: '',
        email: '',
        phone: '',
        position: positions.length > 0 ? positions[0].id : '',
        photo: null
    };

    const {
        handleSubmit, handleChange, setFieldValue,
        handleBlur, values, errors, isValid, touched, resetForm
    } = useFormik({
        enableReinitialize: true,
        initialValues: formikInitialValues,
        validationSchema: validationSchema,
        onSubmit: values => {
            const editedPhone = values.phone.split(' ').join(''); // delete spaces from phone
            const fileField = document.querySelector('input[type="file"]');

            const formData = new FormData();
            formData.append('name', values.name);
            formData.append('email', values.email);
            formData.append('phone', editedPhone);
            formData.append('position_id', values.position);
            formData.append('photo', fileField.files[0]);

            const config = { headers: { 'Token': `${token}` } };

            resetForm();
            setSelectedPhoto(initialState);

            // // sent request and return data.success
            // const success = await dispatch(postNewUser(config, formData));
            // if (success) {
            //     resetForm({values: ''});
            //     dispatch(createSetIsSuccessModal(success));
            //     dispatch(createShowModal())
            // } else {
            //     dispatch(createSetIsSuccessModal(success));
            //     dispatch(createShowModal())
            // }
            console.log(formData);
            console.log(JSON.stringify(values, null, 2));
        }
    });

    const handleChangePhotoUpload = (event) => {
        setFieldValue('photo', event.currentTarget.files[0]);

        if (event.target && event.target.files[0]) {
            const name = event.target.files[0].name;
            const url = URL.createObjectURL(event.currentTarget.files[0]);

            return setSelectedPhoto({ url, name });
        }
        return setSelectedPhoto(initialState);
    };

    return (
        <>
            {/*{isFetching ? <Preloader /> : null}*/}
            <form className={classes.root} noValidate onSubmit={handleSubmit} >
                <FormControl className={classes.formControl} >
                    <InputLabel shrink htmlFor='name' className={classes.label} >Name</InputLabel >
                    <CustomInput
                        error={touched.name && (Boolean(errors.name))}
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        {...fieldProps.name}
                    />
                    {touched.name && (Boolean(errors.name))
                        ? <FormHelperText error className={classes.helperText} >{errors.name}</FormHelperText >
                        : null}
                </FormControl >

                <FormControl className={classes.formControl} >
                    <InputLabel shrink htmlFor='email' className={classes.label} >Email</InputLabel >
                    <CustomInput
                        error={touched.email && (Boolean(errors.email))}
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        {...fieldProps.email}
                    />
                    {touched.email && (Boolean(errors.email))
                        ? <FormHelperText error className={classes.helperText} >{errors.email}</FormHelperText >
                        : null}
                </FormControl >

                <FormControl className={classes.formControl} >
                    <InputLabel shrink htmlFor='phone' className={classes.label} >Phone number</InputLabel >
                    <InputMask
                        id='phone'
                        mask='+380 99 999 99 99'
                        disabled={false}
                        value={values.phone}
                        maskChar=' '
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete='phone'
                        style={{ paddingLeft: 12 }}
                    >
                        {() => <CustomInput error={touched.phone && (Boolean(errors.phone))} {...fieldProps.phone} />}
                    </InputMask >
                    {touched.phone && (Boolean(errors.phone))
                        ? <FormHelperText error className={classes.helperText} >{errors.phone}</FormHelperText >
                        : <FormHelperText className={classes.helperText} >
                            Enter phone number in open format
                        </FormHelperText >}
                </FormControl >

                {positions && positions.length > 0 &&
                (<SelectYourPosition
                    {...fieldProps.positions}
                    positions={positions}
                    value={values.position}
                    onChange={(name) => setFieldValue('position', name)}
                />)}

                <FormControl className={classes.formControl} >
                    <InputLabel shrink htmlFor='photo' className={classes.label} >
                        Photo
                    </InputLabel >
                    <CustomPhotoUploadInput
                        error={touched.photo && Boolean(errors.photo)}
                        {...fieldProps.photo}
                        value={values.photo}
                        selectedPhoto={selectedPhoto.name}
                        onBlur={handleBlur}
                        onChange={(event) => handleChangePhotoUpload(event)}
                    />
                    {touched.photo && Boolean(errors.photo)
                        ? <FormHelperText error className={classes.helperText} >
                            {errors.photo}
                        </FormHelperText >
                        : null}
                    {!(errors.photo) && selectedPhoto.url && <Avatar
                        data-aos="zoom-in"
                        data-aos-duration="700"
                        alt={selectedPhoto.name}
                        src={selectedPhoto.url}
                        className={classes.previewAvatar}
                    />}
                </FormControl >
                <Box component='div' className={classes.wrapperButton} >
                    <Button
                        disabled={!isValid}
                        type='submit'
                        variant='contained'
                        color='primary'
                        className={classes.btn}
                    >
                        Sing up now
                    </Button >
                    {isFetching && <CircularProgress
                        thickness={5}
                        size={26}
                        color='secondary'
                        className={classes.preloader} />}
                </Box >
            </form >
        </>
    );
});

export default FormRegister;
