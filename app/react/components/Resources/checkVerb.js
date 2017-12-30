const Conjugate = require('turkish-conjugator');

var notAllowedStupidCombinations = [
	'mamak', 
	'memek',
	'mamek',
	'memak'
]

var hasSecureLength = str => (str.length < 20) ? true : false; 

var checkVerb = (verb) => {

	if(!notAllowedStupidCombinations.includes(verb)){
		if(Conjugate.whiteSpaces(verb) == false || Conjugate.whiteSpaces(verb) <= 1){

			if(Conjugate.hasMinLength(verb, 5) && hasSecureLength(verb)){

				if(Conjugate.verify(verb)){

					return (Conjugate.isNegativeVerb(verb)) ? Conjugate.convertToPositive(verb) : verb;
				}

			}

		}
	}
	return false;
}

module.exports = checkVerb;