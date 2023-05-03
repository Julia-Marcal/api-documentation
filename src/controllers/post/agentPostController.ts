import { createAgent } from '../../repositories/agentCreate'
import { Request, Response } from 'express'
import {agentValidation} from '../../validation/validation'
import { prisma } from '../../services/prisma'

/**
 * Create agent on the db
 *
 * @swagger
 * /agents:
 *  post:
 *    description: Create a new agent on the db.
 *    parameters:
 *      - name: name
 *        in: body
 *        description: Name of the agent
 *        required: true
 *        schema:
 *          type: string
 *          minimum: 1
 *      - name: real_name
 *        in: body
 *        description: Real name of the agent
 *        required: true
 *        schema:
 *          type: string
 *          minimum: 1
 *      - name: age
 *        in: body
 *        description: Age of tha agent
 *        required: true
 *        schema:
 *          type: number
 *      - name: country
 *        in: body
 *        description: Country of the agent
 *        required: true
 *        schema:
 *          type: string
 *          minimum: 1
 *    responses:
 *      200:
 *        description: Agent was created
 *      400:
 *        description: Bad request
 */

export const create = async(req: Request, res: Response) => {
  try{
    await agentValidation.parse(req.body)
    const agent = await createAgent(req.body);
    await prisma.$disconnect
    res.status(200).send(agent)
  }catch (e){
    res.status(400).send(e)
  }
}
