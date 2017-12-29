const React = require('react');


const VerbInfo = (props) => {


	return(
		<div className="row my-3">
			<div className="col-6 offset-lg-1">
				<p className="actual-verb m-0">{props.actualVerb}</p>
			</div>
		</div>
	)

}

module.exports = VerbInfo;