const React = require('react');


const MenuFooter = (props) => {

	return (

		<ul className='footer-menu'>
			{ props.listItems.map((item, id) => <li key={id}><a href={item.url} target="_blank"> {item.text} </a></li>) }
		</ul>

	)

}

module.exports = MenuFooter;