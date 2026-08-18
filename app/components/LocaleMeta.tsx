"use client";

import { useEffect } from "react";
import { useLanguage } from "../i18n/LanguageProvider";

type MetaEntry = { en: string; nl: string };

export default function LocaleMeta({
  title,
  description,
}: {
  title: MetaEntry;
  description: MetaEntry;
}) {
  const { locale } = useLanguage();

  useEffect(() => {
    document.title = locale === "nl" ? title.nl : title.en;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        "content",
        locale === "nl" ? description.nl : description.en
      );
    }
  }, [locale, title, description]);

  return null;
}
