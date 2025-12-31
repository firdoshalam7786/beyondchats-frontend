// src/hooks/useArticles.js
import { useQuery } from "@tanstack/react-query";
import { getArticles } from "../api/articles.api";

export const useArticles = () => {
  const articlesQuery = useQuery({
    queryKey: ["articles"],
    queryFn: getArticles,
  });

  return { articlesQuery };
};
