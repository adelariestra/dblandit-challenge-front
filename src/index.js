import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './services/tests/reportWebVitals';

import App from './App';

const app = (
		<App />
);

// RENDER
ReactDOM.render(app, document.getElementById('root'));
reportWebVitals();
