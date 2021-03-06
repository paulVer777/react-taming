import {database} from "../firebase";

const ADD = 'todo/ADD';
const ADDTXT = 'todos/ADDTXT';

export const add = (tasks) => ({type: ADD, tasks});
export const addtxt = (text) => ({type: ADDTXT, text});


const initialState = {
    tasks: [],
    txt: ""
};


export const mapObjectToArray = (obj) => (
    Object.entries(obj || {})
        .map(([key, value]) => (
            typeof value === 'object' ?
                {...value, key}
                :
                {key, value}
        ))
)

export const del = (key) => (dispatch, getState) => {
    alert(typeof (key))
    database.ref('/tasks/'+key).remove()
}

export const send = () => (dispatch, getState) => {
    const state = getState()
    database.ref('/tasks').push(
        {description: state.todo.txt, completed: 'false'}
    )
}

export const initTodoSync = () => (dispatch, getState) => {
    database.ref('/tasks').on(
        'value',
      (snapshot) => dispatch(add(mapObjectToArray(snapshot.val())))



    )
}
export default (state = initialState, action) => {
    switch (action.type) {
        case ADDTXT:
            return {
                ...state,
                txt: action.text
            };
        case ADD:
            return {
                ...state,
                tasks: action.tasks

            }
        default :
            return state
    }
}