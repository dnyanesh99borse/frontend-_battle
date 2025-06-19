import { useEffect, useState } from 'react';

const stats = [
  { number: 50000, suffix: '+', label: 'Active Users', duration: 2000 },
  { number: 99.9, suffix: '%', label: 'Uptime Guarantee', duration: 1500 },
  { number: 250, suffix: '+', label: 'Integrations', duration: 1800 },
  { number: 4.9, suffix: '/5', label: 'Customer Rating', duration: 1200 }
];

function AnimatedNumber({ target, suffix, duration }: { target: number; suffix: string; duration: number }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
      setCurrent(prev => {
        const next = prev + increment;
        if (next >= target) {
          clearInterval(timer);
          return target;
        }
        return next;
      });
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration]);

  return (
    <span className="text-4xl md:text-5xl font-bold text-blue-600 dark:text-blue-400">
      {Math.floor(current).toLocaleString()}{suffix}
    </span>
  );
}

export function StatsSection() {
  return (
    <section className="py-16 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by Businesses Worldwide
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Join thousands of companies that rely on our platform for their business intelligence needs.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="mb-2">
                <AnimatedNumber target={stat.number} suffix={stat.suffix} duration={stat.duration} />
              </div>
              <p className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}