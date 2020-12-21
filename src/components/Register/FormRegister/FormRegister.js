import React from 'react';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { Button, FormHelperText} from '@material-ui/core';

// import Preloader from '../../Preloader';

import useStyles from './styles';
import CustomInput from '../CustomInput';

import InputMask from 'react-input-mask';


const FormRegister = () => {
    const classes = useStyles();

    const isFetching = useSelector(store => store.toggleIsFetchingReducer.isFetching);

    const phoneRegExp = /^\+380 [0-9]{2} [0-9]{3} [0-9]{2} [0-9]{2}$/; //validate phone

    const {
        handleSubmit, handleChange,
        values, errors, isValid,
        touched, handleBlur, setValues
    } = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            // position: '',
            // photo: ''
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Please enter a name')
                .min(2, 'Name must be more then 1 character')
                .max(60, 'Name must be less then 60 characters'),
            email: Yup.string()
                .required('Enter your email')
                .email('Invalid email format'),
            phone: Yup.string()
                .required('Enter your phone')
                .matches(phoneRegExp, 'Phone number is not valid'),
            // position: Yup.string()
            //     .required('Required'),
            // photo: Yup.string()
            //     .required('Required')
        }),
        onSubmit: fields => console.log(fields)
    });

    return (
        <>
            {/*{isFetching ? <Preloader /> : null}*/}
            <form
                className={classes.root}
                noValidate
                onSubmit={handleSubmit}
            >

                <FormControl
                    className={classes.formControl}
                >
                    <InputLabel shrink htmlFor="your-name" >
                        Name
                    </InputLabel >
                    <CustomInput
                        error={touched.name && (Boolean(errors.name))}
                        id="your-name"
                        name="name"
                        autoComplete="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder='Your name'
                    />
                    {touched.name && (Boolean(errors.name)) ?
                        <FormHelperText className={classes.errorText} >{errors.name}</FormHelperText >
                        : null}
                </FormControl >
                <FormControl

                    className={classes.formControl}
                >
                    <InputLabel shrink htmlFor="email">
                        Email
                    </InputLabel >
                    <CustomInput
                        error={touched.email && (Boolean(errors.email))}
                        id="email"
                        name="email"
                        autoComplete="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder='Your email'
                    />
                    {touched.email && (Boolean(errors.email)) ?
                        <FormHelperText className={classes.errorText} >{errors.email}</FormHelperText >
                        : null}
                </FormControl >
                <FormControl

                    className={classes.formControl}
                >
                    <InputLabel shrink htmlFor="phone" >
                        Phone number
                    </InputLabel >
                    <InputMask
                        id="phone"
                        mask="+380 99 999 99 99"
                        disabled={false}
                        maskChar=" "
                        value={values.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        autoComplete="phone"
                        placeholder='+380 XX XXX XX XX'
                    >
                        {() => <CustomInput
                            error={touched.phone && (Boolean(errors.phone))}
                            id="phone"
                            name="phone"
                            autoComplete="phone"
                            value={values.phone}
                            placeholder='+380 XX XXX XX XX'
                            // onChange={handleChange}
                            // onBlur={handleBlur}
                            // placeholder='+380 XX XXX XX XX'
                        />}
                    </InputMask >


                    {touched.phone && (Boolean(errors.phone)) ?
                        <FormHelperText className={classes.errorText} >{errors.phone}</FormHelperText >
                        : null}
                </FormControl >


                <Button
                    disabled={!isValid}
                    type="submit"
                    variant="contained"
                    color="primary"
                    className={classes.btn}
                >
                    Sign up now
                </Button >

            </form >

        </>
    );
};

export default FormRegister;
