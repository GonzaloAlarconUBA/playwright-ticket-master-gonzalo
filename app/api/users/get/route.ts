import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma'; // Ajusta el path si es necesario

export async function GET() {
  try {
    const users = await prisma.user.findMany({
      include: {
        posts: true, // incluye los posts de cada usuario
      },
    });

    return NextResponse.json(users);
  } catch (error) {
    console.error('[GET_USERS_ERROR]', error);
    return NextResponse.json(
      { message: 'Error fetching users' },
      { status: 500 }
    );
  }
}
