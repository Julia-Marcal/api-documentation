import { createAgent } from '../repositories/agentCreate'
import { Request, Response } from 'express'
import {agentValidation} from '../validation/validation'

export const create = async(req: Request, res: Response) => {
  try{
    await agentValidation.parse(req.body)
    const agent = await createAgent(req.body);
    res.status(200).send(agent)
  }catch (e){
    res.status(400).send(e)
  }
}
