// src/pages/Dashboard.jsx
import { useArticles } from "../hooks/useArticles";
import ArticleCard from "../components/ArticleCard";
import Loader from "../components/Loader";
import EmptyState from "../components/EmptyState";

export default function Dashboard() {
  const { articlesQuery } = useArticles();

  if (articlesQuery.isLoading) {
    return <Loader />;
  }

  if (articlesQuery.isError) {
    return (
      <p className="p-6 text-red-600">
        Error loading articles. Please try again later.
      </p>
    );
  }

  if (!articlesQuery.data || articlesQuery.data.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">
        <span className="text-gray-700">BeyondChats</span> – <span className="text-blue-600">Articles Dashboard</span>
      </h1>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {articlesQuery.data.map((article) => (
          <ArticleCard
            key={article.id}
            article={article}
          />
        ))}
      </div>
    </div>
  );
}
