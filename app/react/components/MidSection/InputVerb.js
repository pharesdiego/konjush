const React = require('react'),
			checkVerb = require('./../Resources/checkVerb'),
			random = require('./../Resources/random'),
			verbs = require('./../Resources/verbs'),
			faces = require('./../Resources/asciiFaces')


const InputVerb = (props) => {

	var placeHolder = (props.boolPlaceholder) ? `Write a verb like: ${verbs[random(verbs.length)]} :)` : `Another verb? ${faces[random(faces.length)]}`;

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
			<input onChange={changeStateValue} type='text' className='input-verb' placeholder={placeHolder} autoFocus={props.focus} />
		);

}

module.exports = InputVerb;