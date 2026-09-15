import BlogProse from "@/components/blogs/shared/BlogProse";
import BlogImageBlock from "@/components/blogs/shared/BlogImageBlock";
import CtaBridge from "@/components/blogs/shared/CtaBridge";
import { localizedHref } from "@/app/i18n/locale-href";
import type { Locale } from "@/app/i18n/config";
import images from "@/content/blogs/electrician-7-day-launch/images";

type WhySectionProps = {
  locale?: Locale;
};

export default function WhySection({ locale = "en" }: WhySectionProps) {
  return (
    <section id="why" className="scroll-mt-24">
      <BlogProse
        heading="Why this matters for electricians"
        paragraphs={[]}
      />
      <div className="max-w-[720px]">
        <p className="mt-7 font-poppins text-xl font-medium leading-[30px] tracking-[-0.15px] text-[var(--color-haiti)] sm:text-2xl sm:leading-[34px] sm:tracking-[-0.2px]">
          As an electrician, your website isn&apos;t the work. Your customers are.
        </p>
        <p className="mt-6 font-poppins text-[19px] leading-[31px] text-[var(--color-haiti)]">
          Most business owners don&apos;t wake up wanting to manage a web project. They want a professional online
          presence that helps customers find them, understand their services and get in touch without unnecessary
          complications.
        </p>
      </div>

      <BlogImageBlock
        src={images.electricianPhoto.src}
        alt={images.electricianPhoto.alt}
        caption={images.electricianPhoto.caption}
        spacing="embedded"
      />

      <div className="max-w-[720px]">
        <p className="mt-10 font-poppins text-[19px] leading-[31px] text-[var(--color-haiti)]">
          Instead of coordinating designers, developers, hosting providers and support companies, you work with one
          team that manages the entire process — from onboarding and launch to ongoing updates and maintenance.
          When your website goes live, it&apos;s already prepared to receive enquiries, present your services
          professionally and support your day-to-day business.
        </p>
        <p className="mt-6 font-poppins text-[19px] leading-[31px] text-[var(--color-haiti)]">
          And unlike a traditional website project, the relationship doesn&apos;t end on launch day. If you&apos;re
          looking for a faster way to launch, you&apos;ll appreciate the seven-day timeline. If you&apos;re looking
          for a simpler way to manage your online presence, you&apos;ll appreciate everything that comes after it.
        </p>
      </div>

      <CtaBridge
        eyebrow="See how it works for electricians"
        body="See how this complete managed system is designed specifically for electrical businesses — your professional website, enquiry management, ongoing support and the Growth Rocket Hub, working together."
        primaryHref={localizedHref("/website-for-electricians", locale)}
        primaryLabel="Explore website for electricians"
        secondaryHref="#final-cta"
        secondaryLabel="See what's included"
      />
    </section>
  );
}
