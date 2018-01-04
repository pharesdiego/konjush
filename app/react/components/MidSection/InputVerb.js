const React = require('react'),
			checkVerb = require('./../Resources/checkVerb'),
			random = require('./../Resources/random'),
			verbs = require('./../Resources/verbs'),
			faces = require('./../Resources/asciiFaces'),
			formatValue = require('./../Resources/formatValue');


const _ = (...fns) => arg => fns.reduce((ref, fn) => fn(ref), arg);


const checkAndFormat = _(formatValue, checkVerb);

const InputVerb = (props) => {

	var placeHolder = (props.boolPlaceholder) ? `Write a verb like: ${verbs[random(verbs.length)]} :)` : `Another verb? ${faces[random(faces.length)]}`;

	var changeStateValue = (event) => {

		let formatedVerb = checkAndFormat(event.target.value);

		props.verbChange(formatedVerb);

		if(formatedVerb){

			props.addVerb(formatedVerb);

			props.verbData(formatedVerb);

			event.target.value = '';

			event.target.blur();

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