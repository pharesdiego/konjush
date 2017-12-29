const React = require('react'),
			InputVerb = require('./MidSection/InputVerb');

class MidSection extends React.Component {

	constructor(props){

		super(props);
		this.state = {
			err: false

		}
		this.gotErr = this.gotErr.bind(this);

	}


	gotErr(){
		this.setState({
			err: true
		})
	}

	render(){

		return(

			<div className='row h-100'>
				
				<div className='container d-flex justify-content-center align-items-center'>
					<div className='container'>
						<div className='row justify-content-center'>
							<div className="col-sm-12 col-md-10 col-lg-8">
								<InputVerb verbChange={this.props.getVerb} ActivateView={this.props.ActivateView} addVerb={this.props.addVerb} verbData={this.props.getData} focus={true}/>
							</div>
							<div className='col-12 py-2' onClick={this.gotErr}>
								<p className='m-0 text-center'>C O N J U G A T E</p>
							</div>
						</div>
					</div>
				</div>

			</div>

		);

	}


}


module.exports = MidSection;