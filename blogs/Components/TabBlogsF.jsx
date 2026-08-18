"use client";
import { useState, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation"; // ✅ import this
import { motion, AnimatePresence } from "framer-motion";
import { useTab } from "../../context/TabContext"; // <-- Add this line
import { PRESS_RELEASES } from "./Press";
import ContentCard from "./ContentCard";

const TabBlogs = ({ blogs, loadingOverride = false }) => {
  const { tab } = useTab(); // <-- context here
  const searchParams = useSearchParams(); // ✅
  //   console.log(blogs);
  const tabs = [
    { title: "All", id: null },
    { title: "Blogs", id: 6 },
    { title: "News", id: 7 },
    { title: "Press Release", id: "press" },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [newsBlogs, setNewsBlogs] = useState([]);
  const [loadingNews, setLoadingNews] = useState(false);
  const tabButtonRefs = useRef([]);

  const postsPerPage = 6;
  const activeTabId = tabs[activeIndex].id;
  const isPress = activeTabId === "press";
  const isNews = activeTabId === 7;
  const isBlogsTab = activeTabId === 6 || activeTabId === null;

  useEffect(() => {
    const urlTab = searchParams.get("tab");

    if (tab === "news" || urlTab === "news") {
      setActiveIndex(2);
      setLoadingNews(true); // ✅ Trigger loading early
    } else if (tab === "press" || urlTab === "press") {
      setActiveIndex(3);
    } else if (tab === "blogs" || urlTab === "blogs") {
      setActiveIndex(1);
    } else {
      setActiveIndex(0);
    }

    setCurrentPage(1); // ✅ Reset pagination
  }, [tab, searchParams]);

  useEffect(() => {
    let intervalId;

    const fetchNews = async () => {
      try {
        const res = await fetch(
          `https://wordpress-819107-5295407.cloudwaysapps.com/wp-json/wp/v2/posts?categories=7&per_page=100&_embed`,
        );
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setNewsBlogs(data);
        // console.log(data._embedded["wp:featuredmedia"][0].source_url);
        console.log(data);
        setLoadingNews(false);
        clearInterval(intervalId);
      } catch (err) {
        console.warn("News fetch failed, will retry..");
        setLoadingNews(false);
      }
    };

    if (isNews) {
      setLoadingNews(true); // ✅ Always set loading
      fetchNews();
      intervalId = setInterval(fetchNews, 10000);
    }

    return () => clearInterval(intervalId);
  }, [isNews]);

  useEffect(() => {
    const activeTabButton = tabButtonRefs.current[activeIndex];
    if (!activeTabButton) return;

    activeTabButton.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [activeIndex]);

  const filteredBlogs =
    activeTabId === null
      ? blogs
          .map((blog) => {
            const isNews = blog.categories.includes(7);
            const isBlog = blog.categories.includes(6);
            return isNews
              ? { ...blog, _priority: 7 }
              : isBlog
                ? { ...blog, _priority: 6 }
                : null;
          })
          .filter(Boolean)
      : activeTabId === 6
        ? blogs.filter((b) => b.categories.includes(6))
        : [];

  const itemsToDisplay = isPress
    ? PRESS_RELEASES
    : isNews
      ? newsBlogs
      : filteredBlogs;

  const totalPages = Math.ceil(itemsToDisplay.length / postsPerPage);
  const startIndex = (currentPage - 1) * postsPerPage;
  const currentItems = itemsToDisplay.slice(
    startIndex,
    startIndex + postsPerPage,
  );

  const showLoading =
    loadingOverride ||
    (isNews && loadingNews) ||
    (isBlogsTab && blogs.length === 0);

  return (
    <>
      {/* Tabs */}
      <div id="tabsection" className="w-full bg-[#092241]">
        <div className="fix12 pt-[50px] flex flex-col gap-[30px] lg:gap-[60px] pb-[30px]">
          <h2 className="fpt-600 md:text-[44px] sm:text-[32px] text-[24px] text-white">
            Other Blogs
          </h2>
          <div>
            <div className="flex overflow-x-auto scrollbar-hide items-center border-b-2 border-[#BFBFBF]">
              {tabs.map((tab, i) => (
                <button
                  key={i}
                  ref={(el) => {
                    tabButtonRefs.current[i] = el;
                  }}
                  className={`flex-1 lg:min-w-0 fsans-600 text-[20px] leading-[111%] min-w-[200px] text-center text-sm font-medium transition-colors pb-[15px] whitespace-nowrap ${
                    activeIndex === i
                      ? "text-[#F7E327] border-b-2 border-[#F7E327]"
                      : "text-white hover:text-gray-300"
                  }`}
                  onClick={() => {
                    setActiveIndex(i);
                    setCurrentPage(1);
                  }}
                >
                  {tab.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={
            activeIndex +
            "-" +
            currentItems.map((it) => it.id).join(",") +
            "-" +
            showLoading
          }
          // className="fix12 py-[70px] grid grid-cols-1 lg:grid-cols-2 md:gap-y-[65px] gap-y-10"
          className="fix12 py-[35px] lg:py-[70px] flex flex-col lg:flex-row flex-wrap 2xl:gap-[45px] gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.7, 0, 0.4, 1] }}
        >
          {showLoading ? (
            <p className="text-black fsans-600 md:text-[32px] text-[24px] col-span-2 text-center w-full">
              {isNews ? "Loading News..." : "Loading..."}
            </p>
          ) : currentItems.length > 0 ? (
            currentItems.map((item) =>
              isPress ? (
                <ContentCard key={item.id} item={item} type="press" />
              ) : (
                <ContentCard
                  key={item.id}
                  item={item}
                  activeTabId={activeTabId ?? item._priority}
                />
              ),
            )
          ) : (
            <p className="text-white text-center col-span-2">
              No content available.
            </p>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Pagination */}
      {!showLoading && totalPages > 1 && currentItems.length > 0 && (
        <div className="pb-[70px]">
          <div className="flex justify-center gap-2">
            {Array.from({ length: totalPages }).map((_, idx) => (
              <button
                key={idx}
                className={`px-4 py-2 border rounded ${
                  currentPage === idx + 1
                    ? "bg-[#F7E327] text-black"
                    : "bg-gray-200"
                }`}
                onClick={() => setCurrentPage(idx + 1)}
              >
                {idx + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default TabBlogs;
