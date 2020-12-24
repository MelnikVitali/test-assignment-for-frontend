import * as Yup from 'yup';

const phoneRegExp = /^\+380 [0-9]{2} [0-9]{3} [0-9]{2} [0-9]{2}$/; //validate phone

const validationSchema = Yup.object({
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
    //     .required('Select your position'),
    photo: Yup.string()
        .required('Add your photo')
});

export default validationSchema;
