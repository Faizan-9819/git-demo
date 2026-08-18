export type Heading = { id: string; text: string; level: number };

const HTML_ENTITIES: Record<string, string> = {
  "&amp;": "&",
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&#039;": "'",
  "&apos;": "'",
  "&nbsp;": " ",
  "&#8216;": "‘",
  "&#8217;": "’",
  "&#8220;": "“",
  "&#8221;": "”",
  "&#8211;": "–",
  "&#8212;": "—",
  "&#8230;": "…",
};

function decodeEntities(str: string): string {
  return str
    .replace(/&#(\d+);/g, (_, dec) => String.fromCodePoint(Number(dec)))
    .replace(/&[a-z]+;/gi, (entity) => HTML_ENTITIES[entity] ?? entity);
}

function toSlug(text: string): string {
  return decodeEntities(text)
    .replace(/ß/g, "ss")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export function extractHeadings(html: string): {
  headings: Heading[];
  contentWithIds: string;
} {
  const headings: Heading[] = [];
  const slugCount: Record<string, number> = {};

  const contentWithIds = html.replace(
    /<h2([^>]*)>(.*?)<\/h2>/gi,
    (_, attrs: string, inner: string) => {
      const plainText = inner.replace(/<[^>]*>/g, "").trim();
      const base = toSlug(plainText);
      slugCount[base] = (slugCount[base] ?? 0) + 1;
      const id = slugCount[base] > 1 ? `${base}-${slugCount[base]}` : base;
      // store decoded plain text so TOC renders correctly without dangerouslySetInnerHTML on the text itself
      const decodedText = decodeEntities(plainText);
      headings.push({ id, text: decodedText, level: 2 });
      return `<h2${attrs} id="${id}">${inner}</h2>`;
    },
  );

  return { headings, contentWithIds };
}
