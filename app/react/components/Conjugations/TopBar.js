const React = require('react'),
			InputVerb = require('./../MidSection/InputVerb');


const TopBar = (props) => {

	return(

		<div className='topBar row pt-2'>
			<div className="col-sm-3 d-flex justify-content-center align-items-center" onClick={props.ActivateView}>
				<span className="arrow-back icon-arrow_back"></span>
			</div>
			<div className="col-sm-6">
				<InputVerb verbChange={props.getVerb} addVerb={props.addVerb} verbData={props.getData} focus={false}/>
			</div>
		</div>

	)

}

module.exports = TopBar;