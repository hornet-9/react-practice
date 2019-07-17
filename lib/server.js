const express = require('express');
const config = require('./config');
require('babel-register')({
  ignore: [/(node_modules)/],
  presets: ['babel-preset-env', 'babel-preset-react'],
  plugins: ["transform-class-properties"]
});
const serverRender = require('./serverRender.js');
const app = express();

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', (req, res) =>{
	const initialContent = serverRender();
	res.render('index', { initialContent });
});

app.listen(config.port, () => {
	console.info(`Running on ${config.port}...`)
});

