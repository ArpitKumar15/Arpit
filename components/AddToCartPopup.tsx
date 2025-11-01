import React from 'react';
import { CheckCircle, ShoppingBag } from 'lucide-react';

interface AddToCartPopupProps {
  show: boolean;
  count: number;
}

const AddToCartPopup: React.FC<AddToCartPopupProps> = ({ show, count }) => {
  return (
    <div 
      aria-live="polite"
      role="status"
      className={`
        fixed top-5 right-5 z-50 transform transition-all duration-300 ease-out
        ${show ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0 pointer-events-none'}
      `}
    >
      <div className="bg-slate-800 text-white rounded-lg shadow-2xl p-4 flex items-center gap-4">
        <CheckCircle className="h-6 w-6 text-green-400" />
        <div>
          <p className="font-semibold">Item added to cart!</p>
          <p className="text-sm text-slate-300">
            You now have {count} {count === 1 ? 'item' : 'items'} in your cart.
          </p>
        </div>
        <ShoppingBag className="h-6 w-6 text-slate-400 ml-2" />
      </div>
    </div>
  );
};

export default AddToCartPopup;