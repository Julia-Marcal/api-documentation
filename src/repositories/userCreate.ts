import { prisma } from '../services/prisma'

export const createUser = async(data: any) =>{
  const user = await prisma.users.create({
    data,
    select:{
      id: true,
      name: true,
      email: true,
    }
  });
  return user
}
