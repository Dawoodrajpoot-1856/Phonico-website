// proxy.ts (project root ya src/ ke andar)
export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/checkout", "/dashboard/:path*"],
};
