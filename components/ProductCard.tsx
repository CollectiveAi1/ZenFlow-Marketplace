import React from 'react';
import { Product, ProductType } from '../types';
import CodeIcon from './icons/CodeIcon';
import PencilIcon from './icons/PencilIcon';
import WorkflowIcon from './icons/WorkflowIcon';
import HighlightMatch from './HighlightMatch';

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
  activeTags?: string[];
  searchQuery: string;
}

const ProductTypeIcon: React.FC<{ type: ProductType }> = ({ type }) => {
  const iconProps = { className: "w-6 h-6 text-primary-400" };
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

const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect, activeTags = [], searchQuery }) => {
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onSelect(product);
    }
  };

  return (
    <div
      className="bg-slate-800/50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl hover:shadow-primary-400/20 transition-all duration-300 flex flex-col group cursor-pointer border border-slate-700 hover:border-primary-600/50 hover:scale-[1.02] hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-primary-500"
      onClick={() => onSelect(product)}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`View details for ${product.name}`}
    >
      <div className="relative">
        <img className="w-full h-48 object-cover" src={product.imageUrl} alt={product.name} />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-slate-800 via-slate-800/50 to-transparent"></div>
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
            <div className="flex-1">
                <div className="font-bold text-xl text-slate-100 group-hover:text-primary-400 transition-colors duration-300">
                    <HighlightMatch text={product.name} highlight={searchQuery} />
                </div>
                <p className="text-sm text-slate-400">{product.author}</p>
            </div>
            <div className="bg-slate-700/50 p-2 rounded-full">
                <ProductTypeIcon type={product.type} />
            </div>
        </div>
        <p className="text-slate-300 text-base mb-4">
          <HighlightMatch text={product.description} highlight={searchQuery} />
        </p>
        <div className="mb-4 flex flex-wrap gap-2">
          {product.tags.map(tag => (
            <span
              key={tag}
              className={`text-xs font-medium px-2.5 py-1 rounded-full transition-colors ${
                activeTags.includes(tag)
                  ? 'bg-primary-500/80 text-white'
                  : 'bg-slate-700 text-slate-300'
              }`}
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-slate-700/50">
          <span className="text-2xl font-bold text-gradient">
            ${product.price.toFixed(2)}
            {product.id.startsWith('ret-') && <span className="text-base font-normal text-slate-400">/month</span>}
          </span>
          <div className="bg-slate-700 text-slate-200 font-semibold py-2 px-4 rounded-lg group-hover:bg-primary-600 group-hover:text-white transition-all duration-300 group-hover:shadow-[0_0_15px_-3px_theme(colors.primary.500)]" aria-hidden="true">
            View Details
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;