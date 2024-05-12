import { NextResponse } from "next/server";


    // global middleware

// export default function middleware(request){

//     if(request.nextUrl.pathname!="/Login"){
//         return NextResponse.redirect(new URL("/Login", request.url));
//     }
// }


    // single page middleware

    // export default function middleware(request){

    //         return NextResponse.redirect(new URL("/Login", request.url));
    // }
    
    // export const config ={
    //     matcher : "/Study/:path*"
    // }


    
    // 2 page middleware

    export default function middleware(request){

        return NextResponse.redirect(new URL("/Login", request.url));
}

export const config ={
    matcher : ["/Study/:path*","/Student/:path*"]
}