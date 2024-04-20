// src/pages/middleware.ts
import { NextRequest, NextResponse } from 'next/server';

const redirects = new Map<string, string>([
  ['/portfolio/smrt16.com', '/portfolio/smrt16'],
  ['/portfolio/morrowhillvisionworks.com ', '/portfolio/morrowhillvisionworks'],
  ['/portfolio/bgsf.com', '/portfolio/bgsf-com'],
  ['/portfolio/abetterflorist.com', '/portfolio/a-better-florist'],
  ['/portfolio/okokagency.eu', '/portfolio/okokagency-eu'],
]);

export default function middleware(request: NextRequest) {

    const { pathname, origin } = request.nextUrl;
    const redirectUrl = redirects.get(pathname.toLocaleLowerCase());
    console.log("redirectUrl", redirectUrl, pathname);
    if (redirectUrl) { 
      return NextResponse.redirect(new URL(redirectUrl, origin).toString());
    }
  
    return NextResponse.next();
}
