const React = require('react');

class Card extends React.Component {

	constructor(props){
		super(props);

		this.changeToNegative = this.changeToNegative.bind(this);
		this.changeToPositive = this.changeToPositive.bind(this);
		this.expand = this.expand.bind(this);

		this.state = {
			verbForm: true,
			expanded: true
		}
	}

	changeToNegative(){

		this.setState({
			verbForm: false
		})
	}

	changeToPositive(){
		this.setState({
			verbForm: true
		})
	}

	expand(){

		this.setState({
			expanded: !this.state.expanded
		})

	}

	render(){

		var pronoms = ['Ben', 'Sen', 'O', 'Biz', 'Siz', 'Onlar'];

		return(
				<div className="card col-sm-11 col-md-5 col-lg-3 mx-3 py-2 mb-3"> 

					<div className="row no-gutters">
						<div className="time-name col-10">{this.props.Time}</div>
						<div className={"expand-box col-2 d-flex justify-content-center align-items-center d-md-none" + (this.state.expanded ? '' : ' expand-box-rotated')} onClick={this.expand}>
							<span className="icon-expand_less"></span>
						</div>
					</div>

					<div className={"box-state-buttons row no-gutters " + (this.state.expanded ? '' : 'no-expanded')}>
						<div className="col-6 text-center py-1 size-20" onClick={this.changeToPositive}>Positive</div>
						<div className="col-6 text-center py-1 size-20" onClick={this.changeToNegative}>Negative</div>
					</div>

					<div className={"indicator-toggle mb-2 " + (this.state.verbForm ? '' : 'indicator-toggle-right ') + (this.state.expanded ? '' : 'waitIt')}></div>

					<div className={"row no-gutters d-flex flex-column " + (this.state.expanded ? '' : 'no-expanded')}>



						{this.state.verbForm == true ? this.props.Positives.map((item, index) => 

							<div className='col-12 d-flex' key={item}>
								<div className="col-3 p-0">
									<p className="color-gray mb-1 size-18">{pronoms[index]}</p>
								</div>

								<div className="p-0">
									<p className='size-18 mb-1'>{item}</p> 
								</div>
							</div>

							)

							:this.props.Negatives.map((item, index) => 

							<div className='col-12 d-flex' key={item}>
								<div className="col-3 p-0">
									<p className="color-gray mb-1 size-18">{pronoms[index]}</p>
								</div>

								<div className="p-0">
									<p className='size-18 mb-1'>{item}</p> 
								</div>
							</div>

							)
						}





					</div>
				</div>

		);

	}
}

class Cards extends React.Component {

	constructor(props){
		super(props);
	}

	render(){

		var generate = (type) => (this.props.verbData != null) ? times.map((item) => this.props.verbData[item][type]) : null;

		var times = ['aorist', 'gerund', 'future', 'simplePast', 'misPast', 'pastContinuous', 'presentIndefinite', 'gerundIndefinite', 'futureIndefinite', 'potential'];

		var realTimes = ['Aorist', 'Gerund', 'Future', 'Simple Past', 'Miş Past', 'Past Continuous', 'Present Indefinite', 'Gerund Indefinite', 'Future Indefinite', 'Potential']
		
		var positives = generate('positive');

		var negatives = generate('negative');


		return(
			<div className="row justify-content-center mb-3">
				{(positives != null) ? times.map((item, index) => <Card Time={realTimes[index]} key={item} Positives={positives[index]} Negatives={negatives[index]}/>) : ''}
			</div>
		)

	}

}

module.exports = Cards;