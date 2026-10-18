import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function proxy(request: NextRequest) {
    
    const url = request.nextUrl;
    // const host = (request.headers.get('host')??"").toLowerCase();
    // const host = request.nextUrl.hostname.toLowerCase();
    const host = (request.headers.get("host") ?? "")
  .split(":")[0]
  .toLowerCase();

    const pathname = url.pathname;
    console.log("Host= ",host);
    console.log("URL= ",url);
    console.log("Pathname= ",pathname);

    const AdminHost = ["admin.localhost","dev-admin.localhost"].includes(host);
    const UserHost = ["localhost","dev.localhost"].includes(host);
    console.log("Admin",AdminHost);
    console.log("User= ",UserHost);

    if(AdminHost && !pathname.includes("/dashboard"))
        return NextResponse.redirect(new URL('/dashboard', request.url))
    if (UserHost && pathname.includes("/dashboard"))
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