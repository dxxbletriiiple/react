import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/app/app';

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(root);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
