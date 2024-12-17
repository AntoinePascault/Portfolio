import React from 'react';
import { useTheme } from '../context/ThemeContext';

export default function SimpleFooter() {
  const { theme } = useTheme();

  return (
    <footer className={`relative py-6 ${
      theme === 'light'
        ? 'bg-gradient-to-r from-[#f0f0e8] via-[#e8e8e0] to-[#f0f0e8] bg-[length:200%_100%] animate-gradient border-t border-gray-200/50'
        : 'bg-gradient-to-b from-[#0f1729]/80 to-[#0a0f1d]/90 border-t border-gray-800/50'
    }`}>
      <div className="container relative mx-auto px-4 text-center">
        <p className={`text-sm ${
          theme === 'light' 
            ? 'text-gray-500' 
            : 'text-gray-400'
        }`}>
          &copy; 2024 Antoine Pascault. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
