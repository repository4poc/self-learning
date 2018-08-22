import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {createStore} from 'redux'
import myreducer from './reducer'


const store = createStore(myreducer)

const render = () => ReactDOM.render(<App store={store} state={store.getState()}/>, document.getElementById('root'));

render()
store.subscribe(render)
