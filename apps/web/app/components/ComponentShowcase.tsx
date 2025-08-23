"use client";
import React, { useState, useCallback, useMemo } from 'react';
import { Button, Card, Input, Badge, Avatar, ProgressBar } from '@sume/ui';
import { DropDown } from '@sume/ui/components/Dropdown';
import { Modal } from '@sume/ui/components/Modal';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, Star, Zap, Shield, Palette, Code, 
  Users, Activity, TrendingUp, Eye, Play, 
  Settings, Bell, Search, Download 
} from 'lucide-react';

const ComponentShowcase = () => {
  // Interactive states with proper types
  const [activeDemo, setActiveDemo] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [profileModalOpen, setProfileModalOpen] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState<string | number>('default');
  const [selectedFramework, setSelectedFramework] = useState<(string | number)[]>([]);
  const [userInput, setUserInput] = useState('');
  const [progress, setProgress] = useState(75);
  const [likeCount, setLikeCount] = useState(1247);
  const [isLiked, setIsLiked] = useState(false);

  // Demo categories with beautiful gradients
  const categories = [
    { id: 'all', label: 'All Components', icon: Eye, gradient: 'from-blue-500 to-purple-600' },
    { id: 'inputs', label: 'Form Inputs', icon: Search, gradient: 'from-emerald-500 to-teal-600' },
    { id: 'actions', label: 'Interactive', icon: Play, gradient: 'from-orange-500 to-red-600' },
    { id: 'display', label: 'Data Display', icon: Activity, gradient: 'from-purple-500 to-pink-600' },
    { id: 'overlays', label: 'Overlays', icon: Settings, gradient: 'from-indigo-500 to-blue-600' },
  ];

  // Theme options for dropdown
  const themeOptions = [
    { label: '🌟 Default Theme', value: 'default', icon: <Palette className="w-4 h-4" /> },
    { label: '🌙 Dark Mode', value: 'dark', icon: <Shield className="w-4 h-4" /> },
    { label: '🎨 Neon Glow', value: 'neon', icon: <Zap className="w-4 h-4" /> },
    { label: '🌿 Nature', value: 'nature', icon: <Heart className="w-4 h-4" /> },
  ];

  // Framework options for multi-select
  const frameworkOptions = [
    { label: 'React', value: 'react', icon: <Code className="w-4 h-4" /> },
    { label: 'Next.js', value: 'nextjs', icon: <TrendingUp className="w-4 h-4" /> },
    { label: 'TypeScript', value: 'typescript', icon: <Shield className="w-4 h-4" /> },
    { label: 'Tailwind', value: 'tailwind', icon: <Palette className="w-4 h-4" /> },
  ];

  // Type-safe change handlers
  const handleThemeChange = useCallback((value: string | number | (string | number)[]) => {
    if (typeof value === 'string' || typeof value === 'number') {
      setSelectedTheme(value);
    }
  }, []);

  const handleFrameworkChange = useCallback((value: string | number | (string | number)[]) => {
    if (Array.isArray(value)) {
      setSelectedFramework(value);
    }
  }, []);

  // Interactive handlers
  const handleLike = useCallback(() => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  }, [isLiked]);

  const handleProgressBoost = useCallback(() => {
    setProgress(prev => Math.min(100, prev + Math.floor(Math.random() * 20) + 5));
  }, []);

  const resetProgress = useCallback(() => {
    setProgress(Math.floor(Math.random() * 100) + 1);
  }, []);

  // Component demos data
  const componentDemos = useMemo(() => [
    {
      id: 'smart-inputs',
      category: ['all', 'inputs'],
      title: 'Smart Form Inputs',
      description: 'Intelligent inputs with real-time validation and suggestions',
      icon: <Search className="w-5 h-5" />,
      gradient: 'from-emerald-400 to-teal-500',
      interactive: true
    },
    {
      id: 'action-buttons',
      category: ['all', 'actions'],
      title: 'Interactive Buttons',
      description: 'Beautiful buttons with hover effects and loading states',
      icon: <Play className="w-5 h-5" />,
      gradient: 'from-blue-400 to-indigo-500',
      interactive: true
    },
    {
      id: 'data-visualization',
      category: ['all', 'display'],
      title: 'Data Visualization',
      description: 'Progress bars, charts, and beautiful data displays',
      icon: <Activity className="w-5 h-5" />,
      gradient: 'from-purple-400 to-pink-500',
      interactive: true
    },
    {
      id: 'smart-dropdowns',
      category: ['all', 'inputs'],
      title: 'Smart Dropdowns',
      description: 'Multi-select, searchable dropdowns with rich content',
      icon: <Settings className="w-5 h-5" />,
      gradient: 'from-orange-400 to-red-500',
      interactive: true
    },
    {
      id: 'modal-overlays',
      category: ['all', 'overlays'],
      title: 'Modal Dialogs',
      description: 'Beautiful modals with animations and focus management',
      icon: <Eye className="w-5 h-5" />,
      gradient: 'from-cyan-400 to-blue-500',
      interactive: true
    },
    {
      id: 'status-system',
      category: ['all', 'display'],
      title: 'Status System',
      description: 'Badges, avatars, and status indicators',
      icon: <Bell className="w-5 h-5" />,
      gradient: 'from-pink-400 to-rose-500',
      interactive: true
    }
  ], []);

  const filteredDemos = useMemo(() => {
    return componentDemos.filter(demo => 
      activeDemo === 'all' || demo.category.includes(activeDemo)
    );
  }, [componentDemos, activeDemo]);

  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Elegant header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-400/20 text-blue-300 px-6 py-3 rounded-full font-medium text-sm mb-8 backdrop-blur-sm">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
            />
            Interactive Playground
          </div>
          
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Experience </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Excellence
            </span>
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Dive into our interactive component library. Every element is crafted with precision, 
            designed for modern web applications, and built to delight your users.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <motion.button
                key={category.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => setActiveDemo(category.id)}
                className={`group relative flex items-center gap-3 px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                  activeDemo === category.id
                    ? `bg-gradient-to-r ${category.gradient} text-white shadow-2xl transform scale-105`
                    : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/70 hover:text-white hover:scale-102 border border-slate-700'
                }`}
              >
                <IconComponent className="w-5 h-5" />
                <span>{category.label}</span>
                {activeDemo === category.id && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-white/10 rounded-2xl"
                  />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Component showcase grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {filteredDemos.map((demo, index) => (
              <motion.div
                key={demo.id}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group"
              >
                <Card className="h-full bg-gradient-to-br from-slate-800/90 to-slate-900/90 border border-slate-700/50 backdrop-blur-sm hover:border-slate-600 transition-all duration-300 transform hover:scale-102 hover:shadow-2xl">
                  {/* Card header */}
                  <div className="p-6 border-b border-slate-700/50">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl bg-gradient-to-br ${demo.gradient} shadow-lg`}>
                        {demo.icon}
                      </div>
                      <div className="flex items-center gap-2">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={handleLike}
                          className={`p-2 rounded-full transition-all duration-200 ${
                            isLiked ? 'bg-red-500/20 text-red-400' : 'bg-slate-700/50 text-gray-400 hover:text-red-400'
                          }`}
                        >
                          <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
                        </motion.button>
                        <span className="text-sm text-gray-400">{likeCount}</span>
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{demo.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{demo.description}</p>
                  </div>

                  {/* Interactive content based on demo type */}
                  <div className="p-6">
                    {demo.id === 'smart-inputs' && (
                      <div className="space-y-4">
                        <Input
                          placeholder="Type something magical..."
                          value={userInput}
                          onChange={(e) => setUserInput(e.target.value)}
                          className="bg-slate-700/50 border-slate-600 text-white placeholder-gray-400"
                        />
                        {userInput && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="p-3 bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-500/30 rounded-lg"
                          >
                            <p className="text-blue-300 text-sm">
                              ✨ You typed: "<span className="font-semibold">{userInput}</span>"
                            </p>
                          </motion.div>
                        )}
                        <div className="grid grid-cols-2 gap-2">
                          <Input placeholder="Email" type="email" className="text-sm bg-slate-700/50 border-slate-600 text-white" />
                          <Input placeholder="Password" type="password" className="text-sm bg-slate-700/50 border-slate-600 text-white" />
                        </div>
                      </div>
                    )}

                    {demo.id === 'action-buttons' && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-3">
                          <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transform hover:scale-105 transition-all duration-200">
                            <Play className="w-4 h-4 mr-2" />
                            Launch
                          </Button>
                          <Button variant="outline" className="border-slate-600 text-gray-300 hover:bg-slate-700 hover:scale-105 transition-all duration-200">
                            <Download className="w-4 h-4 mr-2" />
                            Download
                          </Button>
                        </div>
                        <Button 
                          className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 transform hover:scale-105 transition-all duration-200"
                          onClick={() => setIsModalOpen(true)}
                        >
                          <Zap className="w-4 h-4 mr-2" />
                          Open Experience
                        </Button>
                      </div>
                    )}

                    {demo.id === 'data-visualization' && (
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-300 text-sm">Project Progress</span>
                            <span className="text-white font-bold">{progress}%</span>
                          </div>
                          <ProgressBar 
                            value={progress} 
                            className="h-3 bg-slate-700 rounded-full overflow-hidden"
                          />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          <Button 
                            size="sm" 
                            onClick={handleProgressBoost}
                            className="bg-gradient-to-r from-green-500 to-emerald-600 text-xs"
                          >
                            <TrendingUp className="w-3 h-3 mr-1" />
                            Boost
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            onClick={resetProgress}
                            className="border-slate-600 text-gray-300 hover:bg-slate-700 text-xs"
                          >
                            Reset
                          </Button>
                        </div>
                        <div className="flex justify-between text-center">
                          <div className="flex-1">
                            <div className="text-blue-400 font-bold text-lg">2.4K</div>
                            <div className="text-gray-400 text-xs">Users</div>
                          </div>
                          <div className="flex-1">
                            <div className="text-emerald-400 font-bold text-lg">99.9%</div>
                            <div className="text-gray-400 text-xs">Uptime</div>
                          </div>
                          <div className="flex-1">
                            <div className="text-purple-400 font-bold text-lg">24/7</div>
                            <div className="text-gray-400 text-xs">Support</div>
                          </div>
                        </div>
                      </div>
                    )}

                    {demo.id === 'smart-dropdowns' && (
                      <div className="space-y-4">
                        <DropDown
                          options={themeOptions}
                          value={selectedTheme}
                          onChange={handleThemeChange}
                          placeholder="Choose your theme..."
                          size="md"
                          className="w-full"
                        />
                        <DropDown
                          options={frameworkOptions}
                          value={selectedFramework}
                          onChange={handleFrameworkChange}
                          placeholder="Select frameworks..."
                          multiSelect={true}
                          searchable={true}
                          size="md"
                          className="w-full"
                        />
                        {selectedFramework.length > 0 && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="p-3 bg-gradient-to-r from-purple-900/30 to-pink-900/30 border border-purple-500/30 rounded-lg"
                          >
                            <p className="text-purple-300 text-sm">
                              🚀 Selected: {selectedFramework.length} framework{selectedFramework.length > 1 ? 's' : ''}
                            </p>
                          </motion.div>
                        )}
                      </div>
                    )}

                    {demo.id === 'modal-overlays' && (
                      <div className="space-y-4">
                        <Button 
                          className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                          onClick={() => setProfileModalOpen(true)}
                        >
                          <Users className="w-4 h-4 mr-2" />
                          Profile Settings
                        </Button>
                        <div className="p-3 bg-slate-700/30 rounded-lg border border-slate-600/50">
                          <div className="flex items-center gap-3">
                            <Avatar src="/api/placeholder/40/40" size="md" className="border-2 border-blue-400" />
                            <div className="flex-1">
                              <div className="text-white font-medium">Alex Johnson</div>
                              <div className="text-gray-400 text-sm">Senior Developer</div>
                            </div>
                            <Badge variant="success" className="animate-pulse">Active</Badge>
                          </div>
                        </div>
                      </div>
                    )}

                    {demo.id === 'status-system' && (
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="success" className="animate-pulse">
                            <Star className="w-3 h-3 mr-1" />
                            Premium
                          </Badge>
                          <Badge variant="warning">
                            <Activity className="w-3 h-3 mr-1" />
                            Active
                          </Badge>
                          <Badge variant="info">
                            Verified
                          </Badge>
                        </div>
                        <div className="grid grid-cols-3 gap-2">
                          <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                            <Avatar size="sm" className="mx-auto mb-2 border border-blue-400" />
                            <div className="text-xs text-gray-300">Online</div>
                          </div>
                          <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                            <Avatar size="sm" className="mx-auto mb-2 border border-yellow-400" />
                            <div className="text-xs text-gray-300">Away</div>
                          </div>
                          <div className="text-center p-3 bg-slate-700/30 rounded-lg">
                            <Avatar size="sm" className="mx-auto mb-2 border border-gray-400" />
                            <div className="text-xs text-gray-300">Offline</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Call to action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-20"
        >
          <div className="inline-flex flex-col sm:flex-row gap-6 items-center">
            <Button 
              size="lg"
               onClick={() => window.open('https://sume-ui-storybook-ohcn.vercel.app/?path=/docs/introduction--docs', '_blank')}
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-2xl px-8 py-4 text-lg font-semibold"
            >
              <Eye className="w-5 h-5 mr-2" />
              Explore All Components
            </Button>
            <Button 
              size="lg" 
              onClick={() => window.open('https://sume-ui-storybook-ohcn.vercel.app/?path=/docs/introduction--docs', '_blank')}
              variant="outline" 
              className="border-slate-500 text-gray-300 hover:bg-slate-700 hover:border-slate-400 transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold"
            >
              <Code className="w-5 h-5 mr-2" />
              View Documentation
            </Button>
          </div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            16+ production-ready components • TypeScript support • Zero dependencies
          </p>
        </motion.div>
      </div>

      {/* Interactive Modals */}
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="🎉 Welcome to Sume UI"
        showClose={true}
      >
        <div className="space-y-4">
          <p className="text-gray-600">
            You've just experienced the power of our Modal component! This is a fully featured modal with:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-blue-500" />
              Smooth animations and transitions
            </li>
            <li className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-500" />
              Focus management and accessibility
            </li>
            <li className="flex items-center gap-2">
              <Heart className="w-4 h-4 text-red-500" />
              Beautiful design and customization
            </li>
          </ul>
          <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Pro tip:</strong> All our components work seamlessly together and are fully customizable!
            </p>
          </div>
        </div>
      </Modal>

      <Modal
        open={profileModalOpen}
        onClose={() => setProfileModalOpen(false)}
        title="Profile Settings"
        showClose={true}
      >
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <Avatar src="/api/placeholder/60/60" size="lg" className="border-2 border-blue-400" />
            <div>
              <h3 className="text-lg font-semibold">Alex Johnson</h3>
              <p className="text-gray-600">senior.dev@example.com</p>
              <Badge variant="success" className="mt-1">Verified Account</Badge>
            </div>
          </div>
          <div className="space-y-4">
            <Input placeholder="Full Name" defaultValue="Alex Johnson" />
            <Input placeholder="Email" type="email" defaultValue="senior.dev@example.com" />
            <DropDown
              options={[
                { label: '🌍 Public', value: 'public' },
                { label: '👥 Friends', value: 'friends' },
                { label: '🔒 Private', value: 'private' }
              ]}
              value="public"
              onChange={() => {}}
              placeholder="Privacy Setting"
            />
          </div>
        </div>
      </Modal>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default ComponentShowcase;
