
import React, { useState } from 'react';
import type { CartItem } from '../types';
import { ArrowLeft, CreditCard, Lock, Minus, Plus, Trash2, Loader2, Home, User, Mail, MapPin } from 'lucide-react';

interface CheckoutProps {
  cart: CartItem[];
  updateCartQuantity: (productId: number, newQuantity: number) => void;
  cartTotal: string;
  onBack: () => void;
  onPaymentSuccess: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ cart, updateCartQuantity, cartTotal, onBack, onPaymentSuccess }) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [step, setStep] = useState<'address' | 'payment'>('address');
  const [address, setAddress] = useState({
    name: '',
    email: '',
    street: '',
    city: '',
    postalCode: ''
  });

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setAddress(prev => ({...prev, [id]: value}));
  };

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if(Object.values(address).every(field => typeof field === 'string' && field.trim() !== '')) {
      setStep('payment');
    } else {
      alert('Please fill out all address fields.');
    }
  };

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    // Simulate payment processing
    setTimeout(() => {
      onPaymentSuccess();
    }, 1500);
  };

  const renderAddressForm = () => (
    <div>
        <h2 className="text-2xl font-bold text-slate-700 mb-4">Shipping Address</h2>
        <form onSubmit={handleAddressSubmit} className="bg-slate-50 p-6 rounded-lg space-y-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700">Full Name</label>
                <div className="relative mt-1">
                    <input type="text" id="name" value={address.name} onChange={handleAddressChange} placeholder="John Doe" className="w-full p-2 border border-slate-300 rounded-md pl-10" required />
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400"/>
                </div>
            </div>
            <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700">Email Address</label>
                <div className="relative mt-1">
                    <input type="email" id="email" value={address.email} onChange={handleAddressChange} placeholder="you@example.com" className="w-full p-2 border border-slate-300 rounded-md pl-10" required />
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400"/>
                </div>
            </div>
            <div>
                <label htmlFor="street" className="block text-sm font-medium text-slate-700">Street Address</label>
                <div className="relative mt-1">
                    <input type="text" id="street" value={address.street} onChange={handleAddressChange} placeholder="123 Blossom Lane" className="w-full p-2 border border-slate-300 rounded-md pl-10" required />
                    <Home className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400"/>
                </div>
            </div>
            <div className="flex gap-4">
                <div className="flex-1">
                    <label htmlFor="city" className="block text-sm font-medium text-slate-700">City</label>
                    <input type="text" id="city" value={address.city} onChange={handleAddressChange} placeholder="Sunnyvale" className="w-full mt-1 p-2 border border-slate-300 rounded-md" required />
                </div>
                <div className="flex-1">
                    <label htmlFor="postalCode" className="block text-sm font-medium text-slate-700">Postal Code</label>
                    <input type="text" id="postalCode" value={address.postalCode} onChange={handleAddressChange} placeholder="94085" className="w-full mt-1 p-2 border border-slate-300 rounded-md" required />
                </div>
            </div>
            <button 
                type="submit" 
                className="w-full bg-slate-800 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-slate-700 transition-colors duration-300 mt-4"
            >
                Proceed to Payment
            </button>
        </form>
    </div>
  );

  const renderPaymentForm = () => (
    <div>
        <h2 className="text-2xl font-bold text-slate-700 mb-4">Payment Information</h2>
        <div className="bg-slate-50 p-6 rounded-lg mb-4">
            <div className="flex justify-between items-center">
                <div>
                    <p className="text-sm text-slate-500">Ship to:</p>
                    <p className="font-semibold text-slate-800">{address.name}</p>
                    <p className="text-slate-600">{address.street}, {address.city}, {address.postalCode}</p>
                </div>
                <button onClick={() => setStep('address')} className="text-sm font-semibold text-slate-600 hover:text-slate-900">Change</button>
            </div>
        </div>
        <form onSubmit={handlePayment} className="bg-slate-50 p-6 rounded-lg space-y-4">
            <div>
                <label htmlFor="card-number" className="block text-sm font-medium text-slate-700">Card Number</label>
                <div className="relative mt-1">
                    <input type="text" id="card-number" placeholder="0000 0000 0000 0000" className="w-full p-2 border border-slate-300 rounded-md pl-10" required />
                    <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400"/>
                </div>
            </div>
            <div>
                <label htmlFor="card-name" className="block text-sm font-medium text-slate-700">Name on Card</label>
                <input type="text" id="card-name" placeholder="John Doe" className="w-full mt-1 p-2 border border-slate-300 rounded-md" required />
            </div>
            <div className="flex gap-4">
                <div className="flex-1">
                    <label htmlFor="expiry" className="block text-sm font-medium text-slate-700">Expiry</label>
                    <input type="text" id="expiry" placeholder="MM/YY" className="w-full mt-1 p-2 border border-slate-300 rounded-md" required />
                </div>
                <div className="flex-1">
                    <label htmlFor="cvc" className="block text-sm font-medium text-slate-700">CVC</label>
                    <input type="text" id="cvc" placeholder="123" className="w-full mt-1 p-2 border border-slate-300 rounded-md" required />
                </div>
            </div>
            <button 
                type="submit" 
                disabled={isProcessing}
                className="w-full bg-slate-800 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-slate-700 transition-colors duration-300 mt-4 disabled:bg-slate-400"
            >
                {isProcessing ? (
                    <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Processing...
                    </>
                ) : (
                    <>
                        <Lock className="h-5 w-5" />
                        Pay ₹{cartTotal}
                    </>
                )}
            </button>
        </form>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-12">
        <button onClick={onBack} className="flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-8 font-semibold">
            <ArrowLeft className="h-5 w-5" />
            Back to Shopping
        </button>
        <h1 className="text-4xl font-display font-bold text-slate-800 mb-8 text-center">Checkout</h1>
        
        {cart.length === 0 ? (
            <p className="text-center text-slate-500 text-lg">Your cart is empty.</p>
        ) : (
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
                <div className="lg:col-span-3">
                    {step === 'address' ? renderAddressForm() : renderPaymentForm()}
                </div>

                <div className="lg:col-span-2">
                    <h2 className="text-2xl font-bold text-slate-700 mb-4">Order Summary</h2>
                    <div className="space-y-4 bg-slate-50 p-4 rounded-lg">
                        {cart.map(({ product, quantity }) => (
                            <div key={product.id} className="flex items-center gap-4">
                                <img src={product.imageUrl} alt={product.name} className="w-16 h-16 object-cover rounded-md" />
                                <div className="flex-grow">
                                    <h3 className="font-semibold text-slate-800 text-sm">{product.name}</h3>
                                    <p className="text-xs text-slate-500">Qty: {quantity}</p>
                                </div>
                                <p className="font-bold text-slate-800 text-sm">₹{(product.price * quantity).toFixed(2)}</p>
                            </div>
                        ))}
                        <div className="pt-4 border-t border-slate-200">
                           <div className="flex justify-between text-slate-600">
                               <p>Subtotal:</p>
                               <p className="font-medium text-slate-800">₹{cartTotal}</p>
                           </div>
                            <div className="flex justify-between text-slate-600">
                               <p>Shipping:</p>
                               <p className="font-medium text-slate-800">FREE</p>
                           </div>
                            <div className="flex justify-between text-xl font-bold text-slate-800 mt-2">
                               <p>Total:</p>
                               <p>₹{cartTotal}</p>
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        )}
    </div>
  );
};

export default Checkout;