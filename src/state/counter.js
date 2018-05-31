const INC = 'counter/INC';
const DEC = 'counter/DEC';

export const inc = () => ({type: INC});
export const dec = () => ({type: DEC});

const initialState = {
    count: 0
};

export default (state = initialState, action) => {

    switch (action.type) {
        case INC:
            return {
                ...state,
                count: state.count + 1
            };
        case DEC:
            return {
                ...state,
                count: state.count - 1
            };
        default:
            return state
    }
}