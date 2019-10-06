import React, { Component } from "react";

import Form from "../Form";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
	state = {
		on: false,
		input: "",
		mainColor: "blue",
		lifeCycle: "",
	};
	handleStrings = str => {
		if (str === "Hello World") return true;
		return false;
	};
	componentDidMount() {
		this.setState({ lifeCycle: "componentDidMount" });
	}
	render() {
		const { mainColor, on, input, lifeCycle } = this.state;
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">Welcome to React</h1>
					<h3 className={mainColor}>Everyone is Welcome!</h3>
				</header>

				<div className="App-container">
					<Form />

					<div className="App-block">
						<p className="App-intro">Hello World</p>
						<p className="button-state">{on ? "Yes!" : "No!"}</p>
						<button onClick={() => this.setState({ on: true })}>Click</button>
						<h2>{input}</h2>
						<input onChange={e => this.setState({ input: e.currentTarget.value })} type="text" />
						<p className="lifeCycle">{lifeCycle}</p>
					</div>
				</div>
			</div>
		);
	}
}

export class Link extends Component {
	render() {
		return this.props.hide ? null : <a href={this.props.address}>Click</a>;
	}
}

export default App;
