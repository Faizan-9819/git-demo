"use client";

import type { ComponentType, ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Headset, Mail, Phone } from "lucide-react";
import {
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";
import ArrowIcon from "../../ui/ArrowIcon";
import { CONTACT_INFO, phoneHref } from "@/app/lib/contact";
import { localizedHref } from "@/app/i18n/locale-href";
import type { Locale } from "@/app/i18n/config";

/**
 * Site footer — ported from `footer.legacy-footer.fresh-footer` in
 * grsolidvariant.html, the block that sits directly under
 * {@link FooterLoopStrip}.
 *
 * home2 renders it itself as the last fold inside HomeShell; every other route
 * gets it from the root layout via {@link SiteFooter}, which supplies the page
 * gutter and content rail HomeShell would otherwise provide.
 *
 * As with the other ported folds, the values below are the final computed
 * ones. The source declares this footer twice: a first pass that boxes each
 * column in a bordered card and prints a giant wordmark under them, then a
 * "refinement" block that flattens the cards to plain lists, shrinks the
 * display heading to an 18px lead line, and hides the wordmark outright. Only
 * the second state renders, so only it is ported.
 *
 * The source is desktop-first with max-width overrides at 900px and 520px;
 * those are inverted here into min-width steps, so the base values are the
 * smallest ones.
 *
 * Horizontal spacing comes from the shared `.fix` container rather than the
 * source's `clamp(24px,4vw,64px)` inline padding, so the footer's columns line
 * up with every other fold on the page; the footer itself only carries the
 * surface and its vertical rhythm.
 *
 * One deliberate difference: the source stacks two adjacent hairlines between
 * the lead block and the link grid (the lead's `border-bottom` and the grid's
 * `border-top`, with no space between them). That reads as a 2px seam for no
 * reason, so only the lead's rule is kept here.
 */

type FooterLink = {
  label: string;
  href: string;
  /** Opt out of the /nl prefix for routes that have no Dutch counterpart. */
  localize?: false;
};

const PRODUCT_LINKS: FooterLink[] = [
  { label: "Professional website", href: "#oplossing" },
  { label: "Growth Rocket Hub", href: "#oplossing" },
  { label: "Pricing", href: "#pricing" },
  { label: "How it works", href: "#how" },
];

const EXPLORE_LINKS: FooterLink[] = [
  { label: "Who it’s for", href: "#voorwie" },
  { label: "Examples", href: "#voorbeelden" },
  // The blog is English-only — there is no /nl/blog route to send NL visitors to.
  { label: "Blog", href: "/blog", localize: false },
  { label: "FAQ", href: "#faq" },
];

const SOCIAL_LINKS: (FooterLink & { Icon: ComponentType })[] = [
  {
    label: "Instagram",
    href: CONTACT_INFO.socialLinks[0].href,
    Icon: FaInstagram,
  },
  {
    label: "LinkedIn",
    href: CONTACT_INFO.socialLinks[1].href,
    Icon: FaLinkedin,
  },
  { label: "YouTube", href: CONTACT_INFO.socialLinks[2].href, Icon: FaYoutube },
  {
    label: "WhatsApp",
    href: CONTACT_INFO.socialLinks[4].href,
    Icon: FaWhatsapp,
  },
];

const LEGAL_LINKS: FooterLink[] = [
  { label: "Privacy", href: "/privacy-policy" },
  { label: "Imprint", href: "/imprint" },
  { label: "Cookies", href: "/cookie-policy" },
  { label: "Terms", href: "/terms-and-conditions" },
];

const LINK_CLASS =
  "mb-[11px] flex w-max max-w-full items-center gap-[10px] font-sans text-[14px] font-medium leading-[1.45] text-white/76 transition-colors hover:text-[#e4fa65]";

const HEADING_CLASS =
  "mb-[16px] font-sans text-[12px] font-bold uppercase leading-none tracking-[0.11em] text-[#e4fa65]";

/** The lime-tinted disc every social and contact row is prefixed with. */
function IconChip({ children }: { children: ReactNode }) {
  return (
    <span
      aria-hidden
      className="inline-grid h-[24px] w-[24px] flex-none place-items-center rounded-full bg-[#e4fa65]/12 text-[#e4fa65] [&_svg]:h-[15px] [&_svg]:w-[15px]"
    >
      {children}
    </span>
  );
}

/**
 * A bare `#hash` only scrolls on the page that owns the section, so away from
 * home it has to become a route + hash. That flips the element too: `next/link`
 * for the navigation, a plain anchor for the in-page jump so home keeps the
 * scroll behaviour it has today.
 */
function NavLink({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: ReactNode;
}) {
  if (href.startsWith("#")) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

export default function Footer2() {
  const pathname = usePathname() || "/";
  const locale: Locale =
    pathname === "/nl" || pathname.startsWith("/nl/") ? "nl" : "en";

  // The footer's section anchors all live on home2. Derived rather than
  // hard-coded so the footer stays in place when it is rendered there and
  // navigates back to it from every other route.
  const homeHref = localizedHref("/home2", locale);
  const onHome = pathname === homeHref;

  const resolve = ({ href, localize }: FooterLink) => {
    if (href.startsWith("#")) return onHome ? href : `${homeHref}${href}`;
    return localize === false ? href : localizedHref(href, locale);
  };

  return (
    <footer className="overflow-hidden rounded-[13px] bg-[#0a0516] pt-[34px] pb-[22px] text-white min-[521px]:pt-[40px] min-[521px]:pb-[28px]">
      <div className="fix">
        {/* Lead block: brand statement on the left, pricing CTA on the right.
            `minmax(0,1fr)` keeps the copy column from being widened past the
            grid by its own max-widths. */}
        <div className="grid grid-cols-1 items-center gap-[32px] border-b border-white/12 pb-[34px] min-[901px]:grid-cols-[minmax(0,1fr)_auto]">
          <div>
            <img
              src="/figma/icons/logos/logowhite.svg"
              alt="Growth Rocket"
              width={145}
              height={40}
              loading="lazy"
              className="mb-[22px] h-auto w-[145px]"
            />
            <h2 className="m-0 max-w-[620px] font-sans text-[18px] font-bold leading-[1.55] text-white">
              Your website and everyday business tools.
            </h2>
            <p className="mt-[8px] max-w-[680px] font-sans text-[16px] leading-[1.65] text-[#c9c2d4]">
              Together, for a business that’s going places. For freelancers and
              small businesses that want to get found, get booked and stay
              organised without handling the technical side.
            </p>
          </div>

          <NavLink
            href={resolve({ label: "Pricing", href: "#pricing" })}
            className="arrow-cta inline-flex min-h-[52px] w-fit md:w-full items-center justify-center gap-[8px] rounded-full bg-[#e4fa65] px-[20px] py-[13px] font-sans text-[15px] font-bold leading-none whitespace-nowrap text-[#0a0516] min-[521px]:w-max"
          >
            View full pricing
            <ArrowIcon
              direction="up-right"
              // size={21}
              className="text-[#5b2dce]"
            />
          </NavLink>
        </div>

        {/* Link grid: three equal columns plus a wider contact column from
            901px. Below that it drops to two columns, which suits Product and
            Explore — short labels that pair up without wrapping — but not
            Social or Contact, whose rows carry an icon chip and, in Contact's
            case, an address block. Those two span the full width instead, so
            the grid reads as a 2-up row followed by two stacked blocks. */}
        <div className="grid grid-cols-2 gap-[36px] pt-[34px] pb-[28px] min-[901px]:grid-cols-[repeat(3,minmax(120px,1fr))_minmax(300px,1.35fr)]">
          <div>
            <h3 className={HEADING_CLASS}>Product</h3>
            {PRODUCT_LINKS.map((link) => (
              <NavLink
                key={link.label}
                href={resolve(link)}
                className={LINK_CLASS}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div>
            <h3 className={HEADING_CLASS}>Explore</h3>
            {EXPLORE_LINKS.map((link) => (
              <NavLink
                key={link.label}
                href={resolve(link)}
                className={LINK_CLASS}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="col-span-2 min-[901px]:col-span-1">
            <h3 className={HEADING_CLASS}>Social</h3>
            {SOCIAL_LINKS.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={LINK_CLASS}
              >
                <IconChip>
                  <Icon />
                </IconChip>
                {label}
              </a>
            ))}
          </div>

          <div className="col-span-2 min-[901px]:col-span-1">
            <h3 className={HEADING_CLASS}>Contact</h3>
            <p className="mb-[18px] max-w-[340px] font-sans text-[14px] leading-[1.7] text-white/72">
              <strong className="font-bold text-white">
                {CONTACT_INFO.company}
              </strong>
              {CONTACT_INFO.addressLines.map((line) => (
                <span key={line}>
                  <br />
                  {line}
                </span>
              ))}
            </p>

            <a href={`mailto:${CONTACT_INFO.emails[0]}`} className={LINK_CLASS}>
              <IconChip>
                <Mail strokeWidth={1.8} />
              </IconChip>
              {CONTACT_INFO.emails[0]}
            </a>
            <a href={`mailto:${CONTACT_INFO.emails[1]}`} className={LINK_CLASS}>
              <IconChip>
                <Headset strokeWidth={1.8} />
              </IconChip>
              {CONTACT_INFO.emails[1]}
            </a>
            <a href={phoneHref(CONTACT_INFO.phone)} className={LINK_CLASS}>
              <IconChip>
                <Phone strokeWidth={1.8} />
              </IconChip>
              {CONTACT_INFO.phone}
            </a>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-[18px] border-t border-white/10 pt-[22px] font-sans text-[13px] leading-[1.5] text-white/58">
          <span>
            © 2026 Growth Rocket by{" "}
            <b className="font-bold text-white">Parashift Technologies</b>
          </span>
          <span className="flex flex-wrap gap-[16px]">
            {LEGAL_LINKS.map((link) => (
              <Link
                key={link.label}
                href={resolve(link)}
                className="text-white/58 transition-colors hover:text-[#e4fa65]"
              >
                {link.label}
              </Link>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
}
