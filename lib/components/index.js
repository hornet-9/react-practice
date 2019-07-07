import React from 'react';
import ReactDOM from 'react-dom';
import 'core-js';
import 'regenerator-runtime/runtime';

class App extends React.Component {
	state = {crap: 42}
	render() {
		return (<h2>Hello react number {this.state.crap}</h2>);
	}

	aSinkFunc = () => {
		return Promise.resolve(32);
	}

	async componentDidMount() {
		this.setState({crap: await this.aSinkFunc()});
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('rootx')
);