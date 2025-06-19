import { BarChart3, TrendingUp, Users, Shield, Zap, Globe, Database, Brain } from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Real-time data visualization with interactive dashboards and customizable charts.",
    color: "text-blue-500"
  },
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Machine learning algorithms provide predictive analytics and automated insights.",
    color: "text-purple-500"
  },
  {
    icon: TrendingUp,
    title: "Forecasting Engine",
    description: "Accurate revenue and performance forecasting with scenario planning capabilities.",
    color: "text-green-500"
  },
  {
    icon: Database,
    title: "Data Integration",
    description: "Connect multiple data sources seamlessly with automated data synchronization.",
    color: "text-orange-500"
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level encryption with role-based access control and audit trails.",
    color: "text-red-500"
  },
  {
    icon: Globe,
    title: "Multi-Currency Support",
    description: "Global business support with real-time currency conversion and localization.",
    color: "text-cyan-500"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Real-time collaboration tools with commenting and sharing capabilities.",
    color: "text-indigo-500"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance with sub-second query responses and instant updates.",
    color: "text-yellow-500"
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Powerful Features for Modern Business
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to transform your data into actionable insights and drive business growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              <div className={`w-12 h-12 ${feature.color} bg-opacity-10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-6 h-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}