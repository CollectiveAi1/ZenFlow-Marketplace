import React, { useState } from 'react';
import { Product } from '../types';
import ArrowLeftIcon from './icons/ArrowLeftIcon';
import SparklesIcon from './icons/SparklesIcon';
import TestChamber from './TestChamber';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack }) => {
  const [showTestChamber, setShowTestChamber] = useState(false);
  const [purchaseMessage, setPurchaseMessage] = useState<string | null>(null);

  const handleBuy = () => {
      setPurchaseMessage(`Thank you for purchasing ${product.name}! A confirmation has been sent to your email.`);
      setTimeout(() => setPurchaseMessage(null), 5000);
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-fade-in">
      {purchaseMessage && (
        <div role="alert" className="fixed top-5 right-5 bg-primary-600 text-white py-3 px-5 rounded-lg shadow-lg z-50 animate-fade-in-down">
          {purchaseMessage}
        </div>
      )}
      <button
        onClick={onBack}
        className="flex items-center text-sm text-slate-400 hover:text-primary-400 transition-colors mb-6 group"
      >
        <ArrowLeftIcon className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" />
        Back to Marketplace
      </button>

      <div className="bg-slate-800/50 rounded-xl shadow-2xl overflow-hidden border border-slate-700">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img className="h-64 w-full object-cover md:w-64" src={product.imageUrl} alt={product.name} />
          </div>
          <div className="p-8 flex flex-col justify-between">
            <div>
              <div className="uppercase tracking-wide text-sm text-primary-400 font-semibold">{product.type}</div>
              <h1 className="block mt-1 text-3xl leading-tight font-extrabold text-gradient">{product.name}</h1>
              <p className="mt-1 text-slate-400">by {product.author}</p>
            </div>
            <div className="mt-4">
                 <span className="text-4xl font-bold text-gradient">
                    ${product.price.toFixed(2)}
                    {product.id.startsWith('ret-') && <span className="text-xl font-normal text-slate-400">/month</span>}
                 </span>
            </div>
          </div>
        </div>
        <div className="p-8">
            <h2 className="text-2xl font-bold text-slate-100 mb-4">About this {product.type}</h2>
            <p className="text-slate-300 leading-relaxed">{product.longDescription}</p>

            <div className="mt-6">
                <h3 className="text-lg font-semibold text-slate-200 mb-2">Tags</h3>
                <div className="flex flex-wrap gap-2">
                    {product.tags.map(tag => (
                        <span key={tag} className="bg-slate-700 text-slate-300 text-xs font-medium px-3 py-1 rounded-full">{tag}</span>
                    ))}
                </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-700 flex flex-wrap gap-4">
                 <button
                    onClick={() => setShowTestChamber(!showTestChamber)}
                    aria-expanded={showTestChamber}
                    aria-controls="test-chamber-section"
                    className="flex-1 min-w-[180px] flex items-center justify-center bg-slate-700 text-slate-200 font-bold py-3 px-6 rounded-lg hover:bg-slate-600 transition-colors duration-300"
                >
                    <SparklesIcon className="w-5 h-5 mr-2" />
                    {showTestChamber ? 'Hide Test Chamber' : 'Test Agent'}
                </button>
                <button
                    onClick={handleBuy}
                    className="flex-1 min-w-[180px] bg-primary-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-500 transition-colors duration-300 animate-glow"
                >
                    Buy Now
                </button>
            </div>
            <div id="test-chamber-section" className="transition-all duration-500">
                {showTestChamber && <TestChamber systemInstruction={product.systemInstruction} initialPrompt={product.testPrompt} />}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;