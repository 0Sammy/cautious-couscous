"use server"

import { cookies } from 'next/headers'

//Import Needed Utils
import { verifyToken, signToken } from '@/lib/token';



export async function getUserChoice() {

    //Fetch Token, throw error if token does not exist
    const token = cookies().get('choice')?.value
    if (!token) return { isCanceled: false }

    //Verify token, fetch user details and throw error if doesn't exists
    const userChoice = verifyToken(token)
    if (!userChoice) return { isCanceled: false }

    //Return user details
    return { isCanceled: true };

}


export async function saveUserChoice() {
    
    const data = signToken({ isCanceled: true });

    cookies().set({
        name: 'choice',
        value: data,
        httpOnly: true,
        path: '/',
        secure: process.env.NODE_ENV === 'production',
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        sameSite: "strict",
    });

    return { success: true }
}