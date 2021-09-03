import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../pages/Login/Login';
import Profile from '../pages/Profile/Profile';
import Signup from '../pages/Signup/Signup';
import EnhancedTable from '../Table';

function AppRouter () {
	return (
		<Router>
			<Switch>
			<Route path="/profile">
					<Profile />
				</Route>
				<Route path="/signup">
					<Signup />
				</Route>
				<Route exact path="/">
					<Login />
				</Route>
				<Route path="*">
					<h1>404 Not found</h1>
				</Route>
			</Switch>
		</Router>
	);
}

export default AppRouter;