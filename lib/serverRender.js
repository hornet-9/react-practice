import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './components/index.js';

const serverRender = () => {
	return ReactDOMServer.renderToString(
		<App />
	);
};

module.exports = serverRender;