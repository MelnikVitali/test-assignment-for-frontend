import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
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

import validationSchema from '../../../utils/validationSchema';
import fieldsInputProps from '../../../utils/fieldsInputProps';

import { addNewUser, getPositions } from '../../../store/actions/registrationActions';

import Modal from '../../Modal';

import CustomInput from '../CustomInput';
import SelectYourPosition from '../SelectYourPosition';

import CustomPhotoUploadInput from '../CustomPhotoUploadInput';

import useStyles from './styles';

const FormRegister = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const { positions } = useSelector(state => state.registrationReducer);
    const isFetching = useSelector(store => store.toggleIsFetchingReducer.isFetching);

    const initialState = { url: '', name: '' };
    const [ selectedPhoto, setSelectedPhoto ] = useState(initialState);

    useEffect(() => {
        dispatch(getPositions());
    }, [ dispatch ]);

    const handleChangePhotoUpload = (event, setFieldValue) => {
        setFieldValue('photo', event.target.files[0]);

        if (event.target && event.target.files[0]) {
            const name = event.target.files[0].name;
            const url = URL.createObjectURL(event.target.files[0]);

            return setSelectedPhoto({ url, name });
        }

        return setSelectedPhoto(initialState);
    };

    const handleSubmit = (values, resetForm) => {
        const editedPhone = values.phone.split(' ').join(''); // delete spaces from phone

        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('email', values.email);
        formData.append('phone', editedPhone);
        formData.append('position_id', values.position);
        formData.append('photo', values.photo);

        dispatch(addNewUser(formData, resetForm, setSelectedPhoto, initialState));
    };

    return (
        <>
            {positions.length > 0 && <Formik
                initialValues={{
                    name: '',
                    email: '',
                    phone: '',
                    position: positions[0].id,
                    photo: null
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                    handleSubmit(values, resetForm);
                }} >
                {({
                      handleSubmit,
                      handleChange,
                      setFieldValue,
                      handleBlur,
                      values,
                      errors,
                      isValid,
                      touched
                  }) => (
                    <form className={classes.root} noValidate onSubmit={handleSubmit} >
                        <FormControl className={classes.formControl} >
                            <InputLabel shrink htmlFor='name' className={classes.label} >Name</InputLabel >
                            <CustomInput
                                error={touched.name && (Boolean(errors.name))}
                                value={values.name}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                {...fieldsInputProps.name}
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
                                {...fieldsInputProps.email}
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
                                maskChar='_'
                                onChange={handleChange}
                                onBlur={handleBlur}
                                style={{ paddingLeft: 12 }}
                            >
                                {() => <CustomInput
                                    error={touched.phone && (Boolean(errors.phone))} {...fieldsInputProps.phone} />}
                            </InputMask >
                            {touched.phone && (Boolean(errors.phone))
                                ? <FormHelperText error className={classes.helperText} >{errors.phone}</FormHelperText >
                                : <FormHelperText className={classes.helperText} >
                                    Enter phone number in open format
                                </FormHelperText >}
                        </FormControl >

                        <SelectYourPosition
                            {...fieldsInputProps.positions}
                            positions={positions}
                            value={values.position}
                            onChange={(id) => setFieldValue('position', id)}
                        >
                        </SelectYourPosition >

                        <FormControl className={classes.formControl} >
                            <InputLabel shrink htmlFor='photo' className={classes.label} >
                                Photo
                            </InputLabel >
                            <CustomPhotoUploadInput
                                error={touched.photo && Boolean(errors.photo)}
                                {...fieldsInputProps.photo}
                                value={values.photo}
                                selectedPhoto={selectedPhoto.name}
                                onBlur={handleBlur}
                                onChange={(event) => handleChangePhotoUpload(event, setFieldValue)}
                            />
                            {touched.photo && Boolean(errors.photo)
                                ? <FormHelperText error className={classes.helperText} >
                                    {errors.photo}
                                </FormHelperText >
                                : null}
                        </FormControl >
                        {!(errors.photo) && selectedPhoto.url && <Avatar
                            data-aos="zoom-in"
                            alt={selectedPhoto.name}
                            src={selectedPhoto.url}
                            loading="lazy"
                            className={classes.previewAvatar}
                        />}

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
                )}
            </Formik >}
            <Modal />
        </>
    );
};

export default FormRegister;