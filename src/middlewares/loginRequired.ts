import { Request, Response, NextFunction} from 'express'
import jwt from 'jsonwebtoken';

const dotenv = require('dotenv')
dotenv.config()

const my_secret = String(process.env.SECRET)

interface TokenRequest extends Request {
  token?: string;
}

export const CheckToken = (req: TokenRequest, res: Response, next: NextFunction) => {
  const bearerHeader = req.headers["authorization"]
  if (typeof bearerHeader !== 'undefined'){
    const bearer =  bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next()
  } else{
    res.sendStatus(403)
  }
}


