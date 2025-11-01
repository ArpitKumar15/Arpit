
import React from 'react';
import { ShoppingBag } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
  onHomeClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount, onCartClick, onHomeClick }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <button onClick={onHomeClick} aria-label="Back to homepage">
            <Logo />
        </button>
        <div className="flex items-center gap-4">
          <button onClick={onCartClick} className="relative text-slate-600 hover:text-slate-900" aria-label={`View cart with ${cartItemCount} items`}>
            <ShoppingBag className="h-7 w-7" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
