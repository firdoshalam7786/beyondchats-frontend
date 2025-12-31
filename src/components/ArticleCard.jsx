import StatusBadge from "./StatusBadge";

export default function ArticleCard({ article }) {
  const truncate = (text, length = 140) => {
    if (!text) return "Pending AI rewrite (Phase 2)";
    return text.length > length
      ? text.slice(0, length) + "..."
      : text;
  };

  return (
    <div
      className={`rounded-xl border shadow-sm bg-white p-5 transition hover:shadow-md ${
        article.status === "UPDATED"
          ? "border-green-300 bg-green-50/40"
          : "border-gray-200"
      }`}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <h2 className="font-semibold text-lg text-gray-900 leading-snug">
          {article.title}
        </h2>
        <StatusBadge status={article.status} />
      </div>

      {/* Original */}
      <div className="mb-4">
        <p className="text-xs font-semibold text-gray-700 uppercase mb-1">
          Original Article
        </p>
        <p className="text-sm text-gray-500 leading-relaxed">
          {truncate(article.originalContent)}
        </p>

        {article.sourceUrl && (
          <a
            href={article.sourceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-xs text-blue-700 hover:underline"
          >
            View Source →
          </a>
        )}
      </div>

      {/* Divider */}
      <div className="h-px bg-gray-200 my-3" />

      {/* Rewritten */}
      <div>
        <p className="text-xs font-semibold text-gray-700 uppercase mb-1">
          Rewriting
        </p>
        <p className="text-sm text-gray-800 leading-relaxed italic">
          {article.rewrittenContent
            ? truncate(article.rewrittenContent)
            : "Pending AI rewrite (Phase 2)"}
        </p>
      </div>
    </div>
  );
}
