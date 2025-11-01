
import React from 'react';
import { Twitter, Instagram, Facebook } from 'lucide-react';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-100 border-t border-slate-200 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <Logo />
          <p className="text-sm text-slate-500">&copy; {new Date().getFullYear()} Glow Gearz. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-slate-500 hover:text-slate-800" aria-label="Twitter"><Twitter /></a>
            <a href="#" className="text-slate-500 hover:text-slate-800" aria-label="Instagram"><Instagram /></a>
            <a href="#" className="text-slate-500 hover:text-slate-800" aria-label="Facebook"><Facebook /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
