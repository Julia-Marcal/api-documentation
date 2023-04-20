
export const hello = (req: any,res: any) =>{
    try{
      res.send('Hello world!')
    }
    catch(e){
      return res.status(400).json('Something went wrong')
    }
  }



