const Conjugate = require('turkish-conjugator');

var checkVerb = (verb) => {

	if(Conjugate.hasMinLength(verb, 5)){

		if(Conjugate.verify(verb)){

			return (Conjugate.isNegativeVerb(verb)) ? Conjugate.convertToPositive(verb) : verb;
		}

	}

	return false;
}

module.exports = checkVerb;