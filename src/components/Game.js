import React from 'react';
import Footer from './Footer.js';
import Scoreboard from './Scoreboard.js';

class Game extends React.Component {
	constructor() {
		super();

		this.state = {
			value: 'rock',
			hasSubmitted: false,
		};
	}

	playAgain = () => {
		this.setState({
			value: 'rock',
			hasSubmitted: false,
		});
	}

	handleSubmit = (event) => {
		this.setState({hasSubmitted: true});
	}

	handleChange = (event) => {
		this.setState({value: event.target.value});
	}

	render() {
		let topDisplay;

		if (this.state.hasSubmitted) {
			topDisplay = (
				<div>
					<Scoreboard
						value={this.state.value}
					/>
					<button type="button" onClick={this.playAgain}>
						Play again
					</button>
				</div>
			);
		}
		else {
			topDisplay = (
				<form onSubmit={this.handleSubmit}>
					<label>
						Rock, Paper, Scissors?
						<br></br>
						<select 
							value={this.state.value} 
							onChange={this.handleChange}
						>
							<option value="rock">Rock</option>
							<option value="paper">Paper</option>
							<option value="scissors">Scissors</option>
						</select>
						<br></br>
					</label>
					<input type="submit" value="Shoot!" />
				</form>
			);
		}

		return (
			<div>
				{topDisplay}
				<br></br>
				<Footer
				/>
			</div>
		);
	}
}

export default Game;
