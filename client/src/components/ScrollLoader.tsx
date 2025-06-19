import { useState, useEffect } from 'react';

export function ScrollLoader() {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let progressInterval: NodeJS.Timeout;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      if (scrollTop > 100) {
        setIsVisible(true);
        setProgress(0);
        
        // Simulate loading progress
        let currentProgress = 0;
        progressInterval = setInterval(() => {
          currentProgress += 10;
          setProgress(currentProgress);
          if (currentProgress >= 100) {
            clearInterval(progressInterval);
            timeout = setTimeout(() => setIsVisible(false), 500);
          }
        }, 50);
      }

      clearTimeout(timeout);
      clearInterval(progressInterval);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
      clearInterval(progressInterval);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
      <div className="bg-black/80 backdrop-blur-sm rounded-lg p-6 min-w-[200px]">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <div className="text-white text-sm font-medium">Loading content...</div>
        </div>
        <div className="mt-3 w-full bg-gray-700 rounded-full h-1">
          <div 
            className="bg-blue-500 h-1 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}