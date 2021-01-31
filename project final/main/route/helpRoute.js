const router = require("express-promise-router")();
const help = require('../controller/helpController')

router.route('/addHelp').post(help.addHelp)
router.route('/modifyHelp').patch(help.modifyHelp)
router.route('/deleteHelp').delete(help.deleteHelp)
router.route('/getAllHelp').get(help.getAllHelp)

module.exports = router;