
import React from 'react';

const SkeletonCard: React.FC = () => {
  return (
    <div className="border border-slate-200 rounded-lg p-4 animate-pulse bg-white">
      <div className="bg-slate-200 h-64 w-full rounded-md mb-4"></div>
      <div className="h-4 bg-slate-200 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-slate-200 rounded w-1/2"></div>
    </div>
  );
};

export default SkeletonCard;
