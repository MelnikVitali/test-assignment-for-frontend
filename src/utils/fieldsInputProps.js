const fieldsInputProps = {
    name: {
        id: 'name',
        name: 'name',
        type: 'text',
        placeholder: 'Your name',
        autoComplete: 'off',
    },
    email: {
        id: 'email',
        name: 'email',
        type: 'email',
        placeholder: 'Your email',
        autoComplete: 'off',
    },
    phone: {
        id: 'phone',
        name: 'phone',
        type: 'tel',
        placeholder: '+380 XX XXX XX XX',
        autoComplete: 'off',
    },
    positions: {
        id: 'position',
        label: 'Select your position',
        name: 'position'
    },
    photo: {
        type: 'file',
        name: 'photo',
        id: 'photo',
        title: '&nbsp',
        accept: 'image/jpeg,image/jpg',
        placeholder: 'Upload your photo',
    }
};

export default fieldsInputProps;
