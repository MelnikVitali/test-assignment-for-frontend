
const fieldProps = {
    name: {
        id: "name",
        name: "name",
        type: "text",
        placeholder: "Your name",
        assistiveText: "",
    },
    email: {
        id: "email",
        name: "email",
        type: "email",
        placeholder: "Your email",
        assistiveText: "",
    },
    phone: {
        id: "phone",
        name: "phone",
        type: "tel",
        placeholder: "+380 XX XXX XX XX",
        assistiveText: "Еnter phone number in open format",
    },

    positions: {
        label: 'Select your position',
        name: "position"
    },
    photo: {
        id: "photo",
        name: "photo",
        type: "file",
        placeholder: "Upload your photo",
        accept:".jpg, .jpeg"
    }
};


export default fieldProps;