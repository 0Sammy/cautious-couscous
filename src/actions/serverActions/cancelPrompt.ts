'use server'

import { cookies } from 'next/headers'

export async function getUserChoice() {
  const choiceCookie = cookies().get('installChoice')
  if (!choiceCookie) return { isCanceled: false }

  const { isCanceled, timestamp } = JSON.parse(choiceCookie.value)
  const sevenDaysInMs = 7 * 24 * 60 * 60 * 1000

  if (Date.now() - timestamp > sevenDaysInMs) {
    cookies().delete('installChoice')
    return { isCanceled: false }
  }

  return { isCanceled }
}

export async function saveUserChoice(isCanceled: boolean) {
  const value = JSON.stringify({ isCanceled, timestamp: Date.now() })

  cookies().set({
    name: 'installChoice',
    value,
    httpOnly: true,
    path: '/',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 7 * 24 * 60 * 60, // 7 days
    sameSite: 'strict',
  })

  return { success: true }
}