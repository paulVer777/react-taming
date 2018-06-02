import React from 'react';
import './App.css';


import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Counter from './Components/Counter'
import ToDo from './Components/ToDo'
import Customers from './Components/Customers'

const App = () => {

    return (
        <div>

            <Router>
                <div>
                    <Link to={'/'}> Home </Link>
                    <Link to={'/counter/s'}> counter </Link>
                    <Link to={'/todo/d'}> todo </Link>
                    <Link to={'/customers'}> customers</Link>

                    <Route exact path={'/'} component={Dashboard}/>
                    <Route exact patch={'/counter/s'} component={Counter}/>
                    <Route exact patch={'/todo/d'} component={ToDo}/>
                    <Route exact patch={'/customers'} component={Customers}/>
                </div>

            </Router>


        </div>
    );
}


export default App;
