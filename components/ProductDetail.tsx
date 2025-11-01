
import React, { useState } from 'react';
import { Star, ArrowLeft, Plus, Minus, ShoppingCart } from 'lucide-react';
import type { Product } from '../types';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <button onClick={onBack} className="flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-8 font-semibold">
        <ArrowLeft className="h-5 w-5" />
        Back to Products
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <img src={product.imageUrl} alt={product.name} className="w-full h-auto object-cover rounded-lg shadow-lg" />
        </div>
        <div>
          <h1 className="text-4xl font-display font-bold text-slate-800 mb-2">{product.name}</h1>
          <p className="text-lg text-slate-500 mb-4">{product.category}</p>
          <div className="flex items-center gap-2 mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-6 w-6 ${i < Math.round(product.rating) ? 'text-amber-400 fill-current' : 'text-slate-300'}`} />
              ))}
            </div>
            <span className="text-slate-600 font-medium">{product.rating}</span>
            <span className="text-sm text-slate-400">({product.reviewCount} reviews)</span>
          </div>
          <p className="text-3xl font-bold text-slate-800 mb-6">₹{product.price.toFixed(2)}</p>
          <p className="text-slate-600 leading-relaxed mb-8">{product.description}</p>
          
          <div className="flex items-center gap-4 mb-8">
            <div className="flex items-center border border-slate-300 rounded-lg">
              <button onClick={() => setQuantity(q => Math.max(1, q - 1))} className="p-3 text-slate-600 hover:bg-slate-100 rounded-l-lg">
                <Minus className="h-5 w-5" />
              </button>
              <span className="px-4 font-semibold text-lg">{quantity}</span>
              <button onClick={() => setQuantity(q => q + 1)} className="p-3 text-slate-600 hover:bg-slate-100 rounded-r-lg">
                <Plus className="h-5 w-5" />
              </button>
            </div>
            <button 
              onClick={handleAddToCart}
              className="flex-grow bg-slate-800 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-slate-700 transition-colors duration-300 shadow-md"
            >
              <ShoppingCart className="h-5 w-5" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;