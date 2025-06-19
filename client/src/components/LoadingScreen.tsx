import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 3000; // 3 seconds
    const interval = 50; // Update every 50ms
    const increment = (100 * interval) / duration;

    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + increment;
        if (newProgress >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Small delay before completing
          return 100;
        }
        return newProgress;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div className="text-center">
        {/* Loading Animation */}
        <div className="relative mb-8">
          <div className="w-16 h-16 border-4 border-gray-800 border-t-white rounded-full animate-spin mx-auto"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent border-t-blue-500 rounded-full animate-spin mx-auto" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
        </div>

        {/* Progress Bar */}
        <div className="w-80 max-w-sm mx-auto">
          <div className="bg-gray-800 rounded-full h-2 mb-4">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          
          {/* Loading Text */}
          <div className="text-white text-lg font-medium mb-2">
            {progress < 30 && "Initializing..."}
            {progress >= 30 && progress < 60 && "Loading Components..."}
            {progress >= 60 && progress < 90 && "Setting up Dashboard..."}
            {progress >= 90 && "Almost Ready..."}
          </div>
          
          {/* Progress Percentage */}
          <div className="text-gray-400 text-sm">
            {Math.round(progress)}%
          </div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-500 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}