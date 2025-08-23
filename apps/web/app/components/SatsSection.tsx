// components/StatsSection.jsx
import React from 'react';
import { Card } from '@sume/ui';

const StatsSection = () => {
  const stats = [
    { 
      number: '16+', 
      label: 'UI Components', 
      icon: '🧩',
      description: 'Production-ready React components',
      gradient: 'from-blue-500 to-indigo-600'
    },
    { 
      number: '100%', 
      label: 'TypeScript', 
      icon: '⚡',
      description: 'Full type safety and IntelliSense',
      gradient: 'from-emerald-500 to-teal-600'
    },
    { 
      number: '254KB', 
      label: 'Bundle Size', 
      icon: '📦',
      description: 'Optimized for performance',
      gradient: 'from-purple-500 to-pink-600'
    },
    { 
      number: '0', 
      label: 'Dependencies', 
      icon: '🎯',
      description: 'Zero external dependencies',
      gradient: 'from-orange-500 to-red-600'
    },
  ];

  const features = [
    {
      icon: '🎨',
      title: 'Beautifully Designed',
      description: 'Modern, clean designs that work across all devices and screen sizes',
      bgColor: 'bg-gradient-to-br from-blue-50 to-indigo-50',
      iconBg: 'bg-gradient-to-br from-blue-500 to-indigo-600'
    },
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Optimized for performance with tree-shaking support and minimal bundle impact',
      bgColor: 'bg-gradient-to-br from-emerald-50 to-green-50',
      iconBg: 'bg-gradient-to-br from-emerald-500 to-green-600'
    },
    {
      icon: '🛡️',
      title: 'Type Safe',
      description: 'Built with TypeScript for better developer experience and fewer runtime errors',
      bgColor: 'bg-gradient-to-br from-purple-50 to-pink-50',
      iconBg: 'bg-gradient-to-br from-purple-500 to-pink-600'
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 px-4 py-2 rounded-full font-medium text-sm mb-6">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            Why Choose Sume UI
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Modern</span> Development
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built for modern developers who value performance, accessibility, and exceptional developer experience
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <Card key={index} className="group relative overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              <div className="relative p-6 text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.gradient} shadow-lg mb-4`}>
                  <span className="text-2xl">{stat.icon}</span>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-gray-700 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-500">{stat.description}</div>
              </div>
              {/* Decorative element */}
              <div className={`absolute -bottom-2 -right-2 w-20 h-20 bg-gradient-to-br ${stat.gradient} opacity-5 rounded-full group-hover:scale-125 transition-transform duration-300`}></div>
            </Card>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className={`group p-8 border-0 ${feature.bgColor} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}>
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl ${feature.iconBg} shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl text-white">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 bg-white rounded-2xl shadow-lg px-8 py-4 border border-gray-100">
            <div className="flex -space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full border-2 border-white"></div>
              <div className="w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full border-2 border-white"></div>
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold text-gray-900">Trusted by 1000+ developers</div>
              <div className="text-xs text-gray-500">Join the growing community</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
