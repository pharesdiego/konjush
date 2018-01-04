const React = require('react'),
			InputVerb = require('./MidSection/InputVerb');

class MidSection extends React.Component {

	constructor(props){

		super(props);
	}


	render(){

		return(

			<div className='row h-100'>
				
				<div className='container d-flex justify-content-center align-items-center'>
					<div className='container'>
						<div className='row justify-content-center'>
							<div className="col-sm-12 col-md-10 col-lg-8">
								<InputVerb verbChange={this.props.getVerb} ActivateView={this.props.ActivateView} addVerb={this.props.addVerb} verbData={this.props.getData} focus={true} boolPlaceholder={true}/>
							</div>
						</div>
					</div>
				</div>

			</div>

		);

	}


}


module.exports = MidSection;