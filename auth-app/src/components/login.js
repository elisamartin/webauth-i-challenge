import React from 'react';

const Login = (props) => {
	return (
		<div>
			<p>Login</p>
			<div>
				<form>
					<input type="text" name="username" placeholder="Username" />
					<input type="password" name="password" placeholder="Password" />
					<input type="submit" value="Submit" />
				</form>
			</div>
		</div>
	);
};

export default Login;
