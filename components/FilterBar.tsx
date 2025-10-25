
import React from 'react';
import { ProductType } from '../types';
import XIcon from './icons/XIcon';
import SortControls, { SortOption } from './SortControls';

interface FilterBarProps {
  allTags: string[];
  filters: { type: ProductType | 'all'; tags:string[] };
  onFilterChange: (filters: { type: ProductType | 'all'; tags: string[] }) => void;
  sortOption: SortOption;
  onSortChange: (sort: SortOption) => void;
}

const productTypes: (ProductType | 'all')[] = ['all', ProductType.AGENT, ProductType.AUTOMATION, ProductType.WORKFLOW];

const FilterBar: React.FC<FilterBarProps> = ({ allTags, filters, onFilterChange, sortOption, onSortChange }) => {
  const handleTypeChange = (type: ProductType | 'all') => {
    onFilterChange({ ...filters, type });
  };

  const handleTagToggle = (tag: string) => {
    const newTags = filters.tags.includes(tag)
      ? filters.tags.filter(t => t !== tag)
      : [...filters.tags, tag];
    onFilterChange({ ...filters, tags: newTags });
  };

  const handleClearFilters = () => {
    onFilterChange({ type: 'all', tags: [] });
  };

  const areFiltersActive = filters.type !== 'all' || filters.tags.length > 0;

  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6" aria-label="Product Filters and Sorting">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-slate-100">Filter & Sort</h2>
        {areFiltersActive && (
          <button
            onClick={handleClearFilters}
            className="flex items-center gap-1 text-sm text-slate-400 hover:text-primary-400 transition-colors duration-200"
            aria-label="Clear all filters"
          >
            <XIcon className="w-4 h-4" />
            Clear
          </button>
        )}
      </div>

      <div className="space-y-8">
        {/* Sort Section */}
        <div role="group" aria-labelledby="sort-by-label">
          <h3 id="sort-by-label" className="text-lg font-semibold text-slate-200 mb-3">Sort by</h3>
          <SortControls currentSort={sortOption} onSortChange={onSortChange} />
        </div>

        {/* Type Filter */}
        <div role="group" aria-labelledby="filter-by-type-label">
          <h3 id="filter-by-type-label" className="text-lg font-semibold text-slate-200 mb-3">Type</h3>
          <div className="flex flex-col items-start gap-2">
            {productTypes.map(type => (
              <button
                key={type}
                onClick={() => handleTypeChange(type)}
                aria-pressed={filters.type === type}
                className={`w-full text-left px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 ${
                  filters.type === type
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-slate-700 text-slate-300 hover:bg-slate-600'
                }`}
              >
                {type === 'all' ? 'All Types' : type}
              </button>
            ))}
          </div>
        </div>
        
        {/* Tag Filter */}
        <div role="group" aria-labelledby="filter-by-tags-label">
          <h3 id="filter-by-tags-label" className="text-lg font-semibold text-slate-200 mb-3">Tags</h3>
          <div className="flex flex-wrap gap-2">
            {allTags.map(tag => (
              <button
                key={tag}
                onClick={() => handleTagToggle(tag)}
                aria-pressed={filters.tags.includes(tag)}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-colors duration-200 border ${
                  filters.tags.includes(tag)
                    ? 'bg-primary-500 text-white border-primary-500'
                    : 'bg-slate-700 text-slate-300 border-slate-600 hover:bg-slate-600 hover:border-slate-500'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
