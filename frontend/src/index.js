import React from 'react';
import ReactDOM from 'react-dom/client';

import {positions , transitions  ,Provider as AlertProvider} from 'react-alert';


import App from './App';

const options={
  timeout:5000,
  position:positions.BOTTOM_CENTER,
  transition:transitions.SCALE
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <App />

);


