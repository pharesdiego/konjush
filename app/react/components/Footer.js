const React = require('react'),
			MenuFooter = require('./Footer/MenuFooter');



class Footer extends React.Component {


	render(){

		var items = 
		[
			{
				text:'Who did this?',
				url: "https://github.com/pharesdiego"
			},
			{
				text: 'Fork on GitHub',
				url: "https://github.com/pharesdiego/turkish-conjugator"
			},
			{
				text: 'NPM',
				url: "https://www.npmjs.com/package/turkish-conjugator"
			}
		];

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
