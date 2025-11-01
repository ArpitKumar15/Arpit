
import React from 'react';
import { CheckCircle, Loader, Truck, Home } from 'lucide-react';

interface OrderTrackingProps {
  orderStatus: 'processing' | 'shipped' | 'out_for_delivery' | 'delivered' | null;
  orderNumber: string | null;
  onBackToHome: () => void;
}

const statuses = [
  { id: 'processing', label: 'Processing', icon: <Loader /> },
  { id: 'shipped', label: 'Shipped', icon: <Truck /> },
  { id: 'out_for_delivery', label: 'Out for Delivery', icon: <Truck /> },
  { id: 'delivered', label: 'Delivered', icon: <Home /> },
] as const;

const OrderTracking: React.FC<OrderTrackingProps> = ({ orderStatus, orderNumber, onBackToHome }) => {
  const currentStatusIndex = orderStatus ? statuses.findIndex(s => s.id === orderStatus) : -1;

  const getStatusClass = (index: number) => {
    if (index < currentStatusIndex) return 'completed';
    if (index === currentStatusIndex) return 'active';
    return 'pending';
  };
  
  return (
    <div className="container mx-auto px-4 py-12 text-center">
      <h1 className="text-4xl font-display font-bold text-slate-800 mb-4">Thank You For Your Order!</h1>
      <p className="text-lg text-slate-600 mb-2">Your order <span className="font-bold text-slate-700">#{orderNumber}</span> is on its way.</p>
      <p className="text-slate-500 mb-12">You can track its progress below.</p>

      <div className="max-w-3xl mx-auto">
        <div className="flex items-center">
          {statuses.map((status, index) => (
            <React.Fragment key={status.id}>
              <div className="flex flex-col items-center">
                <div 
                  className={`
                    w-12 h-12 rounded-full flex items-center justify-center border-4 transition-all duration-500 z-10
                    ${getStatusClass(index) === 'completed' ? 'bg-green-500 border-green-500 text-white' : ''}
                    ${getStatusClass(index) === 'active' ? 'bg-blue-500 border-blue-500 text-white animate-pulse' : ''}
                    ${getStatusClass(index) === 'pending' ? 'bg-white border-slate-300 text-slate-400' : ''}
                  `}
                >
                  {getStatusClass(index) === 'completed' ? <CheckCircle size={24} /> : React.cloneElement(status.icon, { size: 24 })}
                </div>
                <p 
                  className={`
                    mt-2 font-semibold text-sm transition-colors duration-500 w-24
                    ${getStatusClass(index) === 'pending' ? 'text-slate-400' : 'text-slate-700'}
                  `}
                >
                  {status.label}
                </p>
              </div>
              {index < statuses.length - 1 && (
                <div 
                  className={`
                    flex-grow h-1 transition-colors duration-500 -mx-1
                    ${getStatusClass(index) === 'completed' ? 'bg-green-500' : 'bg-slate-300'}
                  `}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <button onClick={onBackToHome} className="bg-slate-800 text-white font-semibold py-3 px-8 rounded-lg hover:bg-slate-700 transition-colors duration-300">
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default OrderTracking;
