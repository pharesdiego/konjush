const React = require('react'),
			checkVerb = require('./../Resources/checkVerb');

const InputVerb = (props) => {


	var changeStateValue = (event) => {

		props.verbChange(event.target.value.toLowerCase());

		if(checkVerb(event.target.value.toLowerCase())){

			props.addVerb(checkVerb(event.target.value.toLowerCase()));

			props.verbData(checkVerb(event.target.value.toLowerCase()));

			event.target.value = '';

			if(typeof props.ActivateView == 'function'){
				props.ActivateView();
			}

		}
	}

		return(
			<input onChange={changeStateValue} type='text' className='input-verb' placeholder='Write a verb :)' autoFocus={props.focus} />
		);

}

module.exports = InputVerb;