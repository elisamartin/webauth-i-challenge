import React from 'react';

const Register = (props) => {
	return (
		<div>
			<p>Register</p>
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

export default Register;
