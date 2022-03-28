import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';

import {FavoritiesContextProvider} from './components/store/Favorities-context'
ReactDOM.render(
<FavoritiesContextProvider>
<BrowserRouter>
<App />
</BrowserRouter>
</FavoritiesContextProvider>
, document.getElementById('root'));


