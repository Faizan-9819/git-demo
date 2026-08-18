export const PRESS_RELEASES = [
  {
    id: 1,
    title: "KSH INFRA to Invest ₹550 Cr. in Tamil Nadu Park",
    content: "KSH INFRA to Invest ₹550 Cr. in Tamil Nadu Park",
    image: "/press/press6.webp",
    href: "https://www.constructionworld.in/urban-infrastructure/warehouse-and-logistics/ksh-infra-to-invest-rs-5.5-billion-in-tamil-nadu-park/76359",
    newTab: true,
    date: "17 Jul 2025",
  },
  {
    id: 2,
    title:
      "KSH INFRA to invest ₹550 Cr. in second industrial park in Tamil Nadu",
    content:
      "KSH INFRA to invest ₹550 Cr. in second industrial park in Tamil Nadu",
    image: "/press/press4.png",
    href: "https://manufacturing.economictimes.indiatimes.com/news/industry/ksh-infra-to-invest-550-crore-in-second-industrial-park-in-tamil-nadu/122437140",
    newTab: true,
    date: "14 Jul 2025",
  },
  {
    id: 3,
    title:
      "KSH INFRA to invest ₹550 Cr. in second industrial & logistics park in Sriperumbudur",
    content:
      "KSH INFRA to invest ₹550 Cr. in second industrial & logistics park in Sriperumbudur",
    image: "/press/press5.webp",
    href: "https://www.thehindubusinessline.com/companies/ksh-infra-to-invest-550-cr-in-second-industrial-logistics-park-in-sriperumbudur/article69807276.ece",
    newTab: true,
    date: "13 Jul 2025",
  },
  {
    id: 4,
    title:
      "KSH INFRA ₹1000 Cr. Expansion in Tamil Nadu Industrial & Logistics Space",
    content:
      "KSH INFRA ₹1000 Cr. Expansion in Tamil Nadu Industrial & Logistics Space",
    image: "/press/press7.webp",
    href: "https://economictimes.indiatimes.com/industry/services/property-/-cstruction/ksh-infra-to-invest-over-rs-550-crore-in-60-acre-logistics-park-in-tamil-nadu/articleshow/122392746.cms?from=mdr",
    newTab: true,
    date: "11 Jul 2025",
  },
  {
    id: 5,
    title: "KSH INFRA to invest ₹450 Cr",
    image: "/press/press3.png",
    href: "https://realty.economictimes.indiatimes.com/news/allied-industries/ksh-infra-to-invest-rs-450-crore-to-develop-industrial-logistics-park-in-hosur/112523130",
    newTab: true,
    date: "14 Aug 2024",
  },
  {
    id: 6,
    title: "KSH INFRA To Invest Nearly $54 Mn",
    image: "/press/press2.png",
    href: "https://www.vccircle.com/kshinfra-to-invest-nearly-54-mn-in-south-india-logistics-park",
    newTab: true,
    date: "14 Aug 2024",
  },
  {
    id: 7,
    title: "KSH INFRA forays into South India",
    image: "/press/press1.png",
    href: "https://economictimes.indiatimes.com/industry/services/property-/-cstruction/ksh-infra-forays-into-south-india-plans-to-invest-rs-450-Cr.-on-hosur-logistics-park/articleshow/112503331.cms?from=mdr",
    newTab: true,
    date: "13 Aug 2024",
  },
];
export const PressCard = ({ item }) => {
  // Format date like "5 Aug 2025"
  const formattedDate = item.date
    ? new Date(item.date).toLocaleDateString("en-GB", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "";

  // Optional: category/tag if your press items have one
  const categoryToShow = item.category || "Press";

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex group flex-col md:flex-row"
    >
      {/* Press Thumbnail */}
      <div className="lg:w-[292px] w-full h-[300px] max-w-full overflow-hidden">
        <img
          src={item.image || "/default-image.jpg"}
          alt={item.title}
          className="object-cover h-full w-full group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Press Content */}
      <div className="flex flex-col min-h-[250px] justify-between border-[#DDDDDD] border-t lg:border-l-0 border-l border-b border-r w-full lg:w-[310px] max-w-full pl-[30px] pr-[20px] py-[30px]">
        <div className="flex flex-col gap-[16px]">
          {/* Category Tag */}
          <p className="max-w-fit fsans-600 text-[16px] leading-[111%] bg-[#F7E327] py-[8px] px-[12px]">
            {categoryToShow}
          </p>

          {/* Press Title */}
          <h3 className="spotlightheaddd line-clamp-3 fsans-600 text-[20px] text-[#565656]">
            {item.title}
          </h3>

          {/* Date */}
          {formattedDate && (
            <p className="fsans-600 text-[16px] text-[#565656]">
              {formattedDate}
            </p>
          )}
        </div>

        {/* Learn More Link */}
        <div className="flex items-center gap-2">
          <div className="w-[30px] group-hover:-rotate-45 transition-transform duration-500 h-[30px] bg-[#EEF0F3] rounded-full flex items-center justify-center">
            <img src="/AboutPage/AboutGrowth/learnMore.svg" alt="Learn More" />
          </div>
          <p>Learn More</p>
        </div>
      </div>
    </a>
  );
};
