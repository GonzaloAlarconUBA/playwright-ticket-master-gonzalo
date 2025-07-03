import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma'; // Ajustá el path si tu prisma.ts está en otro lado

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name } = body;

    if (!email) {
      return NextResponse.json(
        { message: 'Email is required' },
        { status: 400 }
      );
    }

    const newUser = await prisma.user.create({
      data: {
        email,
        name,
      },
    });

    return NextResponse.json(newUser);
  } catch (error) {
    console.error('[CREATE_USER_ERROR]', error);
    return NextResponse.json(
      { message: 'Error creating user' },
      { status: 500 }
    );
  }
}
