import { useState, useEffect, useCallback } from "react";
import { Star, Sparkles, ArrowRight, PlayCircle, BarChart3, TrendingUp, PieChart, Activity, DollarSign, Users, Calendar, Target } from "lucide-react";

const backgroundImages = [
  {
    category: "reports",
    images: [
      {
        component: "ReportCard",
        alt: "Financial Report",
        className: "top-16 left-8 w-72 h-52"
      },
      {
        component: "AnalyticsReport", 
        alt: "Analytics Dashboard",
        className: "bottom-24 right-12 w-80 h-56"
      }
    ]
  },
  {
    category: "dashboards",
    images: [
      {
        component: "DashboardCard",
        alt: "Executive Dashboard",
        className: "top-32 right-16 w-76 h-54"
      },
      {
        component: "MetricsDashboard",
        alt: "KPI Dashboard", 
        className: "bottom-32 left-16 w-72 h-48"
      }
    ]
  },
  {
    category: "forecasts",
    images: [
      {
        component: "ForecastChart",
        alt: "Revenue Forecast",
        className: "top-1/3 left-24 w-80 h-52"
      },
      {
        component: "TrendAnalysis",
        alt: "Trend Analysis",
        className: "bottom-1/3 right-24 w-72 h-50"
      }
    ]
  },
  {
    category: "consolidations",
    images: [
      {
        component: "ConsolidationTable",
        alt: "Financial Consolidation",
        className: "top-1/2 right-8 w-84 h-56"
      },
      {
        component: "ComparisonChart",
        alt: "Multi-Entity Comparison",
        className: "bottom-36 left-1/4 w-76 h-52"
      }
    ]
  }
];

const trustBadges = [
  { platform: "Capterra", rating: "4.8" },
  { platform: "G2", rating: "4.8" },
  { platform: "Xero", reviews: "350+" },
  { platform: "QuickBooks", reviews: "550+" }
];

export default function Home() {
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [particles, setParticles] = useState<Array<{id: number, left: number, delay: number, size: number}>>([]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (!isMobile) {
      const particleArray = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        size: Math.random() * 4 + 2
      }));
      setParticles(particleArray);
    }
  }, [isMobile]);

  const handleTermHover = useCallback((category: string) => {
    setHoveredCategory(category);
  }, []);

  const handleTermLeave = useCallback(() => {
    setHoveredCategory(null);
  }, []);

  const handleCtaClick = () => {
    console.log('Start 14-day free trial clicked');
  };

  const handleSecondaryClick = () => {
    console.log('See what we do clicked');
  };

  // Mock BI Components
  const ReportCard = ({ className }: { className: string }) => (
    <div className={`${className} bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 rounded-lg p-4 text-white`}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-slate-200">Revenue Report</h3>
        <BarChart3 className="w-4 h-4 text-blue-400" />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-xs">
          <span className="text-slate-400">Q4 2024</span>
          <span className="text-green-400">+12.5%</span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-2">
          <div className="bg-blue-500 h-2 rounded-full w-3/4"></div>
        </div>
        <div className="text-lg font-bold text-white">$2.4M</div>
      </div>
    </div>
  );

  const AnalyticsReport = ({ className }: { className: string }) => (
    <div className={`${className} bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 rounded-lg p-4 text-white`}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-slate-200">User Analytics</h3>
        <Users className="w-4 h-4 text-purple-400" />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="text-center">
          <div className="text-xl font-bold text-white">94.2%</div>
          <div className="text-xs text-slate-400">Retention</div>
        </div>
        <div className="text-center">
          <div className="text-xl font-bold text-white">1.2M</div>
          <div className="text-xs text-slate-400">Active Users</div>
        </div>
      </div>
      <div className="mt-3 flex space-x-1">
        {[65, 78, 84, 67, 89, 92, 85].map((height, i) => (
          <div key={i} className="bg-purple-500 rounded-sm w-2" style={{ height: `${height/2}px` }}></div>
        ))}
      </div>
    </div>
  );

  const DashboardCard = ({ className }: { className: string }) => (
    <div className={`${className} bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 rounded-lg p-4 text-white`}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-slate-200">Executive Dashboard</h3>
        <Activity className="w-4 h-4 text-cyan-400" />
      </div>
      <div className="space-y-3">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-cyan-500/20 rounded-full flex items-center justify-center">
            <DollarSign className="w-4 h-4 text-cyan-400" />
          </div>
          <div>
            <div className="text-sm font-semibold">$4.2M</div>
            <div className="text-xs text-slate-400">Total Revenue</div>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-green-500/20 rounded-full flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-green-400" />
          </div>
          <div>
            <div className="text-sm font-semibold">+18.5%</div>
            <div className="text-xs text-slate-400">Growth Rate</div>
          </div>
        </div>
      </div>
    </div>
  );

  const MetricsDashboard = ({ className }: { className: string }) => (
    <div className={`${className} bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 rounded-lg p-4 text-white`}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-slate-200">KPI Overview</h3>
        <Target className="w-4 h-4 text-orange-400" />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="text-xs text-slate-400">Sales Target</span>
          <span className="text-xs text-green-400">95%</span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-1.5">
          <div className="bg-green-500 h-1.5 rounded-full w-[95%]"></div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs text-slate-400">Customer Satisfaction</span>
          <span className="text-xs text-blue-400">87%</span>
        </div>
        <div className="w-full bg-slate-700 rounded-full h-1.5">
          <div className="bg-blue-500 h-1.5 rounded-full w-[87%]"></div>
        </div>
      </div>
    </div>
  );

  const ForecastChart = ({ className }: { className: string }) => (
    <div className={`${className} bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 rounded-lg p-4 text-white`}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-slate-200">Revenue Forecast</h3>
        <TrendingUp className="w-4 h-4 text-emerald-400" />
      </div>
      <div className="relative h-24">
        <svg viewBox="0 0 100 40" className="w-full h-full">
          <polyline
            fill="none"
            stroke="rgb(16 185 129)"
            strokeWidth="1.5"
            points="0,35 20,30 40,25 60,18 80,12 100,8"
            className="drop-shadow-sm"
          />
          <defs>
            <linearGradient id="forecast-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="rgb(16 185 129)" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="rgb(16 185 129)" stopOpacity="0"/>
            </linearGradient>
          </defs>
          <polygon
            fill="url(#forecast-gradient)"
            points="0,35 20,30 40,25 60,18 80,12 100,8 100,40 0,40"
          />
        </svg>
      </div>
      <div className="text-xs text-slate-400 mt-2">Next 6 months projection</div>
    </div>
  );

  const TrendAnalysis = ({ className }: { className: string }) => (
    <div className={`${className} bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 rounded-lg p-4 text-white`}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-slate-200">Trend Analysis</h3>
        <Calendar className="w-4 h-4 text-indigo-400" />
      </div>
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
            <span className="text-xs text-slate-300">Monthly Growth</span>
          </div>
          <span className="text-xs text-indigo-400">+24%</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
            <span className="text-xs text-slate-300">Customer Acquisition</span>
          </div>
          <span className="text-xs text-cyan-400">+31%</span>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
            <span className="text-xs text-slate-300">Market Share</span>
          </div>
          <span className="text-xs text-purple-400">+12%</span>
        </div>
      </div>
    </div>
  );

  const ConsolidationTable = ({ className }: { className: string }) => (
    <div className={`${className} bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 rounded-lg p-4 text-white`}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-slate-200">Financial Consolidation</h3>
        <PieChart className="w-4 h-4 text-yellow-400" />
      </div>
      <div className="space-y-2 text-xs">
        <div className="grid grid-cols-3 gap-2 text-slate-400 border-b border-slate-600 pb-1">
          <span>Entity</span>
          <span>Revenue</span>
          <span>Growth</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <span className="text-slate-300">US Division</span>
          <span className="text-white">$1.2M</span>
          <span className="text-green-400">+15%</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <span className="text-slate-300">EU Division</span>
          <span className="text-white">$890K</span>
          <span className="text-green-400">+8%</span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <span className="text-slate-300">APAC Division</span>
          <span className="text-white">$650K</span>
          <span className="text-green-400">+22%</span>
        </div>
      </div>
    </div>
  );

  const ComparisonChart = ({ className }: { className: string }) => (
    <div className={`${className} bg-slate-800/80 backdrop-blur-sm border border-slate-600/50 rounded-lg p-4 text-white`}>
      <div className="flex items-center justify-between mb-3">
        <h3 className="text-sm font-semibold text-slate-200">Multi-Entity Comparison</h3>
        <BarChart3 className="w-4 h-4 text-pink-400" />
      </div>
      <div className="flex items-end space-x-2 h-16">
        <div className="flex flex-col items-center space-y-1">
          <div className="w-4 bg-pink-500 rounded-t" style={{ height: '45px' }}></div>
          <span className="text-xs text-slate-400">Q1</span>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <div className="w-4 bg-purple-500 rounded-t" style={{ height: '52px' }}></div>
          <span className="text-xs text-slate-400">Q2</span>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <div className="w-4 bg-cyan-500 rounded-t" style={{ height: '38px' }}></div>
          <span className="text-xs text-slate-400">Q3</span>
        </div>
        <div className="flex flex-col items-center space-y-1">
          <div className="w-4 bg-emerald-500 rounded-t" style={{ height: '60px' }}></div>
          <span className="text-xs text-slate-400">Q4</span>
        </div>
      </div>
    </div>
  );

  const renderComponent = (componentName: string, className: string) => {
    switch (componentName) {
      case "ReportCard": return <ReportCard className={className} />;
      case "AnalyticsReport": return <AnalyticsReport className={className} />;
      case "DashboardCard": return <DashboardCard className={className} />;
      case "MetricsDashboard": return <MetricsDashboard className={className} />;
      case "ForecastChart": return <ForecastChart className={className} />;
      case "TrendAnalysis": return <TrendAnalysis className={className} />;
      case "ConsolidationTable": return <ConsolidationTable className={className} />;
      case "ComparisonChart": return <ComparisonChart className={className} />;
      default: return null;
    }
  };

  return (
    <div className="gradient-bg min-h-screen overflow-x-hidden">
      {/* Floating Elements */}
      {!isMobile && (
        <>
          <div className="floating-element w-20 h-20 top-10 right-20" style={{ animationDelay: '0s' }}></div>
          <div className="floating-element w-12 h-12 bottom-20 left-10" style={{ animationDelay: '2s' }}></div>
          <div className="floating-element w-16 h-16 top-1/3 left-1/4" style={{ animationDelay: '4s' }}></div>
          
          {/* Floating Particles */}
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="particle"
              style={{
                left: `${particle.left}%`,
                width: `${particle.size}px`,
                height: `${particle.size}px`,
                animationDelay: `${particle.delay}s`
              }}
            />
          ))}
        </>
      )}

      {/* Background Images Container */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" id="backgroundContainer">
        {backgroundImages.map((categoryData) =>
          categoryData.images.map((image, index) => (
            <div
              key={`${categoryData.category}-${index}`}
              className={`bg-image ${categoryData.category}-image ${image.className} ${
                hoveredCategory === categoryData.category ? 'highlighted' : ''
              }`}
              data-category={categoryData.category}
            >
              {renderComponent(image.component, "w-full h-full")}
            </div>
          ))
        )}
      </div>

      {/* Main Content */}
      <div className="relative z-20 min-h-screen flex flex-col">
        {/* Trust Badges */}
        <div className="pt-8 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
              {trustBadges.map((badge, index) => (
                <div key={index} className="trust-badge rounded-full px-4 py-2 flex items-center space-x-2">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-white text-sm font-medium">
                    {badge.rating ? `${badge.rating} rating on` : `${badge.reviews} reviews on`}
                  </span>
                  <span className="text-white font-bold">{badge.platform}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Hero Section */}
        <div className="flex-1 flex items-center justify-center px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            {/* Main Headline */}
            <h1 className="main-title text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Create{' '}
              <span
                className="hover-term"
                data-category="reports"
                onMouseEnter={() => handleTermHover('reports')}
                onMouseLeave={handleTermLeave}
              >
                reports
              </span>
              ,{' '}
              <span
                className="hover-term"
                data-category="forecasts"
                onMouseEnter={() => handleTermHover('forecasts')}
                onMouseLeave={handleTermLeave}
              >
                forecasts
              </span>
              ,<br />
              <span
                className="hover-term"
                data-category="dashboards"
                onMouseEnter={() => handleTermHover('dashboards')}
                onMouseLeave={handleTermLeave}
              >
                dashboards
              </span>{' '}
              &{' '}
              <span
                className="hover-term"
                data-category="consolidations"
                onMouseEnter={() => handleTermHover('consolidations')}
                onMouseLeave={handleTermLeave}
              >
                consolidations
              </span>
            </h1>

            {/* Subheading */}
            <div className="flex items-center justify-center mb-12">
              <Sparkles className="sparkle w-6 h-6 mr-2" />
              <h2 className="text-xl md:text-2xl text-white font-medium">Now with AI-insights</h2>
            </div>

            {/* CTA Button */}
            <div className="mb-6">
              <button
                onClick={handleCtaClick}
                className="cta-button text-white font-semibold px-8 py-4 rounded-lg text-lg shadow-lg inline-flex items-center"
              >
                Start 14-day free trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>

            {/* Secondary Link */}
            <div>
              <button
                onClick={handleSecondaryClick}
                className="secondary-link text-base inline-flex items-center bg-transparent border-none cursor-pointer"
              >
                <PlayCircle className="w-5 h-5 mr-2" />
                See what we do
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
