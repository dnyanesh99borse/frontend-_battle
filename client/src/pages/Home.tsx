import { useState, useEffect } from "react";
import { Star, Sparkles, ArrowRight, PlayCircle } from "lucide-react";

const backgroundImages = [
  {
    category: "reports",
    images: [
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        alt: "Financial dashboard",
        className: "top-20 left-10 w-64 h-48"
      },
      {
        url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        alt: "Analytics report",
        className: "bottom-32 right-16 w-72 h-52"
      }
    ]
  },
  {
    category: "dashboards",
    images: [
      {
        url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        alt: "BI dashboard",
        className: "top-40 right-20 w-80 h-56"
      },
      {
        url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        alt: "Executive dashboard",
        className: "bottom-20 left-20 w-64 h-44"
      }
    ]
  },
  {
    category: "forecasts",
    images: [
      {
        url: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        alt: "Forecast charts",
        className: "top-1/3 left-32 w-72 h-48"
      },
      {
        url: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        alt: "Budget forecast",
        className: "bottom-1/3 right-32 w-68 h-50"
      }
    ]
  },
  {
    category: "consolidations",
    images: [
      {
        url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        alt: "Consolidation spreadsheet",
        className: "top-1/2 right-10 w-76 h-54"
      },
      {
        url: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
        alt: "Consolidation dashboard",
        className: "bottom-40 left-1/3 w-70 h-48"
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

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleTermHover = (category: string) => {
    setHoveredCategory(category);
  };

  const handleTermLeave = () => {
    setHoveredCategory(null);
  };

  const handleCtaClick = () => {
    console.log('Start 14-day free trial clicked');
  };

  const handleSecondaryClick = () => {
    console.log('See what we do clicked');
  };

  return (
    <div className="gradient-bg min-h-screen overflow-x-hidden">
      {/* Floating Elements */}
      {!isMobile && (
        <>
          <div className="floating-element w-20 h-20 top-10 right-20" style={{ animationDelay: '0s' }}></div>
          <div className="floating-element w-12 h-12 bottom-20 left-10" style={{ animationDelay: '2s' }}></div>
          <div className="floating-element w-16 h-16 top-1/3 left-1/4" style={{ animationDelay: '4s' }}></div>
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
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
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
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
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
