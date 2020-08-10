import React from 'react';
import {render} from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { configureStore} from "@reduxjs/toolkit";
import { Provider } from 'react-redux'
import rootReducer from './reducers/combine'


const store = configureStore({
    
   reducer:rootReducer
    
 });

render(
<BrowserRouter>
<Provider store={store}>
    <App />
</Provider>
</BrowserRouter>, document.getElementById('root'));