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
      
      // Only show loader when scrolling down and past 100px with significant scroll movement
      if (direction === 'down' && currentScrollY > 100 && Math.abs(currentScrollY - lastScrollY.current) > 10) {
        setScrollDirection('down');
        setIsVisible(true);
        
        // Clear existing timeout
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
        
        // Hide after 800 milliseconds for brief appearance
        timeoutRef.current = setTimeout(() => {
          setIsVisible(false);
        }, 800);
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
        <div className="w-12 h-20 bg-gradient-to-b from-slate-200 via-slate-100 to-slate-200 dark:from-slate-700 dark:via-slate-600 dark:to-slate-700 rounded-t-full rounded-b-xl border border-slate-300 dark:border-slate-500 shadow-2xl relative mouse-scroll-animation">
          {/* Mouse Scroll Wheel */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1 h-3 bg-gradient-to-b from-blue-500 to-cyan-400 rounded-full animate-bounce shadow-sm"></div>
          
          {/* Scroll Direction Indicator - Down Arrow */}
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center">
              <div className="w-0.5 h-4 bg-gradient-to-b from-blue-500 to-transparent animate-pulse"></div>
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
            </div>
          </div>
          
          {/* Sleek Loading Indicator */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-1">
              <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></div>
              <div className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '200ms' }}></div>
              <div className="w-1 h-1 bg-blue-500 rounded-full animate-pulse" style={{ animationDelay: '400ms' }}></div>
            </div>
          </div>
          
          {/* Mouse Button Areas */}
          <div className="absolute bottom-1.5 left-1.5 w-2 h-2 bg-slate-300 dark:bg-slate-600 rounded-sm opacity-70"></div>
          <div className="absolute bottom-1.5 right-1.5 w-2 h-2 bg-slate-300 dark:bg-slate-600 rounded-sm opacity-70"></div>
          
          {/* Center Line */}
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-0.5 h-8 bg-slate-300 dark:bg-slate-600 opacity-40"></div>
        </div>
        
        {/* Subtle Glow Effect */}
        <div className="absolute inset-0 w-12 h-20 bg-gradient-to-b from-blue-400/20 to-cyan-400/20 rounded-t-full rounded-b-xl blur-lg -z-10"></div>
        
        {/* Minimal Outer Ring */}
        <div className="absolute -inset-2 border border-blue-400/30 rounded-full animate-ping opacity-50"></div>
      </div>
    </div>
  );
}