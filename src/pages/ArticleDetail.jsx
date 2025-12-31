import { useLocation, useNavigate } from "react-router-dom";
import StatusBadge from "../components/StatusBadge";

export default function ArticleDetail() {
  const { state: article } = useLocation();
  const navigate = useNavigate();

  if (!article) {
    return (
      <p className="p-6 text-red-600">
        Article data not available
      </p>
    );
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <button
        onClick={() => navigate(-1)}
        className="text-sm text-gray-600 mb-4"
      >
        ← Back
      </button>

      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">{article.title}</h1>
        <StatusBadge status={article.status} />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white p-4 rounded">
          <h2 className="font-semibold mb-2">Original Article</h2>
          <p className="text-sm whitespace-pre-line">
            {article.originalContent}
          </p>
        </div>

        <div className="bg-white p-4 rounded">
          <h2 className="font-semibold mb-2">Updated Article</h2>
          <p className="text-sm whitespace-pre-line">
            {article.rewrittenContent || "Not updated yet"}
          </p>
        </div>
      </div>
    </div>
  );
}
