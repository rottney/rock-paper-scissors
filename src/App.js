import React, { Component } from 'react';
import './App.css';
import Game from './components/Game.js';

class App extends Component {
	componentDidMount() {
		document.title = "Rock, Paper, Scissors?"
	}
	render() {
		return (
			<div className="App">
				<Game
				/>
			</div>
		);
	}
}

export default App;
