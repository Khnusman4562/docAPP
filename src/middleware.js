import { NextResponse } from "next/server";

export function middleware(request) {
  console.log("i am here middleware to check")
  
  const token = false;
  console.log("hello token ", token)
  

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/support/:path*']
}