// src/components/StatusBadge.jsx
export default function StatusBadge({ status }) {
  if (!status) return null;

  const styles = {
    SCRAPED: "bg-yellow-100 text-yellow-800",
    UPDATED: "bg-green-100 text-green-800",
  };

  return (
    <span
      className={`px-2 py-1 text-xs font-semibold rounded ${
        styles[status] || "bg-gray-100 text-gray-700"
      }`}
    >
      {status}
    </span>
  );
}
