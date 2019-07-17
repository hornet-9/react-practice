// START PROJECT WITH node -r esm lib/server.js //

import React from 'react';
import ReactDOM from 'react-dom';
import 'core-js';
import 'regenerator-runtime/runtime';

export default class App extends React.Component {
	state = {crap: 42};
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

if (typeof window !== 'undefined') {
	ReactDOM.render(
		<App />,
		document.getElementById('rootx')
	);
}