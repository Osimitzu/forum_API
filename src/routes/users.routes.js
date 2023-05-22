// Router de express 
const { Router } = require('express');
const { createUser, login } = require('../controllers/users.controllers');

const router = Router();

router.post('/users', createUser);

router.post('/users/login', login);

module.exports = router;  