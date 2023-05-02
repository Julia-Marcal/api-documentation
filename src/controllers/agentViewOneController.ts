import { Request, Response } from 'express'
import { prisma } from '../services/prisma'

/**
 * Search an agent by the id
 *
 * @swagger
 * /agents:
 *  post:
 *    description: Search an agent by the id.
 *    parameters:
 *      - name: id
 *        in: body
 *        description: id of the Agent
 *        required: true
 *    responses:
 *      200:
 *        description: Agent was sent
 *      400:
 *        description: Bad request
 */

export const findById = async(req: Request, res: Response) => {
  try{
    let agent_id = Number(req.params.id);
    const viewAgent = await prisma.agents.findUnique({
      where: {
        id: agent_id
      }
    })
    await prisma.$disconnect
    res.status(200).send(viewAgent)
  }catch (e){
    res.status(400).send(e)
  }
}
