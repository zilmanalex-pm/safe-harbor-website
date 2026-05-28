// app/api/admin/auth/route.ts — Admin login handler
// POST /api/admin/auth  { password: string }  → sets admin_auth cookie and redirects

import { NextResponse } from 'next/server'

const COOKIE_NAME = 'admin_auth'
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30 // 30 days in seconds

export async function POST(req: Request) {
  const { password } = await req.json()
  const expected = process.env.ADMIN_PASSWORD

  if (!expected || password !== expected) {
    return NextResponse.json({ error: 'Invalid password' }, { status: 401 })
  }

  const res = NextResponse.json({ ok: true })
  res.cookies.set(COOKIE_NAME, password, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: COOKIE_MAX_AGE,
    path: '/',
  })
  return res
}

export async function DELETE() {
  const res = NextResponse.json({ ok: true })
  res.cookies.set(COOKIE_NAME, '', { maxAge: 0, path: '/' })
  return res
}
