import React from 'react';
import type { StyleAdvice, Product } from '../types';
import { X, Bot, ShoppingCart, Eye } from 'lucide-react';
import ProductCard from './ProductCard';

interface StyleAdviceResultProps {
  advice: StyleAdvice;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
  onViewProduct: (product: Product) => void;
}

const StyleAdviceResult: React.FC<StyleAdviceResultProps> = ({ advice, onClose, onAddToCart, onViewProduct }) => {
  const { product, explanation } = advice;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-3xl m-4 transform transition-all duration-300 scale-100 max-h-[90vh] flex flex-col">
        <div className="flex justify-between items-center p-6 border-b border-slate-200">
          <div className="flex items-center gap-2">
            <Bot className="h-6 w-6 text-slate-700" />
            <h2 className="text-2xl font-bold text-slate-800">Your Personal Style Advice</h2>
          </div>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-800">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto flex-grow grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <img src={product.imageUrl} alt={product.name} className="w-full object-cover rounded-lg shadow-md" />
            <h3 className="text-2xl font-bold text-slate-800">{product.name}</h3>
            <p className="text-2xl font-bold text-slate-800">₹{product.price.toFixed(2)}</p>
          </div>

          <div className="flex flex-col">
            <h4 className="text-lg font-semibold text-slate-700 mb-2">Why this is perfect for you:</h4>
            <div className="bg-slate-50 p-4 rounded-lg text-slate-600 leading-relaxed text-sm flex-grow">
              <p>{explanation}</p>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onViewProduct(product)}
                className="flex-1 bg-white border border-slate-800 text-slate-800 font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-slate-50 transition-colors duration-300"
              >
                <Eye className="h-5 w-5" />
                View Product
              </button>
              <button
                onClick={() => {
                  onAddToCart(product, 1);
                  onClose();
                }}
                className="flex-1 bg-slate-800 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-slate-700 transition-colors duration-300"
              >
                <ShoppingCart className="h-5 w-5" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyleAdviceResult;
