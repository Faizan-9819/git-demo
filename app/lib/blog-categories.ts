type CategoryStyle = { color: string; bg: string };

export const CATEGORY_STYLES: Record<string, CategoryStyle> = {
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

export function getCategoryStyle(category: string): CategoryStyle {
  return CATEGORY_STYLES[category] ?? { color: "#6b2cc9", bg: "#f2eefc" };
}

export const DROPDOWN_CATEGORIES = Object.keys(CATEGORY_STYLES);
