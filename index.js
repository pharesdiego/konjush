const ReactDOM = require('react-dom'),
			React = require('react'),
			App = require('./app/react/app');


require('./app/public/styles/main.scss');
require('./app/public/styles/style.css');
ReactDOM.render(<App />, document.getElementById('app'));