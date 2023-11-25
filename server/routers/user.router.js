const router = require('express').Router()
const ctrls = require('../controllers/user.controller')

router.post('/register', ctrls.register)

module.exports = router