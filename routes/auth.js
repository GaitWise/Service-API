const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller');

router.get('/login', (req, res) => {
    return res.send("로그인 페이지");
});

router.get('/test',usersController.getUsers)

module.exports = router;
