const DEL = 'todo/DEL'
const ADD = 'todo/ADD'


export const del = (index) => ({type: DEL, index})


const initialState = {
    tasks: [{description: 'uczyć się', completed: 'true'}, {description: 'boks', completed: 'false'}]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case DEL:
            return {
                ...state,
                tasks: state.tasks.filter((value, index) => action.index !== index
                )
            };
        default :
            return state
    }
}