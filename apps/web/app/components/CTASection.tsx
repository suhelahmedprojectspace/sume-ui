// components/CTASection.jsx
import React from 'react';
import { Button } from '@sume/ui';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Build Something
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Amazing?
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join thousands of developers who are already building faster with Sume UI. 
            Get started today and see the difference.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              Get Started Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-gray-900 "
            >
              View Documentation
            </Button>
          </div>

          <div className="text-center">
            <p className="text-gray-400 mb-4">Install with your favorite package manager</p>
            <div className="inline-flex items-center space-x-2 bg-slate-800 rounded-lg px-4 py-2 font-mono text-sm text-gray-300">
              <span>npm install @sume/ui</span>
              <button className="text-blue-400 hover:text-blue-300 ml-2">
                📋
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
