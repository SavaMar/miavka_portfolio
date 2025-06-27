import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async ({ locale }) => {
  if (!locale) {
    locale = "en"; // Fallback to English if no locale is provided
  }

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
    locale,
    timeZone: "Europe/Zurich",
  };
});
