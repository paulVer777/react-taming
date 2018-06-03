import {auth,googleProvider,database} from '../firebase'


const LOGGED_IN='auth/LOGGED_IN';
const LOGGED_OUT='auth/LOGGED_OUT';

const loggedIn = (user) => ({
    type: LOGGED_IN,
    user
})

const logUserLogIn = () => (dispatch, getState) => {
    const userUid = getState().auth.user.uid

    database.ref(`/users/${userUid}/loginsLogs`)
        .push({ timestamp: Date.now() })
}





export const loggedOut = () => ({ type: LOGGED_OUT });


export const initAuthUserSync = () => (dispatch, getState) => {
    auth.onAuthStateChanged(
        user => {
           if(user)  { dispatch(loggedIn(user))
                  dispatch(logUserLogIn())}
           else
               dispatch(loggedOut())
        }

    )
}

export const logInByGoogle = () => (dispatch, getState) => {
    auth.signInWithRedirect(googleProvider)
}








const initialState = {
    isUserLoggedIn: false,
    user:null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case LOGGED_IN:
            return {
                ...state,
                isUserLoggedIn: true,
                user: action.user
            }
        case LOGGED_OUT:
            return {
                ...state,
                isUserLoggedIn: false,
                user: null
            }
        default:
            return state
    }
}