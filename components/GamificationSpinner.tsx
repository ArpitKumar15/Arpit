
import React, { useState } from 'react';
import { Ticket, Gift } from 'lucide-react';

const deals = [
  { text: '10% Off', color: '#60a5fa' },
  { text: 'Try Again', color: '#f87171' },
  { text: 'Free Shipping', color: '#4ade80' },
  { text: '₹500 Coupon', color: '#fbbf24' },
  { text: 'Try Again', color: '#f87171' },
  { text: '20% Off', color: '#c084fc' },
];

const GamificationSpinner: React.FC = () => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [result, setResult] = useState<string | null>(null);

  const spin = () => {
    if (isSpinning) return;
    setResult(null);
    setIsSpinning(true);
    const randomSpins = Math.floor(Math.random() * 5) + 5; // 5 to 9 full spins
    const randomStop = Math.floor(Math.random() * 360); // Random stop angle
    const newRotation = rotation + (360 * randomSpins) + randomStop;
    setRotation(newRotation);

    setTimeout(() => {
      setIsSpinning(false);
      const finalAngle = newRotation % 360;
      const sliceSize = 360 / deals.length;
      const resultIndex = Math.floor((360 - finalAngle) / sliceSize) % deals.length;
      setResult(`Congratulations! You won: ${deals[resultIndex].text}`);
    }, 5000); // Corresponds to transition duration in CSS
  };

  const segmentAngle = 360 / deals.length;

  return (
    <div className="bg-slate-100 rounded-lg p-8 text-center flex flex-col items-center">
      <h2 className="text-3xl font-bold text-slate-800 mb-2 flex items-center gap-2">
        <Gift className="h-8 w-8 text-slate-700" />
        Spin for a Daily Deal!
      </h2>
      <p className="text-slate-600 mb-8">One spin per day for exclusive discounts.</p>
      
      <div className="relative w-80 h-80 mb-8">
        <div 
          className="absolute inset-0 rounded-full transition-transform duration-[5000ms] ease-out"
          style={{ transform: `rotate(${rotation}deg)` }}
        >
          {deals.map((deal, i) => (
            <div 
              key={i}
              className="absolute w-1/2 h-1/2 origin-bottom-right"
              style={{
                transform: `rotate(${i * segmentAngle}deg)`,
                clipPath: `polygon(0 0, 100% 0, 100% 100%, 0 0)`
              }}
            >
              <div 
                className="absolute w-full h-full flex items-center justify-center"
                style={{
                  transform: `rotate(${segmentAngle / 2}deg) translate(0, -50%)`,
                  backgroundColor: deal.color
                }}
              >
                <span className="text-white font-bold text-sm">{deal.text}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white rounded-full border-4 border-slate-300 shadow-lg"></div>
        </div>
        <div 
          className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-2"
          style={{ clipPath: 'polygon(50% 100%, 0 0, 100% 0)' }}
        >
          <div className="w-8 h-8 bg-slate-800"></div>
        </div>
      </div>
      
      <button 
        onClick={spin} 
        disabled={isSpinning}
        className="bg-slate-800 text-white font-semibold py-3 px-12 rounded-lg flex items-center justify-center gap-2 hover:bg-slate-700 transition-colors duration-300 disabled:bg-slate-400 shadow-lg"
      >
        <Ticket className="h-5 w-5" />
        {isSpinning ? 'Spinning...' : 'Spin'}
      </button>

      {result && (
        <p className="mt-6 text-lg font-semibold text-green-600 bg-green-100 p-3 rounded-lg">{result}</p>
      )}
    </div>
  );
};

export default GamificationSpinner;