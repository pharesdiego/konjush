const React = require('react');

const Title = (props) => {

	return (

		<div className='title-box row flex-column h-100 d-flex justify-content-center align-items-center'>
			<h1 className="title">KONJ<span className='u-letter'>Ü</span>SH</h1>
			<p className="m-0">A turkish conjugator</p>
		</div>
	);

}

module.exports = Title;