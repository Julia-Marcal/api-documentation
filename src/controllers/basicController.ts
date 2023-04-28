import { z } from 'zod'
import { Request, Response } from 'express';
import { prisma } from '../services/prisma'

export const hello = (req: Request,res: Response) =>{
    try{
      res.send('Hello world!')
    }
    catch(e){
      return res.status(400).json('Something went wrong')
    }
}
