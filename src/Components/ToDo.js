import React from 'react'
import {del} from '../state/todo'
import {connect} from 'react-redux'


const ToDo = (props) => (

    <div>
        <ul>
        {

            props.tasks.map((value, index) =>


                <li onClick={()=>props.delete(index)}>{value.description}</li>

            )

        }
        </ul>
    </div>

)


const mapStateToProps = (state) => ({
    tasks: state.todo.tasks
});
const mapDispatchToProps = (dispatch) => ({
    delete: (index) => dispatch(del(index))
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDo)