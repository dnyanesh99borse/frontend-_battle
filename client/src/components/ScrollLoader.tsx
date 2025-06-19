import { useState, useEffect, useRef } from 'react';

export function ScrollLoader() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const lastScrollY = useRef(0);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      const direction = currentScrollY > lastScrollY.current ? 'down' : 'up';
      
      // Only show loader when scrolling up and past 200px
      if (direction === 'up' && currentScrollY > 200) {
        setScrollDirection('up');
        setIsVisible(true);
        
        // Clear existing timeout
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        
        // Hide after 1.5 seconds
        timeoutRef.current = setTimeout(() => {
          setIsVisible(false);
        }, 1500);
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed top-1/2 left-1/2 z-50 pointer-events-none mouse-loader-enter">
      <div className="relative">
        {/* Mouse Shape */}
        <div className="w-16 h-24 bg-gradient-to-b from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-800 light:from-gray-200 light:to-gray-300 rounded-t-full rounded-b-2xl border-2 border-gray-600 dark:border-gray-500 light:border-gray-400 shadow-2xl relative mouse-scroll-animation">
          {/* Mouse Scroll Wheel */}
          <div className="absolute top-3 left-1/2 transform -translate-x-1/2 w-1.5 h-5 bg-gradient-to-b from-blue-500 to-purple-500 rounded-full animate-bounce shadow-lg"></div>
          
          {/* Scroll Direction Indicator */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
              <div className="w-0.5 h-8 bg-gradient-to-t from-blue-500 via-purple-500 to-transparent mt-1 animate-pulse"></div>
              <div className="text-xs text-gray-600 dark:text-gray-300 light:text-gray-700 mt-2 font-medium">Scrolling</div>
            </div>
          </div>
          
          {/* Loading dots */}
          <div className="absolute -bottom-14 left-1/2 transform -translate-x-1/2 flex space-x-1.5">
            <div className="w-2.5 h-2.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-bounce shadow-md" style={{ animationDelay: '0ms' }}></div>
            <div className="w-2.5 h-2.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-bounce shadow-md" style={{ animationDelay: '150ms' }}></div>
            <div className="w-2.5 h-2.5 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full animate-bounce shadow-md" style={{ animationDelay: '300ms' }}></div>
          </div>
          
          {/* Mouse Click Indicators */}
          <div className="absolute bottom-2 left-2 w-3 h-3 bg-gray-600 dark:bg-gray-500 light:bg-gray-400 rounded-sm opacity-60"></div>
          <div className="absolute bottom-2 right-2 w-3 h-3 bg-gray-600 dark:bg-gray-500 light:bg-gray-400 rounded-sm opacity-60"></div>
        </div>
        
        {/* Glow Effect */}
        <div className="absolute inset-0 w-16 h-24 bg-gradient-to-b from-blue-500/30 to-purple-500/30 rounded-t-full rounded-b-2xl blur-xl -z-10 animate-pulse"></div>
        
        {/* Outer Glow Ring */}
        <div className="absolute -inset-4 border-2 border-blue-500/20 rounded-full animate-ping"></div>
      </div>
    </div>
  );
}