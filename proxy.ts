import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import path from 'path';
 
// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {
    
    const url = request.nextUrl;
    const host = (request.headers.get('host')??"").toLowerCase();
    const pathname = url.pathname;
    console.log("Host= ",host);
    console.log("URL= ",url);
    console.log("Pathname= ",pathname);

    const AdminHost = host.includes("admin.job-board");
    const UserHost = host.startsWith("job-board")
    if(AdminHost && !pathname.includes("/dashboard"))
        return NextResponse.redirect(new URL('/dashboard', request.url))
    if (UserHost && pathname.includes("dashboard"))
        return NextResponse.redirect(new URL('/', request.url))

    return NextResponse.next();

}
 
// Alternatively, you can use a default export:
// export default function proxy(request: NextRequest) { ... }
 
export const config = {
  matcher: [
    // Exclude API routes, static files, image optimizations, and .png files
    '/((?!api/|_next/static|_next/image|.*\\.png$|sw\\.js|favicon\\.ico).*)',
],
}