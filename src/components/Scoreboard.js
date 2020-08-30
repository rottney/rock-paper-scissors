import React from 'react';

class Scoreboard extends React.Component {
	render() {
		const player1 = this.props.value;
		const computer = computersTurn();

		return (
			<div>
				You played {player1}.
				<br></br>
				Computer played {computer}.
				<br></br>
				{declareWinner(player1, computer)}
			</div>
		);
	}
}

function computersTurn() {
	const options = [
		"rock",
		"paper",
		"scissors",
	];

	return options[Math.floor(Math.random()*3)];
}

function declareWinner(player1, computer) {
	if (player1 === computer) {
		return "Draw!";
	}

	if (player1 === "rock") {
		if (computer === "scissors") {
			return "Rock beats scissors.  You win!";
		}
		else {
			return "Paper beats rock.  You lose!";
		}
	}

	else if (player1 === "paper") {
		if (computer === "rock") {
			return "Paper beats rock.  You win!";
		}
		else {
			return "Scissors beats paper.  You lose!";
		}
	}

	else {
		if (computer === "paper") {
			return "Scissors beats paper.  You win!";
		}
		return "Rock beats scissors.  You lose!";
	}
}

export default Scoreboard;
