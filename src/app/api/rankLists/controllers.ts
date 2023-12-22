import {prisma} from '@/db/client'
import { NextResponse } from 'next/server'

export const testDb = async () => {
    // Use select object
    const createUser = await prisma.user.create({
        data: {
        email: 'bob@prisma.io',
        }
    })

    console.dir(createUser, { depth: Infinity })

    return NextResponse.json(createUser);
}