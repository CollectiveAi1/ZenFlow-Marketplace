import React from 'react';

interface HighlightMatchProps {
  text: string;
  highlight: string;
}

const HighlightMatch: React.FC<HighlightMatchProps> = ({ text, highlight }) => {
  if (!highlight.trim()) {
    return <span>{text}</span>;
  }

  const regex = new RegExp(`(${highlight.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  const parts = text.split(regex);

  return (
    <span>
      {parts.map((part, i) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <mark key={i} className="bg-primary-500/30 text-primary-300 rounded-sm px-0.5">
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </span>
  );
};

export default HighlightMatch;
