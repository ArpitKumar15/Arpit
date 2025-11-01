import React, { useState, useEffect, useRef } from 'react';
import { X, Camera, ScanFace } from 'lucide-react';

interface FaceScanOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  onScanComplete: (faceShape: string) => void;
}

const faceShapes = ['Oval', 'Round', 'Square', 'Heart', 'Diamond'];

const FaceScanOverlay: React.FC<FaceScanOverlayProps> = ({ isOpen, onClose, onScanComplete }) => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanMessage, setScanMessage] = useState('Position your face in the oval');
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let stream: MediaStream | null = null;
    if (isOpen) {
      // Reset state when opening
      setIsScanning(false);
      setScanMessage('Position your face in the oval');
      
      // Access camera
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(s => {
          stream = s;
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch(err => {
          console.error("Error accessing camera: ", err);
          setScanMessage('Camera access denied. Please enable permissions.');
        });
    }

    return () => {
        // Stop camera stream when closed or component unmounts
        if(stream) {
            stream.getTracks().forEach(track => track.stop());
        }
        if (videoRef.current) {
          videoRef.current.srcObject = null;
        }
    }
  }, [isOpen]);


  const handleScan = () => {
    setIsScanning(true);
    setScanMessage('Scanning...');
    setTimeout(() => {
      setScanMessage('Analyzing features...');
      setTimeout(() => {
        const randomShape = faceShapes[Math.floor(Math.random() * faceShapes.length)];
        onScanComplete(randomShape);
        onClose();
      }, 1500);
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-[60] p-4">
      <div className="bg-slate-800 rounded-lg shadow-2xl w-full max-w-md m-4 transform transition-all duration-300 scale-100 flex flex-col text-white">
        <div className="flex justify-between items-center p-4 border-b border-slate-700">
          <h2 className="text-lg font-bold flex items-center gap-2"><ScanFace /> Face Shape Analysis</h2>
          <button onClick={onClose} className="text-slate-400 hover:text-white">
            <X />
          </button>
        </div>
        <div className="p-6 flex flex-col items-center justify-center gap-4">
            <div className="relative w-64 h-80 rounded-full overflow-hidden border-4 border-slate-500 flex items-center justify-center bg-slate-900">
                <video ref={videoRef} autoPlay muted playsInline className="absolute top-0 left-0 w-full h-full object-cover transform scale-x-[-1]"></video>
                <div className="absolute inset-0 bg-black/30"></div>
                <div className="absolute border-2 border-dashed border-white/50 w-[90%] h-[95%] rounded-full"></div>
                <p className="z-10 text-center font-semibold bg-black/50 p-2 rounded">{scanMessage}</p>
            </div>
            <button
                onClick={handleScan}
                disabled={isScanning}
                className="w-full bg-slate-600 font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-slate-500 transition-colors duration-300 disabled:bg-slate-700 disabled:cursor-not-allowed"
            >
                <Camera className={`h-5 w-5 ${isScanning ? 'animate-pulse' : ''}`} />
                {isScanning ? 'Processing...' : 'Scan My Face'}
            </button>
        </div>
      </div>
    </div>
  );
};

export default FaceScanOverlay;
