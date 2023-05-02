import { Router } from "express";
const Hellocontroller = require('../controllers/basicController')
const AgentCreateController = require('../controllers/agentPostController')
const AgentViewAllController = require('../controllers/agentViewAllController')

const router = Router()

router.get('/HelloWorld', Hellocontroller.hello);
router.get('/', AgentViewAllController.viewAllAgents)
router.post('/', AgentCreateController.create);

module.exports = router;
