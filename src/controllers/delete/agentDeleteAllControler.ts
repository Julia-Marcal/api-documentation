import { Request, Response } from "express";
import { prisma } from '../../services/prisma'

/**
 * Delete all agents
 *
 * @swagger
 * /agents:
 *  delete:
 *    description: Delete all agents.
 *    parameters:
 *        required: none
 *    responses:
 *      200:
 *        description: Agents were deleted from the database
 *      400:
 *        description: Bad request
 */

export const deleteAll = async(req: Request, res: Response) =>{
  try{
    const delAllAgents = await prisma.agents.deleteMany()
    await prisma.$disconnect
    res.status(200).send(delAllAgents)
  }catch(e){
    res.status(400).send(e)
  }
}
