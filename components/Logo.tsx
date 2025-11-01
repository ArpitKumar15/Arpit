import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center gap-3">
       <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-slate-800">
        <path d="M18 33C26.2843 33 33 26.2843 33 18C33 9.71573 26.2843 3 18 3C9.71573 3 3 9.71573 3 18C3 26.2843 9.71573 33 18 33Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M24 19.5C24 22.2614 21.9853 24.5 19.5 24.5H15V11.5H21C22.6569 11.5 24 12.8431 24 14.5V19.5Z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M15 18H20.25" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="text-2xl font-bold font-display text-slate-800">
        Glow Gearz
      </span>
    </div>
  );
};

export default Logo;
