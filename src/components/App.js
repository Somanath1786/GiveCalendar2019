import React from 'react';
import './App.css';
import Homepage from './Homepage';

// Redux and store
import store from './store/store'
import {Provider} from 'react-redux'

function App() {
  return (
    <div className="App">
      <Provider store = {store} >
        <Homepage />
      </Provider>
    </div>
  );
}

export default App;
