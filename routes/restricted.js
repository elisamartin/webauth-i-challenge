const express = require('express');
const router = express.Router();
const Users = require('../data/users-model');

router.use(express.json());

router.get('/', (req, res) => {
	Users.find()
		.then((users) => {
			res.json(users);
		})
		.catch((err) => res.send(err));
});

module.exports = router;
