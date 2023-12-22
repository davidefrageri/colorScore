import { PrismaClient } from '@/db/generated/client'
import { withAccelerate } from '@prisma/extension-accelerate'

export const prisma = new PrismaClient().$extends(withAccelerate())