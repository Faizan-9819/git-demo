import { getStartklaarArticleBodyHtml } from "@/content/blogs/staarkiller-pillar-article/source";

export default function ArticleBody() {
  return (
    <div
      className="startklaar-source-body"
      dangerouslySetInnerHTML={{ __html: getStartklaarArticleBodyHtml() }}
    />
  );
}
