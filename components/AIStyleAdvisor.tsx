import React, { useState } from 'react';
import { X, Sparkles, Loader2, Camera } from 'lucide-react';
import type { StyleAdvisorInput } from '../types';
import { getAIStyleAdvice } from '../services/geminiService';
import FaceScanOverlay from './FaceScanOverlay';

interface AIStyleAdvisorProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (advice: { productId: number; explanation:string; }) => void;
}

const AIStyleAdvisor: React.FC<AIStyleAdvisorProps> = ({ isOpen, onClose, onComplete }) => {
  const [formState, setFormState] = useState<StyleAdvisorInput>({
    segment: 'Womenswear',
    faceShape: '',
    skinTone: '',
    height: '',
    occasion: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isFaceScanOpen, setIsFaceScanOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSegmentChange = (segment: 'Womenswear' | 'Menswear') => {
      setFormState(prev => ({...prev, segment}));
  }
  
  const handleFaceScanComplete = (faceShape: string) => {
      setFormState(prev => ({...prev, faceShape}));
      setIsFaceScanOpen(false);
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!formState.faceShape || !formState.skinTone || !formState.height || !formState.occasion) {
        setError('Please fill in all fields to get your personalized advice.');
        return;
    }
    setError(null);
    setIsLoading(true);

    try {
      const advice = await getAIStyleAdvice(formState);
      if (advice) {
        onComplete(advice);
      } else {
        setError('Sorry, we couldn\'t generate advice at this time. Please try again.');
      }
    } catch (err) {
      console.error(err);
      setError('An unexpected error occurred. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return null;
  }
  
  const renderForm = () => (
    <form onSubmit={handleSubmit} className="space-y-4">
        <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">I'm shopping for...</label>
            <div className="flex gap-2">
                <button type="button" onClick={() => handleSegmentChange('Womenswear')} className={`flex-1 p-3 rounded-lg border-2 text-sm font-semibold ${formState.segment === 'Womenswear' ? 'border-slate-800 bg-slate-100' : 'border-slate-300 bg-white'}`}>Womenswear</button>
                <button type="button" onClick={() => handleSegmentChange('Menswear')} className={`flex-1 p-3 rounded-lg border-2 text-sm font-semibold ${formState.segment === 'Menswear' ? 'border-slate-800 bg-slate-100' : 'border-slate-300 bg-white'}`}>Menswear</button>
            </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label htmlFor="faceShape" className="block text-sm font-medium text-slate-700">Face Shape</label>
                 <div className="flex gap-2 items-stretch mt-1">
                    <select id="faceShape" name="faceShape" value={formState.faceShape} onChange={handleChange} className="w-full p-2 border border-slate-300 rounded-md block" required>
                        <option value="">Select...</option>
                        <option value="Oval">Oval</option>
                        <option value="Round">Round</option>
                        <option value="Square">Square</option>
                        <option value="Heart">Heart</option>
                        <option value="Diamond">Diamond</option>
                    </select>
                    <button type="button" onClick={() => setIsFaceScanOpen(true)} className="p-2 border border-slate-300 rounded-md hover:bg-slate-100" title="Scan face shape">
                        <Camera className="h-5 w-5 text-slate-600" />
                    </button>
                </div>
            </div>
            <div>
                <label htmlFor="skinTone" className="block text-sm font-medium text-slate-700">Skin Tone</label>
                <select id="skinTone" name="skinTone" value={formState.skinTone} onChange={handleChange} className="w-full mt-1 p-2 border border-slate-300 rounded-md" required>
                    <option value="">Select...</option>
                    <option value="Fair (porcelain to light beige)">Fair (porcelain to light beige)</option>
                    <option value="Light (creamy to sand)">Light (creamy to sand)</option>
                    <option value="Medium (olive to tan)">Medium (olive to tan)</option>
                    <option value="Tan (caramel to light brown)">Tan (caramel to light brown)</option>
                    <option value="Deep (dark brown to black)">Deep (dark brown to black)</option>
                </select>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label htmlFor="height" className="block text-sm font-medium text-slate-700">Height (cm)</label>
                <input type="number" id="height" name="height" value={formState.height} onChange={handleChange} placeholder="e.g. 165" className="w-full mt-1 p-2 border border-slate-300 rounded-md" required />
            </div>
            <div>
                <label htmlFor="occasion" className="block text-sm font-medium text-slate-700">Occasion</label>
                <select id="occasion" name="occasion" value={formState.occasion} onChange={handleChange} className="w-full mt-1 p-2 border border-slate-300 rounded-md" required>
                    <option value="">Select...</option>
                    <option value="Wedding Guest">Wedding Guest</option>
                    <option value="Festive Celebration (Diwali, Eid, etc.)">Festive Celebration</option>
                    <option value="Formal Party or Reception">Formal Party / Reception</option>
                    <option value="Casual Day Out">Casual Day Out</option>
                    <option value="Office or Work Event">Office / Work Event</option>
                </select>
            </div>
        </div>

        {error && <p className="text-sm text-red-600 bg-red-100 p-3 rounded-md">{error}</p>}
        
        <div className="pt-4">
            <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-slate-800 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-slate-700 transition-colors duration-300 disabled:bg-slate-400"
            >
                {isLoading ? (
                    <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Finding Your Perfect Style...
                    </>
                ) : (
                    <>
                        <Sparkles className="h-5 w-5" />
                        Get My Style Advice
                    </>
                )}
            </button>
        </div>
    </form>
  );

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-2xl w-full max-w-2xl m-4 transform transition-all duration-300 scale-100 max-h-[90vh] flex flex-col">
          <div className="flex justify-between items-center p-6 border-b border-slate-200">
            <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                <Sparkles className="h-6 w-6 text-slate-700" />
                AI Personal Stylist
            </h2>
            <button onClick={onClose} disabled={isLoading} className="text-slate-500 hover:text-slate-800 disabled:opacity-50">
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="p-6 overflow-y-auto">
            {renderForm()}
          </div>
        </div>
      </div>
      <FaceScanOverlay 
        isOpen={isFaceScanOpen}
        onClose={() => setIsFaceScanOpen(false)}
        onScanComplete={handleFaceScanComplete}
      />
    </>
  );
};

export default AIStyleAdvisor;
