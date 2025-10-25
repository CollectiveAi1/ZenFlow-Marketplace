import React from 'react';
import ChevronLeftIcon from './icons/ChevronLeftIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    // This creates an array of numbers from 1 to totalPages
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  };

  const pageNumbers = getPageNumbers();

  // A more advanced implementation could use ellipses for many pages,
  // but this is robust for a moderate number of pages.

  return (
    <nav className="flex items-center justify-center mt-12" aria-label="Pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-slate-700 bg-slate-800 text-sm font-medium text-slate-400 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        aria-label="Previous Page"
      >
        <ChevronLeftIcon className="h-5 w-5" />
      </button>

      {pageNumbers.map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          aria-current={page === currentPage ? 'page' : undefined}
          className={`-ml-px relative inline-flex items-center px-4 py-2 border border-slate-700 text-sm font-medium transition-colors ${
            page === currentPage
              ? 'z-10 bg-primary-600 text-white'
              : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="-ml-px relative inline-flex items-center px-2 py-2 rounded-r-md border border-slate-700 bg-slate-800 text-sm font-medium text-slate-400 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        aria-label="Next Page"
      >
        <ChevronRightIcon className="h-5 w-5" />
      </button>
    </nav>
  );
};

export default Pagination;
