import React from 'react'
import {fetchCustomers} from '../state/customers'
import {connect} from 'react-redux'

const Customers = (props) => (
    <div>

    <button onClick={props.getC}>Klik</button>
        {


            props.listOfCustomers.map(value =>

                <div>{value.name.first}</div>
            )
        }
        :


    </div>

);

const mapStateToProps = (state) => ({

    listOfCustomers: state.customers.customers

});

const mapDispatchToProps = (dispatch) => ({

    getC: () => dispatch(fetchCustomers())
});

export default connect(mapStateToProps, mapDispatchToProps)(Customers)