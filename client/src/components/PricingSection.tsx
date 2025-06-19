import { Check, Zap, Crown, Building } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    icon: Zap,
    price: 29,
    period: 'month',
    description: 'Perfect for small teams getting started with business intelligence.',
    features: [
      'Up to 5 users',
      'Basic dashboards',
      '10 data sources',
      'Email support',
      'Monthly reports',
      '1GB storage'
    ],
    popular: false,
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    name: 'Professional',
    icon: Crown,
    price: 79,
    period: 'month',
    description: 'Advanced features for growing businesses with complex needs.',
    features: [
      'Up to 25 users',
      'Advanced analytics',
      'Unlimited data sources',
      'Priority support',
      'Real-time reports',
      '10GB storage',
      'AI insights',
      'Custom branding'
    ],
    popular: true,
    gradient: 'from-purple-500 to-purple-600'
  },
  {
    name: 'Enterprise',
    icon: Building,
    price: 199,
    period: 'month',
    description: 'Full-scale solution for large organizations.',
    features: [
      'Unlimited users',
      'White-label solution',
      'API access',
      '24/7 phone support',
      'Custom integrations',
      'Unlimited storage',
      'Advanced security',
      'Dedicated manager'
    ],
    popular: false,
    gradient: 'from-emerald-500 to-emerald-600'
  }
];

export function PricingSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Choose Your Plan
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Flexible pricing options designed to grow with your business. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transition-all duration-300 hover:scale-105 ${
                plan.popular ? 'ring-4 ring-purple-500 ring-opacity-50' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${plan.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">
                    ${plan.price}
                  </span>
                  <span className="text-gray-600 dark:text-gray-300 ml-2">
                    /{plan.period}
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700 shadow-lg hover:shadow-xl'
                    : 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100'
                }`}
              >
                Start Free Trial
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Need a custom solution? Contact our sales team.
          </p>
          <button className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  );
}