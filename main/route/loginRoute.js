const router = require("express-promise-router")();
const user = require('../controller/loginController')

router.route('/signUp').post(user.signup)
router.route('/login').post(user.login)

module.exports = router;