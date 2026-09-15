"use client";

import Link from "next/link";
import Image from "next/image";
import {
  useState,
  useMemo,
  useEffect,
  useLayoutEffect,
  useRef,
  useCallback,
} from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import ArrowIcon from "../ui/ArrowIcon";
import { formatBlogDate } from "../../lib/blog-posts";
import type { BlogPost } from "../../lib/blog-posts";
import { useLanguage } from "../../i18n/LanguageProvider";
import { localizedHref } from "../../i18n/locale-href";
import CTA from "../sections/CTA";
import { lenisScrollTo } from "../LenisProvider";

const ITEMS_PER_PAGE = 9;
// Matches the sticky navbar's h-[74px] (see app/components/Navbar.tsx) so the
// filter bar doesn't land underneath it when we scroll to it.
const NAVBAR_HEIGHT = 74;

const CATEGORY_STYLES: Record<string, { color: string; bg: string }> = {
  "Business Growth": { color: "#4f1ba8", bg: "#e8defa" },
  "Contractor Websites": { color: "#6b2cc9", bg: "#f2eefc" },
  "Conversion Optimization": { color: "#c92668", bg: "#fce8f3" },
  "Digital Strategy": { color: "#1e5a8e", bg: "#e3f2fd" },
  "Google Business Profile": { color: "#ea8400", bg: "#fef3e6" },
  "Local Marketing": { color: "#7c3aed", bg: "#f3e8ff" },
  "Local SEO": { color: "#059669", bg: "#d1fae5" },
  "Online Visibility": { color: "#dc2626", bg: "#fee2e2" },
  "Professional Websites": { color: "#0891b2", bg: "#cffafe" },
  Websites: { color: "#2e7d4f", bg: "#d8efdf" },
  "Booking Systems": { color: "#b45309", bg: "#fef3c7" },
  "Case Studies": { color: "#0f766e", bg: "#ccfbf1" },
  Blog: { color: "#6b2cc9", bg: "#f2eefc" },
};

function getCategoryStyle(category: string) {
  return CATEGORY_STYLES[category] ?? { color: "#6b2cc9", bg: "#f2eefc" };
}

function CategoryBadge({ category }: { category: string }) {
  const { color, bg } = getCategoryStyle(category);
  return (
    <div
      className="rounded-[6px] px-[21px] py-[6px] text-[10.5px] font-bold tracking-[1.26px] uppercase inline-flex items-center gap-[11px] self-start"
      style={{ backgroundColor: bg, color }}
    >
      <div
        className="w-[5px] h-[5px] rounded-[2.5px] opacity-65"
        style={{ backgroundColor: color }}
      />
      {category}
    </div>
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

function FeaturedPost({ post }: { post: BlogPost }) {
  const { locale } = useLanguage();
  const ui = BLOG_UI[locale] ?? BLOG_UI.en;
  const primaryCat = getPrimaryCategory(post);
  const { color, bg } = getCategoryStyle(primaryCat);
  const initials = post.authorName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
  return (
    <div className="md:max-w-[1400px] md:mx-auto fix">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white w-full lg:p-10 p-3.5 rounded-[18px] lg:rounded-[22px] border border-[#ece8f5] shadow-[0px_10px_40px_-28px_rgba(42,21,104,0.3)] grid lg:grid-cols-[1.05fr_1fr] gap-[20px] 2xl:gap-[48px]"
      >
        <div
          className="rounded-[14px] lg:rounded-[16px] overflow-hidden min-h-[220px] lg:min-h-[422px] relative"
          style={{ backgroundColor: bg }}
        >
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center py-[12px] lg:py-[24px] pr-[6px] lg:pr-[24px]">
          <div className="flex flex-wrap items-center gap-[10px] mb-[10px]">
            <div
              className="rounded-[6px] px-[21px] py-[6px] text-[10.5px] font-bold tracking-[1.26px] uppercase flex items-center gap-[11px]"
              style={{ backgroundColor: bg, color }}
            >
              <div
                className="w-[5px] h-[5px] rounded-[2.5px] opacity-65"
                style={{ backgroundColor: color }}
              />
              {primaryCat}
            </div>
            <div className="text-[11px] font-bold text-[#9a97ab] tracking-[1.54px] uppercase">
              {ui.featuredLabel} ·{" "}
              {post.readTime
                .replace(" read", "")
                .replace(" lezen", "")
                .replace(" min", "")}{" "}
              {ui.featuredLabel}
            </div>
          </div>
          <h2 className="text-[22px] sm:text-[28px] 2xl:text-[38px] font-extrabold tracking-[-0.5px] 2xl:tracking-[-0.76px] leading-[1.15] 2xl:leading-[41px] mb-[14px] 2xl:mb-[16px] text-[#0d0b1f]">
            {post.title}
          </h2>
          <p className=" line-clamp-3 text-[14px] lg:text-[16px] text-[#6b6880] leading-[22px] lg:leading-[25.6px] mb-[20px] lg:mb-[33px]">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-[14px] mb-[18px]">
            <div className="w-[40px] h-[40px] bg-[#6b2cc9] rounded-full flex items-center justify-center text-white font-bold text-[13px] border-2 border-white shadow-[0px_0px_0px_1px_#e3dff0]">
              {initials}
            </div>
            <div>
              <div className="text-[13px] font-semibold text-[#0d0b1f]">
                {post.authorName}
              </div>
              <div className="text-[13px] text-[#9a97ab]">
                {formatBlogDate(post.publishedAt)}
              </div>
            </div>
          </div>
          <Link
            href={localizedHref(`/blog/${post.slug}`, locale)}
            className="btn btn--primary btn--md self-start shadow-[0px_6px_18px_-8px_rgba(107,44,201,0.6)]"
          >
            <span className="btn__label">{ui.readArticle}</span>
            <ArrowIcon direction="up-right" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

function PostCard({ post, index }: { post: BlogPost; index: number }) {
  const { locale } = useLanguage();
  const ui = BLOG_UI[locale] ?? BLOG_UI.en;
  const primaryCat = getPrimaryCategory(post);
  const { bg } = getCategoryStyle(primaryCat);
  return (
    <Link href={localizedHref(`/blog/${post.slug}`, locale)}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: index * 0.1 }}
        whileHover={{ y: -8 }}
        className="bg-white rounded-[18px] border border-[#ece8f5] overflow-hidden flex flex-col h-full cursor-pointer"
      >
        <div
          className="h-[180px] lg:h-[241px] relative border-b border-[#ece8f5]"
          style={{ backgroundColor: bg }}
        >
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="p-[22px] flex flex-col flex-1">
          <CategoryBadge category={primaryCat} />
          <h3 className="mt-[10px] text-[18px] font-bold tracking-[-0.09px] leading-[23.4px] text-[#0d0b1f] mb-[10px] line-clamp-3">
            {post.title}
          </h3>
          <p className="text-[14px] text-[#6b6880] leading-[21.7px] mb-auto line-clamp-2">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between pt-[14px] mt-[14px] border-t border-[#ece8f5]">
            <div className="flex items-center gap-[10px] text-[12px] text-[#9a97ab]">
              <span>{formatBlogDate(post.publishedAt)}</span>
              <div className="w-[3px] h-[3px] rounded-full bg-[#9a97ab] opacity-60" />
              <span>{post.readTime}</span>
            </div>
            <span className="text-[#6b2cc9] font-semibold text-[13px] flex items-center gap-[6px]">
              {ui.read} <ArrowRight size={14} strokeWidth={2.25} aria-hidden />
            </span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

const BLOG_UI = {
  en: {
    eyebrow: "INSIGHTS & GUIDES",
    heroFrom: "From the",
    heroBlog: "blog.",
    heroDesc:
      "Practical guides on growing a service business online — bookings, websites, and enquiries written for the trade. No fluff, no filler.",
    industries: "Industries",
    searchPlaceholder: "Search articles…",
    featuredLabel: "FEATURED",

    latestPosts: "Latest posts",
    showing: (a: number, b: number, total: number) =>
      `Showing ${a}–${b} of ${total} articles`,
    readArticle: "Read the article",
    read: "Read",
    ctaHeading: "Ready to get organised?",
    ctaBody:
      "Start capturing every enquiry and booking more jobs with Growth Rocket.",
    ctaButton: "Book your 14-day trial",
  },
  nl: {
    eyebrow: "INZICHTEN & GIDSEN",
    heroFrom: "Vanuit de",
    heroBlog: "blog",
    heroDesc:
      "Praktische gidsen over het online laten groeien van een servicebedrijf — van boekingen en websites tot aanvragen, speciaal geschreven voor vakbedrijven. Geen onnodige praatjes, gewoon duidelijke informatie.",
    industries: "Sectoren",
    searchPlaceholder: "Artikelen zoeken…",
    featuredLabel: "UITGELICHT",
    allArticles: "ALLE ARTIKELEN",
    latestPosts: "Nieuwste berichten",
    showing: (a: number, b: number, total: number) =>
      `${a}–${b} van ${total} artikelen`,
    readArticle: "Lees het artikel",
    read: "Lezen",
    ctaHeading: "Klaar om te beginnen?",
    ctaBody:
      "Mis geen enkele aanvraag meer en boek meer opdrachten met Growth Rocket.",
    ctaButton: "Start je 14-daagse proef",
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

  function openLeadForm() {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new CustomEvent("open-lead-form"));
    }
  }

  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(90deg, rgb(242, 238, 252) 0%, rgb(242, 238, 252) 100%)",
        // borderBottom: "1px solid #ece8f5",
      }}
    >
      {/* Hero */}
      <div
        className="relative pt-[40px] lg:pt-[77px] pb-[32px] lg:pb-[45px] fix"
        style={{
          background:
            "linear-gradient(90deg, rgb(242, 238, 252) 0%, rgb(242, 238, 252) 100%)",
          // borderBottom: "1px solid #ece8f5",
        }}
      >
        <div className="">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-[11px] font-bold text-[#6b2cc9] tracking-[1.98px] uppercase mb-[15.3px]">
              {ui.eyebrow}
            </div>
            <h1 className="flex gap-[10px] lg:gap-[14px] items-start mb-[15.3px] flex-wrap text-[30px] sm:text-[40px] lg:text-[56px] font-bold tracking-[-1px] lg:tracking-[-2px] leading-tight text-[#0a0516]">
              <span>{ui.heroFrom}</span>
              <span
                style={{
                  background: "linear-gradient(to right, #5b219f, #922698)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {ui.heroBlog}
              </span>
            </h1>
            <div className="text-[15px] lg:text-[17px] text-[#6b6880] leading-[24px] lg:leading-[26.35px] max-w-[620px]">
              {ui.heroDesc}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Featured */}
      {featuredPost && !debouncedSearch && (
        <div
          className="plcont perspective-origin-center  pb-[28px] lg:pb-[40px]"
          style={{
            background:
              "linear-gradient(90deg, rgb(242, 238, 252) 0%, rgb(242, 238, 252) 100%)",
          }}
        >
          <FeaturedPost post={featuredPost} />
        </div>
      )}

      {/* Filter Bar */}
      <div
        ref={filterBarRef}
        className="py-[18px] lg:py-5 lg:h-fit flex items-center justify-center"
        style={{
          background:
            "linear-gradient(90deg, rgb(91, 33, 159) 0%, rgb(146, 38, 152) 100%)",
          borderBottom: "1px solid #ece8f5",
        }}
      >
        <div className="w-full fix flex flex-wrap items-center justify-between gap-3 lg:gap-4">
          <div className="w-full lg:w-auto flex flex-wrap items-center gap-[8px] lg:gap-[10px]">
            {/* Dropdown */}
            <div className="relative w-full lg:w-auto">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="relative overflow-hidden w-full lg:w-[220px] bg-black text-white rounded-[999px] px-[19px] py-[11px] flex items-center gap-[8px] font-semibold text-[13px] hover:bg-gray-900 transition-colors"
              >
                <span
                  className="flex-1 min-w-0 overflow-hidden whitespace-nowrap text-left"
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
                  className={`w-[11px] h-[6.5px] flex-shrink-0 transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}
                  fill="none"
                  viewBox="0 0 11.7071 6.85355"
                >
                  <path
                    d="M0.353553 0.353553L5.85355 5.85355L11.3536 0.353553"
                    stroke="white"
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
                    className="absolute top-full mt-2 left-0 bg-white rounded-lg shadow-lg border border-[#e3dff0] py-2 min-w-[280px] z-50"
                  >
                    {dropdownCategories.map(({ name }) => (
                      <button
                        key={name}
                        onClick={() => handleCategoryClick(name)}
                        className={`w-full flex items-center justify-between text-left px-4 py-2.5 hover:bg-gray-50 transition-colors text-[14px] border-b border-[#ece8f5] last:border-b-0 ${selectedCategory === name ? "bg-[#f2eefc] text-[#6b2cc9] font-semibold" : "text-[#6b6880]"}`}
                      >
                        {name}
                        {selectedCategory === name && (
                          <svg
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
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
            {allAcfCategories.slice(0, 4).map((cat) => (
              <motion.button
                key={cat.name}
                onClick={() => handleTopPillClick(cat.name)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`hidden lg:flex rounded-[999px] px-[19px] py-[7px] items-center gap-[8px] border font-semibold text-[13px] transition-all ${selectedCategory === cat.name ? "bg-[#f2eefc] border-[#6b2cc9]" : "bg-white border-[#e3dff0]"}`}
              >
                <span
                  className={
                    selectedCategory === cat.name
                      ? "text-[#6b2cc9]"
                      : "text-[#1a1530]"
                  }
                >
                  {cat.name}
                </span>
                <span
                  className={`text-[11px] font-medium ${selectedCategory === cat.name ? "text-[#6b2cc9]" : "text-[#9a97ab]"}`}
                >
                  · {cat.count}
                </span>
              </motion.button>
            ))}
          </div>

          {/* Search — input updates instantly, filtering is debounced */}
          <div className="bg-white rounded-[999px] px-[15px] py-[10px] lg:py-[11px] flex items-center gap-[10px] border border-[#e3dff0] w-full lg:w-auto lg:min-w-[260px]">
            <svg className="w-[16px] h-[16px]" fill="none" viewBox="0 0 16 16">
              <path
                d="M7.33333 12C9.91066 12 12 9.91066 12 7.33333C12 4.756 9.91066 2.66667 7.33333 2.66667C4.756 2.66667 2.66667 4.756 2.66667 7.33333C2.66667 9.91066 4.756 12 7.33333 12Z"
                stroke="#6B6880"
                strokeWidth="1.2"
              />
              <path
                d="M13.3333 13.3333L11.3333 11.3333"
                stroke="#6B6880"
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
              className="flex-1 outline-none text-[14px] text-[#1a1530] placeholder-[#9a97ab]"
            />
          </div>
        </div>
      </div>

      {/* Latest Posts */}
      <div className="plcont perspective-origin-center mb-[48px] lg:mb-[80px] mt-[28px] lg:mt-[40px]">
        <div className="md:max-w-[1400px] md:mx-auto fix">
          <div className="flex flex-wrap items-end justify-between gap-3 mb-[10px] lg:mb-[28px]">
            <div>
              <div className="text-[11px] font-bold text-[#6b2cc9] tracking-[1.98px] uppercase mb-[6.75px]">
                {ui.allArticles}
              </div>
              <h2 className="text-[28px] font-extrabold tracking-[-0.28px] leading-[43.4px] text-[#0d0b1f]">
                {ui.latestPosts}
              </h2>
            </div>
            <div className="text-[13px] text-[#6b6880]">
              {ui.showing(
                startIndex + 1,
                Math.min(startIndex + ITEMS_PER_PAGE, regularPosts.length),
                regularPosts.length,
              )}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={`${currentPage}-${selectedCategory}-${debouncedSearch}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[18px] lg:gap-[24px] mb-[40px] lg:mb-[60px]"
            >
              {currentPosts.map((post, i) => (
                <PostCard key={post.slug} post={post} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Pagination */}
          {totalPages > 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap items-center justify-center gap-[6px] lg:gap-[8px]"
            >
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                aria-label="Previous page"
                className="w-[40px] h-[40px] rounded-full bg-white border border-[#e3dff0] flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft size={16} strokeWidth={2.25} aria-hidden />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                (page) => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`w-[40px] h-[40px] rounded-full flex items-center justify-center font-semibold text-[14px] transition-all ${currentPage === page ? "bg-[#6b2cc9] text-white" : "bg-white border border-[#e3dff0] text-[#1a1530] hover:bg-gray-50"}`}
                  >
                    {page}
                  </button>
                ),
              )}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                aria-label="Next page"
                className="w-[40px] h-[40px] rounded-full bg-white border border-[#e3dff0] flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-50 transition-colors"
              >
                <ChevronRight size={16} strokeWidth={2.25} aria-hidden />
              </button>
            </motion.div>
          )}
        </div>
      </div>

      {/* Footer CTA */}
      {/* <div
        className="py-[48px] lg:py-[60px] px-4 sm:px-6 lg:px-[100px] text-center"
        style={{ background: "linear-gradient(to right, #5b219f, #922698)" }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-[600px] mx-auto"
        >
          <h2 className="text-white text-[26px] sm:text-[32px] lg:text-[42px] font-extrabold mb-[16px] lg:mb-[20px]">
            {ui.ctaHeading}
          </h2>
          <p className="text-white/90 text-[14px] lg:text-[16px] mb-[24px] lg:mb-[30px]">
            {ui.ctaBody}
          </p>
          <button
            type="button"
            onClick={() =>
              window.dispatchEvent(new CustomEvent("open-lead-form"))
            }
            className="btn btn--secondary btn--lg"
          >
            <span className="btn__label">{ui.ctaButton}</span>
            <ArrowIcon direction="up-right" />
          </button>
        </motion.div>
      </div> */}
      <CTA onStartClick={openLeadForm} />
    </div>
  );
}
