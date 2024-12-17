import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Heart } from 'lucide-react';

export default function Footer() {
  const { theme } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`py-8 ${
      theme === 'light' 
        ? 'bg-white border-t border-gray-100' 
        : 'bg-gray-900/50 border-t border-gray-800'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className={`text-sm ${
            theme === 'light' ? 'text-gray-600' : 'text-gray-400'
          }`}>
            © {currentYear} Antoine Pascault. Tous droits réservés.
          </div>
          
          <div className="flex items-center gap-2">
            <span className={`text-sm ${
              theme === 'light' ? 'text-gray-600' : 'text-gray-400'
            }`}>
              Fait avec
            </span>
            <Heart className={`w-4 h-4 ${
              theme === 'light' ? 'text-red-500' : 'text-red-400'
            }`} />
            <span className={`text-sm ${
              theme === 'light' ? 'text-gray-600' : 'text-gray-400'
            }`}>
              en France
            </span>
          </div>
          
          <div className={`text-xs ${
            theme === 'light' ? 'text-gray-500' : 'text-gray-500'
          }`}>
            Développé avec React, TypeScript et Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
}
