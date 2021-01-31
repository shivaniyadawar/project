const router = require("express-promise-router")();
const helpReq = require('../controller/helpRequestController')

router.route('/reqHelp').post(helpReq.reqHelp)
router.route('/getAllReq').get(helpReq.getAllReq)
router.route('/getHelpReq').get(helpReq.getHelpReq)
router.route('/getMyHelpReq').get(helpReq.getMyHelpReq)
router.route('/modifyHelpReq').patch(helpReq.modifyHelpReq)
router.route('/deleteHelpReq').delete(helpReq.deleteHelpReq)
router.route('/completeHelpReq').patch(helpReq.completeHelpReq)

module.exports = router;