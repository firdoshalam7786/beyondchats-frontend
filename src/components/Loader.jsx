export default function Loader({ text = "Loading articles..." }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[50vh]">
      <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-gray-900"></div>
      <p className="mt-3 text-sm text-gray-500">{text}</p>
    </div>
  );
}
