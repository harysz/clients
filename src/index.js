import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './AppRoutes';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import clientsReducer from './reducers/clientsReducer';
import workersReducer from './reducers/workersReducer';
import {combineReducers, createStore} from 'redux';
import {Provider} from 'react-redux';

const Reducer = combineReducers({
    clients: clientsReducer,
    workers:workersReducer
});
const store = createStore(Reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


ReactDOM.render(<Provider store={store}><AppRoutes/></Provider>,
    document.getElementById('root'));
registerServiceWorker();
