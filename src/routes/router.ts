import { Router } from "express";
const Hellocontroller = require('../controllers/basicController')
const AgentCreateController = require('../controllers/agentController')

const router = Router()

router.get('/', Hellocontroller.hello);
router.post('/', AgentCreateController.create);

module.exports = router;
