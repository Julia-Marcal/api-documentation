import z from 'zod'

export const agentValidation = z.object({
  name: z.string(),
  real_name: z.string(),
  age: z.number().positive().int(),
  country: z.string()
})
