import { prisma } from '../../services/prisma'
import { Request, Response } from 'express'

/**
 * Search all the agents on the db
 *
 * @swagger
 * /agents:
 *  get:
 *    description: Search all the agents on the db.
 *    responses:
 *      200:
 *        description: Agents were sent
 *      400:
 *        description: Bad request
 */

export const viewAllAgents = async(req: Request, res: Response) =>{
  try{
    const viewAll = await prisma.agents.findMany()
    await prisma.$disconnect
    res.status(200).send(viewAll)
  }catch(e){
    res.status(400).send(e)
  }
}
