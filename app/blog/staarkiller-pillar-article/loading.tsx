export default function BlogPostLoading() {
  return (
    <main className="min-h-screen bg-white pt-24">
      <div className="fix">
        <div className="h-4 w-40 animate-pulse rounded-full bg-[var(--color-violet-92)]" />
        <div className="mt-6 h-12 max-w-3xl animate-pulse rounded-2xl bg-[var(--color-blog-panel)]" />
        <div className="mt-4 h-12 max-w-2xl animate-pulse rounded-2xl bg-[var(--color-blog-panel)]" />
        <div className="mt-10 h-64 animate-pulse rounded-2xl bg-[var(--color-blog-panel-light)]" />
      </div>
    </main>
  );
}
