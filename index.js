const ReactDOM = require('react-dom'),
			React = require('react'),
			App = require('./app/react/app');


require('./app/public/styles/main.scss');
require('./app/public/styles/style.css');
require('./app/public/js/movement.js');
ReactDOM.render(<App />, document.getElementById('app'));