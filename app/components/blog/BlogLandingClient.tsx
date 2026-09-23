"use client";

/**
 * /blog — repainted in the /home2 design language.
 *
 * Nothing about how the page works has changed: the same debounced search, the
 * same ACF-category filter, the same nine-per-page slice, the same Lenis
 * scroll corrections. Only the surface is new, and it is the one /home2 and
 * /pricing already use:
 *
 * - `HomeShell` supplies the macro-layout — full-width rounded 13px folds over
 *   white, a uniform 12px gap, and the top padding that clears the fixed
 *   Navbar. Each fold then takes its horizontal spacing from the shared `.fix`
 *   rail, so the hero, the featured card and the grid sit on one set of
 *   margins with the rest of the site.
 * - Folds alternate the way they do on /home2: deep `#0a0516` masthead, lime
 *   `#e4fa65` featured card, white article grid. The closing contact fold and
 *   footer come from the layout's `SiteFooter`, which is why the old gradient
 *   `<CTA>` that used to sit at the bottom of this page is gone — it was a
 *   second call to action immediately above the one `Footer2` already brings.
 * - Bricolage at home2's weight/tracking for display type, Inter for copy.
 *   The `blog-theme` class on the root repoints the old violet ramp at the
 *   home2 palette for everything further down the tree (see globals.css).
 * - The twelve-colour category map is gone. /home2 carries one accent, so a
 *   category now reads as a violet chip on light folds and a lime chip on dark
 *   ones; the names themselves are unchanged, and cover images sit on one
 *   shared `#ece7f6` media tint instead of twelve different ones.
 */

import Link from "next/link";
import Image from "next/image";
import {
  useState,
  useMemo,
  useEffect,
  useLayoutEffect,
  useRef,
} from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HomeShell from "../sections/home2/HomeShell";
import ArrowIcon from "../ui/ArrowIcon";
import { formatBlogDate } from "../../lib/blog-posts";
import type { BlogPost } from "../../lib/blog-posts";
import { useLanguage } from "../../i18n/LanguageProvider";
import { localizedHref } from "../../i18n/locale-href";
import { lenisScrollTo } from "../LenisProvider";

const ITEMS_PER_PAGE = 9;
// Matches the sticky navbar's h-[74px] (see app/components/Navbar.tsx) so the
// filter bar doesn't land underneath it when we scroll to it.
const NAVBAR_HEIGHT = 74;

/** Shared tint behind every cover image while it loads — see --color-blog-media. */
const MEDIA_TINT = "#ece7f6";

/**
 * Category chip. `tone` picks the fold it is sitting on: `lime` for the deep
 * fold, `dark` for the lime featured card, `violet` for the white grid.
 */
function CategoryBadge({
  category,
  tone = "violet",
}: {
  category: string;
  tone?: "violet" | "dark" | "lime";
}) {
  const skin =
    tone === "dark"
      ? "bg-[#0a0516] text-[#e4fa65]"
      : tone === "lime"
        ? "bg-[#e4fa65] text-[#0a0516]"
        : "bg-[#ede8fb] text-[#5b2dce]";
  return (
    <span
      className={`inline-flex w-max items-center gap-[7px] rounded-full px-[12px] py-[6px] font-sans text-[11px] font-bold tracking-[0.06em] uppercase ${skin}`}
    >
      <i className="h-[5px] w-[5px] rounded-full bg-current opacity-70" />
      {category}
    </span>
  );
}

/** Return the primary display category for a post (first ACF category, or WP fallback) */
function getPrimaryCategory(post: BlogPost): string {
  return post.acfCategories.length > 0 ? post.acfCategories[0] : post.category;
}

/** Custom hook for debounced value */
function useDebouncedValue<T>(value: T, delay: number): T {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debounced;
}

/**
 * The featured fold. Lime is /home2's "stop and read this" surface (Solution,
 * ContactCta), which is exactly what the top post is doing here.
 */
function FeaturedPost({ post }: { post: BlogPost }) {
  const { locale } = useLanguage();
  const ui = BLOG_UI[locale] ?? BLOG_UI.en;
  const primaryCat = getPrimaryCategory(post);
  const initials = post.authorName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <section className="overflow-hidden rounded-[13px] bg-[#e4fa65] py-[40px] text-[#0a0516] md:py-[52px]">
      <div className="fix">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid gap-[24px] lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-[48px]"
        >
          <div
            className="relative min-h-[220px] overflow-hidden rounded-[13px] lg:min-h-[400px]"
            style={{ backgroundColor: MEDIA_TINT }}
          >
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="flex flex-col items-start">
            <div className="flex flex-wrap items-center gap-[10px]">
              <CategoryBadge category={primaryCat} tone="dark" />
              <span className="font-sans text-[11px] font-bold tracking-[0.12em] text-[#657221] uppercase">
                {ui.featuredLabel}
              </span>
            </div>

            <h2 className="mt-[16px] m-0 font-bricolage text-[28px] font-semibold leading-[1.08] tracking-[-0.045em] sm:text-[34px] lg:text-[clamp(34px,3.2vw,46px)]">
              {post.title}
            </h2>

            <p className="mt-[14px] line-clamp-3 font-sans text-[15px] leading-[1.65] text-[#4b5220] lg:text-[16px]">
              {post.excerpt}
            </p>

            <div className="mt-[22px] flex items-center gap-[12px] border-t border-[#b8ce50] pt-[20px]">
              <span className="grid h-[40px] w-[40px] place-items-center rounded-full bg-[#0a0516] font-sans text-[13px] font-bold text-[#e4fa65]">
                {initials}
              </span>
              <span className="font-sans text-[13px] leading-[1.45]">
                <span className="block font-semibold">{post.authorName}</span>
                <span className="block text-[#657221]">
                  {formatBlogDate(post.publishedAt)} · {post.readTime}
                </span>
              </span>
            </div>

            <Link
              href={localizedHref(`/blog/${post.slug}`, locale)}
              className="arrow-cta mt-[24px] inline-flex min-h-[45px] items-center gap-[8px] rounded-full bg-[#0a0516] px-[22px] py-[10px] font-sans text-[14px] font-semibold text-[#e4fa65] hover:bg-[#151021]"
            >
              {ui.readArticle}
              <ArrowIcon direction="up-right" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/**
 * Grid card. The lift-and-glow is /home2's light-fold card behaviour (WhyUs),
 * not the lime fill the dark folds use — the fill needs a dark card under it
 * to read as a flip.
 */
function PostCard({ post, index }: { post: BlogPost; index: number }) {
  const { locale } = useLanguage();
  const ui = BLOG_UI[locale] ?? BLOG_UI.en;
  const primaryCat = getPrimaryCategory(post);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
      className="h-full"
    >
      <Link
        href={localizedHref(`/blog/${post.slug}`, locale)}
        className="arrow-cta-host group flex h-full translate-y-0 flex-col overflow-hidden rounded-[13px] border border-[#ded8e7] bg-[#f5f3ff] transition-[background-color,border-color,translate,box-shadow] duration-380 ease-in-out hover:-translate-y-1 hover:border-[#c9bff0] hover:bg-[#ebe6ff] hover:shadow-[0_22px_46px_rgba(10,5,22,0.14)] hover:duration-300 hover:ease-[cubic-bezier(.22,1,.36,1)] motion-reduce:transition-[background-color,border-color] motion-reduce:hover:translate-y-0"
      >
        <div
          className="relative h-[180px] overflow-hidden lg:h-[218px]"
          style={{ backgroundColor: MEDIA_TINT }}
        >
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-1 flex-col gap-[12px] p-[22px]">
          <CategoryBadge category={primaryCat} />

          <h3 className="m-0 line-clamp-3 font-bricolage text-[20px] font-semibold leading-[1.2] tracking-[-0.03em] text-[#0a0516]">
            {post.title}
          </h3>

          <p className="m-0 line-clamp-2 font-sans text-[14px] leading-[1.6] text-[#625a70]">
            {post.excerpt}
          </p>

          <div className="mt-auto flex items-center justify-between gap-[10px] border-t border-[#ded8e7] pt-[14px]">
            <span className="flex items-center gap-[8px] font-sans text-[12px] text-[#8b8398]">
              <span>{formatBlogDate(post.publishedAt)}</span>
              <i className="h-[3px] w-[3px] rounded-full bg-current opacity-60" />
              <span>{post.readTime}</span>
            </span>
            <span className="arrow-cta inline-flex items-center gap-[6px] font-sans text-[13px] font-semibold text-[#5b2dce]">
              {ui.read}
              <ArrowIcon direction="right" size={14} />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

const BLOG_UI = {
  en: {
    eyebrow: "Insights & guides",
    heroFrom: "From the",
    heroBlog: "blog.",
    heroDesc:
      "Practical guides on growing a service business online — bookings, websites, and enquiries written for the trade. No fluff, no filler.",
    industries: "Industries",
    searchPlaceholder: "Search articles…",
    featuredLabel: "Featured",
    allArticles: "All articles",
    latestPosts: "Latest posts",
    showing: (a: number, b: number, total: number) =>
      `Showing ${a}–${b} of ${total} articles`,
    readArticle: "Read the article",
    read: "Read",
    empty: "No articles match that search yet.",
  },
  nl: {
    eyebrow: "Inzichten & gidsen",
    heroFrom: "Vanuit de",
    heroBlog: "blog.",
    heroDesc:
      "Praktische gidsen over het online laten groeien van een servicebedrijf — van boekingen en websites tot aanvragen, speciaal geschreven voor vakbedrijven. Geen onnodige praatjes, gewoon duidelijke informatie.",
    industries: "Sectoren",
    searchPlaceholder: "Artikelen zoeken…",
    featuredLabel: "Uitgelicht",
    allArticles: "Alle artikelen",
    latestPosts: "Nieuwste berichten",
    showing: (a: number, b: number, total: number) =>
      `${a}–${b} van ${total} artikelen`,
    readArticle: "Lees het artikel",
    read: "Lezen",
    empty: "Geen artikelen gevonden voor deze zoekopdracht.",
  },
};

export default function BlogLandingClient({ posts }: { posts: BlogPost[] }) {
  const { locale } = useLanguage();
  const ui = BLOG_UI[locale] ?? BLOG_UI.en;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [searchInput, setSearchInput] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const filterBarRef = useRef<HTMLDivElement>(null);
  const filterBarTopRef = useRef<number | null>(null);

  // Debounce search query by 300ms
  const debouncedSearch = useDebouncedValue(searchInput, 300);

  // Build all unique categories across every blog post — ACF first, WP taxonomy as fallback
  const allAcfCategories = useMemo(() => {
    const map = new Map<string, number>();
    posts.forEach((p) => {
      const cats =
        p.acfCategories.length > 0
          ? p.acfCategories
          : p.category && p.category !== "Blog"
            ? [p.category]
            : [];
      cats.forEach((cat) => {
        map.set(cat, (map.get(cat) ?? 0) + 1);
      });
    });
    return Array.from(map.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([name, count]) => ({ name, count }));
  }, [posts]);

  const filteredPosts = useMemo(() => {
    return posts.filter((p) => {
      // Match ACF categories first; fall back to WP taxonomy category
      const postCats =
        p.acfCategories.length > 0 ? p.acfCategories : [p.category];
      const matchCat = !selectedCategory || postCats.includes(selectedCategory);
      const matchSearch =
        !debouncedSearch ||
        p.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(debouncedSearch.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [posts, selectedCategory, debouncedSearch]);

  const featuredPost = posts[0];
  const regularPosts = filteredPosts.filter(
    (p) => p.slug !== featuredPost?.slug,
  );
  const totalPages = Math.ceil(regularPosts.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentPosts = regularPosts.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  function handleCategoryClick(category: string) {
    // Remember where the filter bar sits on screen so we can cancel out any
    // layout shift caused by the featured card showing/hiding above it.
    if (filterBarRef.current) {
      filterBarTopRef.current =
        filterBarRef.current.getBoundingClientRect().top;
    }
    setSelectedCategory(category === selectedCategory ? null : category);
    setCurrentPage(1);
    setIsDropdownOpen(false);
  }

  useLayoutEffect(() => {
    if (filterBarTopRef.current === null || !filterBarRef.current) return;
    const newTop = filterBarRef.current.getBoundingClientRect().top;
    const delta = newTop - filterBarTopRef.current;
    if (delta !== 0) {
      // Instant, through Lenis so its internal scroll state stays in sync —
      // a raw window.scrollBy here gets overridden (snaps back) on Lenis's
      // next animation frame.
      lenisScrollTo(window.scrollY + delta, { immediate: true });
    }
    filterBarTopRef.current = null;
  }, [selectedCategory]);

  function handleTopPillClick(category: string) {
    handleCategoryClick(category);
    requestAnimationFrame(() => {
      lenisScrollTo(filterBarRef.current, { offset: -NAVBAR_HEIGHT });
    });
  }

  function handlePageChange(page: number) {
    setCurrentPage(page);
    requestAnimationFrame(() => {
      lenisScrollTo(filterBarRef.current, { offset: -NAVBAR_HEIGHT });
    });
  }

  // Dynamic dropdown categories from ACF fields
  const dropdownCategories = allAcfCategories;

  return (
    <main className="blog-theme relative min-h-screen">
      <HomeShell>
        {/* Masthead — the deep fold /pricing and /home2 open on. */}
        <section
          aria-labelledby="blog-hero-heading"
          className="overflow-hidden rounded-[13px] bg-[#0a0516] py-[48px] text-white md:py-[64px]"
        >
          <div className="fix">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="m-0 flex items-center gap-[10px] font-sans text-[11px] font-semibold tracking-[0.12em] text-[#e4fa65] uppercase">
                <i className="h-[7px] w-[7px] rounded-full bg-[#e4fa65]" />
                {ui.eyebrow}
              </p>

              <h1
                id="blog-hero-heading"
                className="m-0 mt-[18px] font-bricolage text-[clamp(38px,4.3vw,64px)] font-semibold leading-[1.04] tracking-[-0.055em] text-white"
              >
                {ui.heroFrom}{" "}
                <span className="text-[#e4fa65]">{ui.heroBlog}</span>
              </h1>

              <p className="mt-[18px] max-w-[620px] font-sans text-[clamp(15px,1.25vw,18px)] leading-[1.6] text-[#c9c2d4]">
                {ui.heroDesc}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Featured */}
        {featuredPost && !debouncedSearch && (
          <FeaturedPost post={featuredPost} />
        )}

        {/* Filters + grid. One white fold rather than the old full-bleed violet
            filter band, so the controls sit on the same rail as the cards they
            drive. */}
        <section className="rounded-[13px] bg-white py-[48px] text-[#0a0516] md:py-[64px]">
          <div className="fix">
            <div className="flex flex-wrap items-end justify-between gap-[14px]">
              <div>
                <p className="m-0 flex items-center gap-[10px] font-sans text-[11px] font-semibold tracking-[0.07em] text-[#5b2dce] uppercase">
                  <i className="h-[7px] w-[7px] rounded-full bg-[#e4fa65]" />
                  {ui.allArticles}
                </p>
                <h2 className="m-0 mt-[14px] font-bricolage text-[clamp(32px,3.4vw,48px)] font-semibold leading-[1.1] tracking-[-0.04em]">
                  {ui.latestPosts}
                </h2>
              </div>
              <p className="m-0 font-sans text-[13px] text-[#8b8398]">
                {ui.showing(
                  regularPosts.length === 0 ? 0 : startIndex + 1,
                  Math.min(startIndex + ITEMS_PER_PAGE, regularPosts.length),
                  regularPosts.length,
                )}
              </p>
            </div>

            {/* Filter bar */}
            <div
              ref={filterBarRef}
              className="mt-[26px] flex flex-wrap items-center justify-between gap-[12px] border-y border-[#ded8e7] py-[18px] md:gap-[16px]"
            >
              <div className="flex w-full flex-wrap items-center gap-[10px] lg:w-auto">
                {/* Dropdown */}
                <div className="relative w-full lg:w-auto">
                  <button
                    type="button"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="arrow-cta flex w-full items-center gap-[8px] overflow-hidden rounded-full bg-[#0a0516] px-[19px] py-[11px] font-sans text-[13px] font-semibold text-white hover:bg-[#151021] lg:w-[220px]"
                  >
                    <span
                      className="min-w-0 flex-1 overflow-hidden text-left whitespace-nowrap"
                      style={{
                        maskImage:
                          "linear-gradient(to right, black 75%, transparent 100%)",
                        WebkitMaskImage:
                          "linear-gradient(to right, black 75%, transparent 100%)",
                      }}
                    >
                      {selectedCategory ?? ui.industries}
                    </span>
                    <svg
                      className={`h-[6.5px] w-[11px] flex-shrink-0 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                      fill="none"
                      viewBox="0 0 11.7071 6.85355"
                      aria-hidden
                    >
                      <path
                        d="M0.353553 0.353553L5.85355 5.85355L11.3536 0.353553"
                        stroke="#e4fa65"
                        strokeWidth="1.2"
                      />
                    </svg>
                  </button>
                  <AnimatePresence>
                    {isDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 z-50 mt-2 min-w-[280px] overflow-hidden rounded-[13px] border border-[#ded8e7] bg-white py-2 shadow-[0_22px_46px_rgba(10,5,22,0.14)]"
                      >
                        {dropdownCategories.map(({ name }) => (
                          <button
                            key={name}
                            type="button"
                            onClick={() => handleCategoryClick(name)}
                            className={`flex w-full items-center justify-between border-b border-[#ded8e7] px-4 py-2.5 text-left font-sans text-[14px] transition-colors last:border-b-0 hover:bg-[#f5f3ff] ${selectedCategory === name ? "bg-[#f5f3ff] font-semibold text-[#5b2dce]" : "text-[#625a70]"}`}
                          >
                            {name}
                            {selectedCategory === name && (
                              <svg
                                width="10"
                                height="10"
                                viewBox="0 0 10 10"
                                fill="none"
                                aria-hidden
                              >
                                <path
                                  d="M1 1L9 9M9 1L1 9"
                                  stroke="currentColor"
                                  strokeWidth="1.4"
                                  strokeLinecap="round"
                                />
                              </svg>
                            )}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Top category pills — first 4 ACF categories */}
                {allAcfCategories.slice(0, 4).map((cat) => {
                  const active = selectedCategory === cat.name;
                  return (
                    <button
                      key={cat.name}
                      type="button"
                      onClick={() => handleTopPillClick(cat.name)}
                      className={`arrow-cta hidden items-center gap-[8px] rounded-full border px-[19px] py-[8px] font-sans text-[13px] font-semibold transition-colors lg:flex ${
                        active
                          ? "border-[#0a0516] bg-[#e4fa65] text-[#0a0516]"
                          : "border-[#ded8e7] bg-[#f5f3ff] text-[#0a0516] hover:bg-[#ebe6ff]"
                      }`}
                    >
                      <span>{cat.name}</span>
                      <span
                        className={`text-[11px] font-medium ${active ? "text-[#657221]" : "text-[#8b8398]"}`}
                      >
                        · {cat.count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Search — input updates instantly, filtering is debounced */}
              <div className="flex w-full items-center gap-[10px] rounded-full border border-[#ded8e7] bg-[#f5f3ff] px-[16px] py-[10px] lg:w-auto lg:min-w-[260px]">
                <svg
                  className="h-[16px] w-[16px] flex-none"
                  fill="none"
                  viewBox="0 0 16 16"
                  aria-hidden
                >
                  <path
                    d="M7.33333 12C9.91066 12 12 9.91066 12 7.33333C12 4.756 9.91066 2.66667 7.33333 2.66667C4.756 2.66667 2.66667 4.756 2.66667 7.33333C2.66667 9.91066 4.756 12 7.33333 12Z"
                    stroke="#5b2dce"
                    strokeWidth="1.2"
                  />
                  <path
                    d="M13.3333 13.3333L11.3333 11.3333"
                    stroke="#5b2dce"
                    strokeLinecap="round"
                    strokeWidth="1.2"
                  />
                </svg>
                <input
                  type="text"
                  placeholder={ui.searchPlaceholder}
                  value={searchInput}
                  onChange={(e) => {
                    setSearchInput(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="flex-1 bg-transparent font-sans text-[14px] text-[#0a0516] outline-none placeholder:text-[#8b8398]"
                />
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={`${currentPage}-${selectedCategory}-${debouncedSearch}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="mt-[28px] grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3 lg:gap-[22px]"
              >
                {currentPosts.map((post, i) => (
                  <PostCard key={post.slug} post={post} index={i} />
                ))}
              </motion.div>
            </AnimatePresence>

            {currentPosts.length === 0 && (
              <p className="mt-[40px] font-sans text-[15px] text-[#625a70]">
                {ui.empty}
              </p>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-[36px] flex flex-wrap items-center justify-center gap-[8px]"
              >
                <PageArrow
                  dir="prev"
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                />
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <button
                      key={page}
                      type="button"
                      onClick={() => handlePageChange(page)}
                      className={`grid h-[40px] w-[40px] cursor-pointer place-items-center rounded-full font-sans text-[14px] font-semibold transition-colors ${
                        currentPage === page
                          ? "bg-[#0a0516] text-[#e4fa65]"
                          : "border border-[#ded8e7] bg-[#f5f3ff] text-[#0a0516] hover:bg-[#ebe6ff]"
                      }`}
                    >
                      {page}
                    </button>
                  ),
                )}
                <PageArrow
                  dir="next"
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                />
              </motion.div>
            )}
          </div>
        </section>
      </HomeShell>
    </main>
  );
}

/** Pagination arrow — the circular control /home2's carousels use, light fold. */
function PageArrow({
  dir,
  disabled,
  onClick,
}: {
  dir: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={dir === "prev" ? "Previous page" : "Next page"}
      className="grid h-[40px] w-[40px] cursor-pointer place-items-center rounded-full border border-[#ded8e7] bg-[#f5f3ff] text-[#0a0516] transition-colors hover:bg-[#ebe6ff] disabled:pointer-events-none disabled:opacity-40"
    >
      {dir === "prev" ? (
        <ChevronLeft size={16} strokeWidth={2.25} aria-hidden />
      ) : (
        <ChevronRight size={16} strokeWidth={2.25} aria-hidden />
      )}
    </button>
  );
}
