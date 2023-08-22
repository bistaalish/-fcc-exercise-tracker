const express = require('express');
const { getUser,createUser } = require('../controller/userController');

const router = express.Router();

// Adding get route
router.get("/users",getUser);
router.post("/users",createUser)

module.exports = router;