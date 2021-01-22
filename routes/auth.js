const express = require('express')
const router = express.Router()
const UserController = require('../controllers/UserController')



router.get('/users',UserController.index)
router.post('/register',UserController.store)
router.post('/login',UserController.login)
router.get('/me',UserController.authenticated)
module.exports = router