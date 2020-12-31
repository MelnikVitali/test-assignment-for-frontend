const fieldProps = {
    name: {
        id: 'name',
        name: 'name',
        type: 'text',
        autoComplete: 'name',
        placeholder: 'Your name',
    },
    email: {
        id: 'email',
        name: 'email',
        type: 'email',
        placeholder: 'Your email',
        autoComplete: 'email',
    },
    phone: {
        id: 'phone',
        name: 'phone',
        type: 'tel',
        placeholder: '+380 XX XXX XX XX',
        autoComplete: 'phone',
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


export default fieldProps;