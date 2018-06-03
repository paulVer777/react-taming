import React from 'react'
import {connect} from 'react-redux'
import LoginByGoogle from './LogInByGoogle'
import {logInByGoogle} from "../../state/auth";

const Auth = (props) => (

    <div>
        {
            props.userLog ?

                props.children
                :
                <LoginByGoogle onLogInHandler={props.logInByGoogle}/>

        }
    </div>
)

const mapStateToProps = (state) => ({

    userLog:state.auth.isUserLoggedIn

})
const mapDispatchToProps = (dispatch) => ({

    logInByGoogle: () => dispatch(logInByGoogle())

})

export default connect(mapStateToProps, mapDispatchToProps)(Auth)