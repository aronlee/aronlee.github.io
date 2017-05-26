import './index.scss';
import React from 'react';
import ReactDom,{ render } from 'react-dom';


//router
import Router from './router';

// import ReduxSagaDemo from './views/ReduxSagaDemo'

render(<Router />,document.getElementById('root-router'));

// render(<ReduxSagaDemo />,document.getElementById('root-router'));

