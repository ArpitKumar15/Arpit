import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import Checkout from './components/Checkout';
import OrderTracking from './components/OrderTracking';
import AddToCartPopup from './components/AddToCartPopup';
import AIStyleAdvisor from './components/AIStyleAdvisor';
import StyleAdviceResult from './components/StyleAdviceResult';
import GamificationSpinner from './components/GamificationSpinner';
import ProductCard from './components/ProductCard';
import SkeletonCard from './components/SkeletonCard';
import InteractiveBackground from './components/InteractiveBackground';
import { mockProducts } from './constants';
import type { Product, CartItem, StyleAdvice } from './types';
import { ShoppingBag, Wand2 } from 'lucide-react';

type Page = 'home' | 'product' | 'cart' | 'checkout' | 'order-tracking';

// Define OrderTrackingProps for type reference inside App.tsx as it's not exported from its component
interface OrderTrackingProps {
  orderStatus: 'processing' | 'shipped' | 'out_for_delivery' | 'delivered' | null;
  orderNumber: string | null;
  onBackToHome: () => void;
}

const App: React.FC = () => {
  const [page, setPage] = useState<Page>('home');
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [showPopup, setShowPopup] = useState(false);
  const [orderStatus, setOrderStatus] = useState<OrderTrackingProps['orderStatus']>(null);
  const [orderNumber, setOrderNumber] = useState<string | null>(null);
  const [isAdvisorOpen, setIsAdvisorOpen] = useState(false);
  const [styleAdvice, setStyleAdvice] = useState<StyleAdvice | null>(null);
  const [activeCategory, setActiveCategory] = useState('All');

  useEffect(() => {
    // Simulate fetching products
    setTimeout(() => {
      setProducts(mockProducts);
      setIsLoading(false);
    }, 1500);
  }, []);
  
  const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
  const cartTotal = cart.reduce((total, item) => total + item.product.price * item.quantity, 0).toFixed(2);
  const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];
  const filteredProducts = activeCategory === 'All' ? products : products.filter(p => p.category === activeCategory);

  const handleAddToCart = (product: Product, quantity: number = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.product.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prevCart, { product, quantity }];
    });
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000);
  };

  const updateCartQuantity = (productId: number, newQuantity: number) => {
    setCart(prevCart => {
      if (newQuantity <= 0) {
        return prevCart.filter(item => item.product.id !== productId);
      }
      return prevCart.map(item =>
        item.product.id === productId ? { ...item, quantity: newQuantity } : item
      );
    });
  };

  const handleViewProduct = (product: Product) => {
    setSelectedProduct(product);
    setPage('product');
    window.scrollTo(0, 0);
  };

  const handleBackToProducts = () => {
    setSelectedProduct(null);
    setPage('home');
  };
  
  const handlePaymentSuccess = () => {
      setCart([]);
      setOrderNumber(Math.random().toString(36).substr(2, 9).toUpperCase());
      setOrderStatus('processing');
      setPage('order-tracking');

      // Simulate order progress
      setTimeout(() => setOrderStatus('shipped'), 2000);
      setTimeout(() => setOrderStatus('out_for_delivery'), 4000);
      setTimeout(() => setOrderStatus('delivered'), 6000);
  };
  
  const handleAdvisorComplete = (advice: { productId: number; explanation: string; }) => {
    const advisedProduct = products.find(p => p.id === advice.productId);
    if(advisedProduct) {
        setStyleAdvice({ product: advisedProduct, explanation: advice.explanation });
    }
    setIsAdvisorOpen(false);
  };
  
  const renderCart = () => (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-display font-bold text-slate-800 mb-8">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center text-slate-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map(({ product, quantity }) => (
              <div key={product.id} className="flex items-center gap-4 p-4 border border-slate-200 rounded-lg bg-white/80 backdrop-blur-sm">
                <img src={product.imageUrl} alt={product.name} className="w-20 h-20 object-cover rounded-md"/>
                <div className="flex-grow">
                  <h3 className="font-semibold text-slate-800">{product.name}</h3>
                  <p className="text-sm text-slate-500">₹{product.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={() => updateCartQuantity(product.id, quantity - 1)} className="p-1 border rounded-md h-8 w-8 flex items-center justify-center">-</button>
                  <span className="w-8 text-center">{quantity}</span>
                  <button onClick={() => updateCartQuantity(product.id, quantity + 1)} className="p-1 border rounded-md h-8 w-8 flex items-center justify-center">+</button>
                </div>
                <p className="font-bold text-slate-800 w-24 text-right">₹{(product.price * quantity).toFixed(2)}</p>
                <button onClick={() => updateCartQuantity(product.id, 0)} className="text-red-500 hover:text-red-700">Remove</button>
              </div>
            ))}
          </div>
          <div className="mt-8 text-right">
            <h2 className="text-2xl font-bold">Total: ₹{cartTotal}</h2>
            <button onClick={() => setPage('checkout')} className="mt-4 bg-slate-800 text-white font-semibold py-3 px-8 rounded-lg hover:bg-slate-700">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );

  const renderHome = () => (
    <>
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
            <h1 className="text-5xl font-display font-bold text-slate-800 mb-4">Discover Your Radiance</h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Exquisite Indian attire for every occasion. Curated with love, crafted with passion.</p>
        </div>
        
        <div className="bg-white/50 backdrop-blur-md rounded-lg p-8 mb-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-slate-200/50">
            <div>
                <h2 className="text-3xl font-bold text-slate-800 mb-2 flex items-center gap-2">
                    <Wand2 className="h-8 w-8 text-slate-700" />
                    Need Help Choosing?
                </h2>
                <p className="text-slate-600 max-w-md">Let our AI Personal Stylist find the perfect outfit for you based on your features and occasion.</p>
            </div>
            <button 
                onClick={() => setIsAdvisorOpen(true)}
                className="bg-slate-800 text-white font-semibold py-3 px-8 rounded-lg hover:bg-slate-700 transition-colors duration-300 shadow-lg shrink-0"
            >
                Get Style Advice
            </button>
        </div>

        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8">
              {categories.map(category => (
                <button 
                  key={category} 
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategory === category ? 'bg-slate-800 text-white' : 'bg-white/50 backdrop-blur-sm text-slate-700 hover:bg-white/80'}`}
                >
                  {category}
                </button>
              ))}
          </div>
        </div>

        <h2 className="text-3xl font-bold text-slate-800 mb-8">{activeCategory} Collection</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {isLoading
            ? Array.from({ length: 12 }).map((_, i) => <SkeletonCard key={i} />)
            : filteredProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onViewProduct={handleViewProduct}
                  onAddToCart={(p) => handleAddToCart(p, 1)}
                />
              ))}
        </div>
        <div className="mt-16">
            <GamificationSpinner />
        </div>
      </div>
    </>
  );

  const renderPage = () => {
    switch(page) {
      case 'product':
        return selectedProduct && <ProductDetail product={selectedProduct} onBack={handleBackToProducts} onAddToCart={handleAddToCart} />;
      case 'cart':
          return renderCart();
      case 'checkout':
        return <Checkout cart={cart} updateCartQuantity={updateCartQuantity} cartTotal={cartTotal} onBack={() => setPage('cart')} onPaymentSuccess={handlePaymentSuccess} />;
      case 'order-tracking':
        return <OrderTracking orderStatus={orderStatus} orderNumber={orderNumber} onBackToHome={() => setPage('home')} />;
      case 'home':
      default:
        return renderHome();
    }
  }

  return (
    <div className="relative isolate flex flex-col min-h-screen bg-slate-50 font-sans">
      <InteractiveBackground />
      <Header 
        cartItemCount={cartItemCount} 
        onCartClick={() => setPage('cart')}
        onHomeClick={() => setPage('home')}
      />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer />
      <AddToCartPopup show={showPopup} count={cartItemCount} />
      <AIStyleAdvisor 
        isOpen={isAdvisorOpen} 
        onClose={() => setIsAdvisorOpen(false)} 
        onComplete={handleAdvisorComplete} 
      />
      {styleAdvice && (
        <StyleAdviceResult 
            advice={styleAdvice}
            onClose={() => setStyleAdvice(null)}
            onAddToCart={(p, q) => { handleAddToCart(p,q); setStyleAdvice(null); }}
            onViewProduct={(p) => { handleViewProduct(p); setStyleAdvice(null); }}
        />
      )}
    </div>
  );
};

export default App;