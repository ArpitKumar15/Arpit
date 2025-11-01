import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import type { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onViewProduct: (product: Product) => void;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onViewProduct, onAddToCart }) => {
  
  const handleAddToCartClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
  };

  return (
    <div 
      className="bg-white border border-slate-200 rounded-lg overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
      onClick={() => onViewProduct(product)}
    >
      <div className="relative overflow-hidden">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-64 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105" 
        />
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/20 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out">
          <button 
            onClick={handleAddToCartClick} 
            className="w-full bg-slate-800 text-white font-semibold py-2 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-slate-700 transition-colors"
            aria-label={`Add ${product.name} to cart`}
          >
            <ShoppingCart className="h-5 w-5" />
            Add to Cart
          </button>
        </div>
      </div>
      <div className="p-4">
        <p className="text-sm text-slate-500 mb-1">{product.category}</p>
        <h3 className="font-bold text-lg text-slate-800 truncate" title={product.name}>{product.name}</h3>
        <div className="flex justify-between items-center mt-2">
          <p className="font-bold text-xl text-slate-900">₹{product.price.toLocaleString('en-IN')}</p>
          <div className="flex items-center gap-1">
            <Star className="h-5 w-5 text-amber-400 fill-current" />
            <span className="text-slate-600 font-medium">{product.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
