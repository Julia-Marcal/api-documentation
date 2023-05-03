import { Request, Response } from 'express';

/**
 * Hello World message
 *
 * @swagger
 * /hello:
 *  get:
 *    description: Returns a Hello World message.
 *    requestBody:
 *       required: false
 *    responses:
 *      200:
 *        description: hello message
 *      400:
 *        description: Bad request
 */

export const hello = (req: Request,res: Response) =>{
    try{
      res.send('Hello world!')
    }
    catch(e){
      return res.status(400).json('Something went wrong')
    }
}