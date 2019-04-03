import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
	return (
		<div>
			<div className="navigation">
				<div>
					<Link to="/register">Register</Link>
				</div>
				<div>
					<Link to="/login">Login</Link>
				</div>
				<div>
					<Link to="/users">Users</Link>
				</div>
			</div>
		</div>
	);
};

export default Navigation;
