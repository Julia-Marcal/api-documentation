import { createUser } from '../../repositories/userCreate'
import { Request, Response} from 'express'
import {userValidation} from '../../validation/validationUser'
import { prisma } from '../../services/prisma'
import jwt from 'jsonwebtoken';

const dotenv = require('dotenv')
dotenv.config()

const my_secret = String(process.env.SECRET)


export const create = async(req: Request, res: Response) => {
  try{
    if(!req.body){
      throw new Error('Cannot create user without req.body')
    }
    await userValidation.parse(req.body)
    const user = await createUser(req.body);
    const token = jwt.sign({user}, my_secret, {expiresIn: '1y'})
    await prisma.$disconnect
    res.status(200).send({user, token})
  }catch (e){
    res.status(400).send(e)
  }
}

