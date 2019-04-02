import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './components/login';
import Register from './components/register';
import Users from './components/users';
import Navigation from './components/navigation';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navigation />

				<Route exact path="/register" component={Register} />
				<Route path="/login" component={Login} />
				<Route path="/users" component={Users} />
			</div>
		);
	}
}

export default App;
