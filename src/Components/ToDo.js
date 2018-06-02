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
                props.tasks===null ?

                    "Your tasks list is empty"
                    :
                    props.tasks.map((value, index) =>
                        <li onClick={() => props.deletetask(index)} key={index}>{value.description}</li>
                )
            }
        </ul>
    </div>
);
const mapStateToProps = (state) => ({
    tasks: state.todo.tasks
});
const mapDispatchToProps = (dispatch) => ({
    deletetask: (index) => dispatch(del(index)),
    addLetter: (event, text) => dispatch(addtxt(text)),
    addTask: () => dispatch(send()),

});

export default connect(mapStateToProps, mapDispatchToProps)(ToDo)