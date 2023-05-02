import { prisma } from '../services/prisma'
import { Request, Response } from 'express'

export const viewAllAgents = async(req: Request, res: Response) =>{
  try{
    const viewAll = await prisma.agents.findMany()
    res.status(200).send(viewAll)
  }catch(e){
    res.status(400).send(e)
  }
}
