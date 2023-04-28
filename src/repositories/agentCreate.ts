import { prisma } from '../services/prisma'

export const createAgent = async(data: any) =>{
  const agent = await prisma.agents.create({
    data,
    select:{
      id: true,
      name: true,
      real_name: true,
      age: true,
      country: true
    }
  });
  return agent
}
