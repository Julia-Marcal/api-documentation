import { Router } from "express";
const Hellocontroller = require('../controllers/basicController')
const AgentCreateController = require('../controllers/agentPostController')
const AgentViewAllController = require('../controllers/agentViewAllController')
const ViewAgentById = require('../controllers/agentViewOneController')

const router = Router()

router.get('/HelloWorld', Hellocontroller.hello);
router.get('/', AgentViewAllController.viewAllAgents)
router.get('/:id', ViewAgentById.findById)
router.post('/', AgentCreateController.create);

module.exports = router;
