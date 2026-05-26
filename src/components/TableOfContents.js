// file: src/components/TableOfContents.js
export default function TableOfContents({ headings }) {
  if (!headings?.length) return null;
  return (
    <nav className="sticky top-24 max-h-[calc(100vh-6rem)] overflow-y-auto pr-4 hidden lg:block w-64 flex-shrink-0">
      <h3 className="font-medium mb-4 text-sm uppercase tracking-wider text-muted-light dark:text-muted-dark">
        Table of Contents
      </h3>
      <ul className="space-y-2 text-sm">
        {headings.map(h => (
          <li key={h.id} style={{ marginLeft: `${(h.depth - 2) * 1}rem` }}>
            <a 
              href={`#${h.id}`} 
              className="text-muted-light dark:text-muted-dark hover:text-primary-light dark:hover:text-primary-dark transition-colors block py-1"
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
