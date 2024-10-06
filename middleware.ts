/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextResponse } from "next/server";
import { headers } from "next/headers";
import geoip from "geoip-lite";

function getIPAddress() {
  const FALLBACK_IP_ADDRESS = "0.0.0.0";
  const forwardedFor = headers().get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0] ?? FALLBACK_IP_ADDRESS;
  }

  return headers().get("x-real-ip") ?? FALLBACK_IP_ADDRESS;
}

export async function middleware(_req: Request) {
  if (!process.env.IPSTACK_API_KEY) {
    return NextResponse.next();
  }

  const ip = getIPAddress();

  // Temporarily blocking traffic from Russia since I have too many requests from there.
  let geo = geoip.lookup(ip);
  let country = geo?.country;
  console.log(country);
  if (country === "RU") {
    return new NextResponse("Access Denied", { status: 403 });
  }

  // Allow the request to proceed
  return NextResponse.next();
}

// Optionally, specify paths to apply the middleware
export const config = {
  matcher: "/:path*", // Apply to all routes
};
