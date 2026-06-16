// Temporary diagnostic route — delete after confirming Sanity works
import { NextResponse } from 'next/server'

export async function GET() {
  const base = 'https://xmlbv2oe.api.sanity.io/v2024-01-01/data/query/production'

  try {
    const url = `${base}?query=*[_type%3D%3D%22sharedContent%22+%26%26+locale%3D%3D%22he%22][0]{siteName,locale}`
    const res = await fetch(url)
    const text = await res.text()
    return NextResponse.json({
      status: res.status,
      ok: res.ok,
      body: text.slice(0, 500),
      fetchWorked: true,
    })
  } catch (err: any) {
    return NextResponse.json({
      fetchWorked: false,
      error: err?.message ?? String(err),
    })
  }
}
