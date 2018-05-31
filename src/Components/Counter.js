import React from 'react'
import {connect} from 'react-redux'
import {inc,dec} from '../state/counter'

const Counter =(props)=>(

    <div>
        <h1>{props.count}</h1>
        <button onClick={props.inc}>+</button>
        <button onClick={props.dec}>-</button>
    </div>
);
const mapStateToProps=(state)=>({

    count:state.counter.count
});

const mapDispatchToProps=(dispatch)=>({

    inc:()=>dispatch(inc()),
    dec:()=>dispatch(dec())
});
export default connect(mapStateToProps,mapDispatchToProps)(Counter)