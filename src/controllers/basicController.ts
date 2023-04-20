import { z } from 'zod'
import { Request, Response } from 'express';
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

export const hello = (req: Request,res: Response) =>{
    try{
      res.send('Hello world!')
    }
    catch(e){
      return res.status(400).json('Something went wrong')
    }
}

const agentSchema = z.object({
  name: z.string(),
  real_name: z.string(),
  age: z.number().positive().int(),
  country: z.string()
})


export const store = async (req: Request, res: Response) =>{
  try{

    const agentData = agentSchema.parse(req.body)

    const agent = await prisma.agents.create({
      data: agentData
    })

    res.status(201).json(agent)
  }
  catch(e){
    if (e instanceof z.ZodError) {
      res.status(40).json({ error: e.errors });
    } else {
      res.status(400).json({ error: e });
    }
  }
}



