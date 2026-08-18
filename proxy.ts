import { NextResponse, type NextRequest } from "next/server";

const LOCALE_COOKIE = "NEXT_LOCALE";
const NL_PREFIX = "/nl";
const ONE_YEAR = 60 * 60 * 24 * 365;

function parseAcceptLanguage(header: string | null): "en" | "nl" | null {
  if (!header) return null;
  const ranked = header
    .split(",")
    .map((part) => {
      const [tag, qStr] = part.trim().split(";q=");
      return { tag: tag.toLowerCase(), q: qStr ? Number(qStr) : 1 };
    })
    .sort((a, b) => b.q - a.q);
  for (const { tag } of ranked) {
    if (tag.startsWith("nl")) return "nl";
    if (tag.startsWith("en")) return "en";
  }
  return null;
}

export function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;
  const startsWithNl =
    pathname === NL_PREFIX || pathname.startsWith(`${NL_PREFIX}/`);

  if (startsWithNl) {
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set("x-locale", "nl");
    requestHeaders.set("x-pathname", pathname);

    const response = NextResponse.next({
      request: { headers: requestHeaders },
    });
    response.cookies.set(LOCALE_COOKIE, "nl", {
      path: "/",
      maxAge: ONE_YEAR,
      sameSite: "lax",
    });
    return response;
  }

  const cookieLocale = request.cookies.get(LOCALE_COOKIE)?.value;
  const browserLocale = parseAcceptLanguage(
    request.headers.get("accept-language"),
  );

  // Only auto-redirect on first visit (no cookie). If user has a cookie they've
  // made an explicit choice via the toggle — never override it with a redirect.
  if (!cookieLocale && browserLocale === "nl") {
    const redirectUrl = request.nextUrl.clone();
    const nlSlugMap: Record<string, string> = {
      "/website-for-electricians": "/website-voor-elektriciens",
    };
    const mappedPath = nlSlugMap[pathname] ?? pathname;
    redirectUrl.pathname =
      `${NL_PREFIX}${mappedPath === "/" ? "" : mappedPath}` || NL_PREFIX;
    redirectUrl.search = search;
    return NextResponse.redirect(redirectUrl);
  }

  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-locale", "en");
  requestHeaders.set("x-pathname", pathname);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });
  if (cookieLocale !== "en") {
    response.cookies.set(LOCALE_COOKIE, "en", {
      path: "/",
      maxAge: ONE_YEAR,
      sameSite: "lax",
    });
  }
  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|figma|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
