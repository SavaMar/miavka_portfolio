import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales: ["en", "ua", "de"],

  // Used when no locale matches
  defaultLocale: "en",

  // Domains can be used to configure different locales for different domains
  // domains: [
  //   {
  //     domain: 'example.com',
  //     defaultLocale: 'en'
  //   }
  // ]
});

export const config = {
  // Match all pathnames except for
  // - API routes
  // - Static files (e.g. /favicon.ico, /images/*)
  // - _next internal routes
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
