import React from 'react'
import { RaisedButton } from 'material-ui';

const LogInByGoogle = (props) => (
    <div>
        <RaisedButton
            label={'Log in by Google!'}
            secondary={true}
            onClick={props.onLogInHandler}
        />
    </div>
)

export default LogInByGoogle