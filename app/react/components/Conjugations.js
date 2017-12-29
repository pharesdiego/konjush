const React = require('react'),
			TopBar = require('./Conjugations/TopBar'),
			VerbInfo = require('./Conjugations/VerbInfo'),
			Cards = require('./Conjugations/Card'),
			Conjugate = require('turkish-conjugator');


class Conjugations extends React.Component {

	constructor(props){
		super(props);

	}

	render(){

		return(

			<div className={'conjugation position-fixed container-fluid ' + this.props.moveUp}>
					
					<TopBar verb={this.props.userVerb} getVerb={this.props.getVerb} addVerb={this.props.addVerb} getData={this.props.getData} ActivateView={this.props.ActivateView}/>
					<VerbInfo verb={this.props.userVerb} actualVerb={this.props.actualVerb}/>
					<Cards verbData={this.props.verbData}/>

			</div>

		);

	}

}

module.exports = Conjugations;