const React = require('react');


const MenuFooter = (props) => {

	return (

		<ul className='footer-menu'>
			{ props.listItems.map(item => <li key={item}> {item} </li>) }
		</ul>

	)

}

module.exports = MenuFooter;