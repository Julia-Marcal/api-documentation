import { Request, Response } from "express";
import { prisma } from '../../services/prisma'

/**
 * Delete single agent
 *
 * @swagger
 * /agents:
 *  delete:
 *    description: Delete an agent by the id.
 *    parameters:
 *      - name: id
 *        in: body
 *        description: id of the Agent
 *        required: true
 *    responses:
 *      200:
 *        description: Agent was deleted from the database
 *      400:
 *        description: Bad request
 */

export const deleteById = async(req: Request, res: Response) =>{
  try{
    let agent_id = Number(req.params.id);
    const deleteAgent = await prisma.agents.delete({
      where: {
        id: agent_id
      }
    })
    await prisma.$disconnect
    res.status(200).send('was deleted from the database')
  }catch(e){
    res.status(400).send(e)
  }
}
