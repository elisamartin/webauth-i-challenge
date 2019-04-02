const express = require('express');
const bcrypt = require('bcryptjs');
const Users = require('./data/users-model');
const authentication = require('./authMiddleware');
const session = require('express-session');

const server = express();

const sessionConfig = {
	name: 'monkey',
	secret: 'this is a secret',
	cookie: {
		maxAge: 1000 * 60 * 60,
		secure: false
	},
	httpOnly: true,
	resave: false,
	saveUninitialized: false
};

server.use(express.json());
server.use(session(sessionConfig));

server.get('/', (req, res) => {
	res.send("It's alive!");
});

// [POST] /api/register
server.post('/api/register', (req, res) => {
	let user = req.body;
	const hashPw = bcrypt.hashSync(user.password, 10);
	user.password = hashPw;
	Users.add(user)
		.then((saved) => {
			res.status(201).json(saved);
		})
		.catch((err) => {
			res.status(500).json({ error: 'Something went wrong.' });
		});
});

// [POST] /api/login
server.post('/api/login', (req, res) => {
	let { username, password } = req.body;
	Users.findBy({ username }).first().then((user) => {
		if (user && bcrypt.compareSync(password, user.password)) {
			req.session.user = user;
			res.status(200).json({ message: `Hello ${user.username}!` });
		} else {
			res.status(401).json({ message: 'You shall not pass!' });
		}
	});
});

// [GET] /api/users

server.get('/api/users', authentication, (req, res) => {
	Users.find()
		.then((users) => {
			res.status(200).json(users);
		})
		.catch((err) => {
			res.status(500).json({ error: 'You shall not pass!' });
		});
});

server.get('/api/logout', (req, res) => {
	req.session.destroy();
	res.send('Bye!');
	res.end();
});

const port = process.env.PORT || 5050;
server.listen(port, () => console.log(`\n**** Running on port ${port} ****\n`));
