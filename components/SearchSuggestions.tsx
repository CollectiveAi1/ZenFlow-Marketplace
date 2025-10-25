import React from 'react';
import { Product, ProductType } from '../types';
import HighlightMatch from './HighlightMatch';
import PencilIcon from './icons/PencilIcon';
import CodeIcon from './icons/CodeIcon';
import WorkflowIcon from './icons/WorkflowIcon';

interface SearchSuggestionsProps {
  suggestions: Product[];
  query: string;
  onSuggestionClick: (productName: string) => void;
}

const ProductTypeIcon: React.FC<{ type: ProductType }> = ({ type }) => {
    const iconProps = { className: "w-5 h-5 text-slate-400" };
    switch (type) {
      case ProductType.AGENT:
        return <PencilIcon {...iconProps} />;
      case ProductType.AUTOMATION:
        return <CodeIcon {...iconProps} />;
      case ProductType.WORKFLOW:
        return <WorkflowIcon {...iconProps} />;
      default:
        return null;
    }
};

const SearchSuggestions: React.FC<SearchSuggestionsProps> = ({ suggestions, query, onSuggestionClick }) => {
  if (suggestions.length === 0) {
    return null;
  }

  return (
    <div id="search-suggestions" className="absolute top-full mt-2 w-full bg-slate-800 border border-slate-700 rounded-md shadow-lg z-50 overflow-hidden animate-fade-in-down">
      <ul role="listbox" aria-label="Search suggestions" className="divide-y divide-slate-700">
        {suggestions.map((product, index) => (
          <li
            key={product.id}
            id={`suggestion-${index}`}
            role="option"
            aria-selected="false"
            onMouseDown={() => onSuggestionClick(product.name)}
            className="px-4 py-3 hover:bg-slate-700/50 cursor-pointer transition-colors flex items-center justify-between"
          >
            <div className="text-sm text-slate-200">
                <HighlightMatch text={product.name} highlight={query} />
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500">
                <ProductTypeIcon type={product.type} />
                <span>{product.type}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchSuggestions;