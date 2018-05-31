import React, {Component} from 'react';
import './App.css';
import Counter from './Components/Counter'
import ToDo from './Components/ToDo'

class App extends Component {
    render() {
        return (
            <div>
                <Counter/>
                <ToDo/>
            </div>
        );
    }
}

export default App;
