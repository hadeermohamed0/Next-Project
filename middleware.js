import { NextResponse } from "next/server";
import * as jwt from "jsonwebtoken";

export function middleware(req) {
  if (req.nextUrl.pathname.includes("/dashboard")) {
    const auth = req.headers.get("Authorization").split(" ")[1];
    console.log({ auth });

    const tokenObject = jwt.decode(auth, "iti-portsaid");

    if (!auth) {
      return NextResponse.redirect(new URL("/sign-in", req.url));
    }

    if (tokenObject.role !== "admin") {
      return NextResponse.redirect(new URL("/", req.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  mather: ["/dashboard/:path*"],
};
