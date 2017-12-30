const React = require('react'),
			checkVerb = require('./../Resources/checkVerb'),
			random = require('./../Resources/random'),
			verbs = require('./../Resources/verbs'),
			faces = require('./../Resources/asciiFaces'),
			formatValue = require('./../Resources/formatValue');

const InputVerb = (props) => {

	var placeHolder = (props.boolPlaceholder) ? `Write a verb like: ${verbs[random(verbs.length)]} :)` : `Another verb? ${faces[random(faces.length)]}`;

	var changeStateValue = (event) => {

		props.verbChange(formatValue(event.target.value));

		if(checkVerb(formatValue(event.target.value))){

			props.addVerb(formatValue(event.target.value));

			props.verbData(formatValue(event.target.value));

			event.target.value = '';

			if(typeof props.ActivateView == 'function'){
				props.ActivateView();
			}

		}
	}

		return(
			<input onChange={changeStateValue} type='text' className='input-verb' placeholder={placeHolder} autoFocus={props.focus} />
		);

}

module.exports = InputVerb;