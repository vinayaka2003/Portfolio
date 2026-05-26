// file: src/components/TagBadge.js
export default function TagBadge({ tag }) {
  return (
    <span className="inline-block bg-muted-light dark:bg-muted-dark text-sm px-2 py-0.5 rounded-full mr-1 hover:bg-primary-light dark:hover:bg-primary-dark transition-colors">
      {tag}
    </span>
  );
}
