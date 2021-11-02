const initState = [
    {
        id: 0,
        name: 'Shohan',
        email: 'shohan@gmail.com',
        phone: '88017000000002',
    },
    {
        id: 2,
        name: 'Mehdi Hasan',
        email: 'mh@gmail.com',
        phone: '88017000000001',
    },
];

const contactReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            return [...state, action.payload];

        case 'UPDATE_CONTACT':
            return state.map((contact) =>
                contact.id === action.payload.id ? action.payload : contact
            );
        case 'DELETE':
            return state.filter((contact) => contact.id !== action.payload);
        default:
            return state;
    }
};

export default contactReducer;
