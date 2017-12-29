const React = require('react'),
			MenuFooter = require('./Footer/MenuFooter');



class Footer extends React.Component {


	render(){

		var items = ['Who did this?', 'Fork on GitHub', 'NPM'];

		return(

			<div className='row h-100 d-flex align-items-end'>
				<div className='container'>
					<MenuFooter listItems={items} />
				</div>
			</div>

		);

	}

}


module.exports = Footer;
