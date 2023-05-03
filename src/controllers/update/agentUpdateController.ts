import { Request, Response } from 'express'
import { prisma } from '../../services/prisma'

export const updateName = async(req: Request, res: Response) =>{
  try{
    let new_name = String(req.body.name)
    let agent_id = Number(req.params.id);
    const dataUpdate = await prisma.agents.update({
      where: {
        id: agent_id
      },
      data:{
        name: new_name
      }
    })
    await prisma.$disconnect
    res.status(200).send(dataUpdate).send('Agent was updated')
  }catch(e){
    res.status(400).send(e)
  }
}
