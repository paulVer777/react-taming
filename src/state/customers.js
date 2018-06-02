const GETCUSTOMERS = 'customers/GETCUSTOMERS';

export const getCustomers = (customers) => ({type: GETCUSTOMERS, customers});


const initialState = {
    customers: []
};

export const fetchCustomers = () => (dispatch, getState) => (

    fetch('https://randomuser.me/api/?results=10')
        .then(response => response.json())
        .then(data => dispatch(getCustomers(data.results)))
).catch(() => alert("error"));


export default (state = initialState, action) => {

    switch (action.type) {
        case GETCUSTOMERS:
            return {
                ...state,
                customers:action.customers
            };
        default:
            return state
    }
}





