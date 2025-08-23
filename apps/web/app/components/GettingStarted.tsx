"use client";
import React, { useState } from 'react';
import { CodeBlock } from '@sume/ui';

const GettingStarted = () => {
  const [activeTab, setActiveTab] = useState('npm');

  return (
    <section className="py-20 bg-slate-50" id="getting-started">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get Started in <span className="text-blue-600">Minutes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Install Sume UI and start building beautiful applications right away
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Installation */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">1. Install the Package</h3>
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="flex border-b">
                {['npm', 'yarn', 'pnpm'].map((tab) => (
                  <button
                    key={tab}
                    className={`px-6 py-3 font-medium ${
                      activeTab === tab
                        ? 'bg-blue-50 text-blue-600 border-b-2 border-blue-600'
                        : 'text-gray-500 hover:text-gray-700'
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>
              <div className="p-6">
                <CodeBlock language="bash">
                  {activeTab === 'npm' && 'npm install @sume/ui'}
                  {activeTab === 'yarn' && 'yarn add @sume/ui'}
                  {activeTab === 'pnpm' && 'pnpm add @sume/ui'}
                </CodeBlock>
              </div>
            </div>
          </div>

          {/* Usage Example */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">2. Import and Use</h3>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <CodeBlock language="jsx">
{`import { Button, Card, Input } from '@sume/ui';
import '@sume/ui/styles.css';

function App() {
  return (
    <Card className="p-6">
      <h1>Welcome to Sume UI</h1>
      <Input placeholder="Enter your name" />
      <Button variant="primary">Get Started</Button>
    </Card>
  );
}`}
              </CodeBlock>
            </div>
          </div>

          {/* Tree Shaking */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">3. Import Individual Components</h3>
            <div className="bg-white rounded-lg shadow-lg p-6">
              <CodeBlock language="jsx">
{`// For optimal bundle size, import components individually
import { Button } from '@sume/ui/components/button';
import { Card } from '@sume/ui/components/card';`}
              </CodeBlock>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GettingStarted;
