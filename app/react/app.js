const React = require('react'),
			Header = require('./components/Header'),
			MidSection = require('./components/MidSection'),
			Footer = require('./components/Footer'),
			Conjugations = require('./components/Conjugations'),
			Conjugate = require('turkish-conjugator');


class App extends React.Component {


	constructor(props){
		super(props);

		this.state = {
			ready: false,
			verb: '',
			arrVerb: [''],
			data: null
		}

		this.activeConjugations = this.activeConjugations.bind(this);
		this.getVerb = this.getVerb.bind(this);
		this.addVerb = this.addVerb.bind(this);
		this.verbData = this.verbData.bind(this);

	}


	activeConjugations(){
		this.setState({
			ready: !this.state.ready
		})
	}


	getVerb(got){
		this.setState({
			verb: got
		})
	}

	addVerb(verb){

		this.setState({
			arrVerb: [verb, ...this.state.arrVerb]
		})

	}

	verbData(verb){

		this.setState({
			data: Conjugate.it(verb)
		});

	}


	render(){

		var move = (this.state.ready) ? 'conjugation-on' : 'conjugation-off';

		return (
			<div className='container-fluid d-flex flex-column'>
				<Header />
				<MidSection ActivateView={this.activeConjugations} getVerb={this.getVerb} addVerb={this.addVerb} getData={this.verbData}/>
				<Footer />
				<Conjugations moveUp={move} userVerb={this.state.verb} getVerb={this.getVerb} addVerb={this.addVerb} actualVerb={this.state.arrVerb[0]} getData={this.verbData} verbData={this.state.data} ActivateView={this.activeConjugations}/>
			</div>
			)

	}

}

module.exports = App;