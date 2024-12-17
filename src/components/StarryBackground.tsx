import React, { useEffect } from 'react';

const StarryBackground = () => {
  useEffect(() => {
    const createStar = () => {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${Math.random() * 100}vw`;
      star.style.animationDuration = `${Math.random() * 10 + 15}s`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      return star;
    };

    const starryBg = document.getElementById('starry-bg');
    if (starryBg) {
      // Create initial stars
      for (let i = 0; i < 100; i++) {
        starryBg.appendChild(createStar());
      }
    }

    return () => {
      const starryBg = document.getElementById('starry-bg');
      if (starryBg) {
        starryBg.innerHTML = '';
      }
    };
  }, []);

  return (
    <div 
      id="starry-bg" 
      className="fixed inset-0 bg-gradient-to-b from-blue-900 to-blue-950 -z-20 overflow-hidden"
      style={{ background: 'linear-gradient(to bottom, #0f1729, #0a0f1d)' }}
    />
  );
};

export default StarryBackground;
