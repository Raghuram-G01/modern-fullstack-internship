import { Feedback } from "../lib/types";

export default function FeedbackList({ items }: { items: Feedback[] }) {
  if (items.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-gray-300 py-12 text-center text-sm text-gray-400">
        No feedback yet. Be the first!
      </div>
    );
  }

  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item.id}
          className="rounded-lg border border-gray-200 bg-white px-4 py-3 shadow-sm dark:bg-zinc-900 dark:border-zinc-700"
        >
          <p className="text-sm text-gray-800 dark:text-zinc-100">{item.message}</p>
          <time className="mt-1 block text-xs text-gray-400">
            {new Date(item.createdAt).toLocaleString()}
          </time>
        </li>
      ))}
    </ul>
  );
}