export default function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh] text-center">
      <h2 className="text-lg font-semibold text-gray-700">
        No articles found
      </h2>
      <p className="text-sm text-gray-500 mt-2 max-w-sm">
        Articles will appear here once they are scraped and processed by the system.
      </p>
    </div>
  );
}
