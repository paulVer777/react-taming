import React from 'react'
import {del, addtxt, add,send} from '../state/todo'
import {connect} from 'react-redux'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'

const ToDo = (props) => (
    <div>
        <TextField
            onChange={props.addLetter}

        />
        <RaisedButton onClick={props.addTask}

                      primary={true}

        >Add task</RaisedButton>
        <ul>
            {
                props.tasks ?
                    props.tasks.map((value) =>
                        <li onClick={() => props.deletetask(value.key)}>{value.description}</li>
                )
                :
                "Your tasks list is empty"
            }
        </ul>
    </div>
);
const mapStateToProps = (state) => ({
    tasks: state.todo.tasks
});
const mapDispatchToProps = (dispatch) => ({
    deletetask: (value) => dispatch(del(value)),
    addLetter: (event, text) => dispatch(addtxt(text)),
    addTask: () => dispatch(send()),

});

export default connect(mapStateToProps, mapDispatchToProps)(ToDo)