import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import { Card,CardBody,CardFooter,CardHeader } from '@sume/ui/components/Card';
import { 
  Heart, Star, Eye, Calendar,Users, MessageCircle, 
  Share2, Bookmark, Play, ShoppingCart,
  TrendingUp, DollarSign,  Settings, MoreVertical,
  CheckCircle,Zap, ChevronRight, 
} from 'lucide-react';
import { useState } from 'react';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `


**Flexible containers that organize related information in digestible, scannable chunks.**

Cards are the **building blocks of modern UI** - they create visual boundaries, establish hierarchy, and make complex interfaces feel organized.




## 🎯 When to Use Cards
- **Content display**: Articles, products, profiles, media  
- **Interactive elements**: Forms, actions, clickable items  
- **Data organization**: Metrics, status, grouped information  
- **Navigation**: Feature highlights, menu items, dashboards  

## 🏗️ Card Anatomy
| Component | Purpose | When to Use |
|-----------|---------|-------------|
| **CardHeader** | Title, metadata, actions | Every card needs context |
| **CardBody** | Main content area | The meat of your information |
| **CardFooter** | Actions, secondary info | CTAs, timestamps, metadata |

## 📐 Layout Patterns
| Pattern | Use Case | Example |
|---------|----------|---------|
| **Header + Body** | Articles, profiles | Blog posts, user cards |
| **Body Only** | Images, simple content | Photo galleries, minimal info |
| **Header + Body + Footer** | Interactive content | Product cards, forms |
| **Header + Footer** | Actions, status | Settings toggles, quick actions |

## 🎨 Design Principles
- **Scannable**: Users should understand content in 3 seconds  
- **Focused**: Each card should have one clear purpose  
- **Consistent**: Use predictable patterns across your app  
- **Responsive**: Cards adapt gracefully to all screen sizes  

## ♿ Accessibility Features
- Semantic HTML structure with proper landmarks  
- Keyboard navigation for interactive elements  
- Screen reader friendly content organization  
- High contrast support for all themes  

## 🚀 Installation

\`\`\`bash
npm install @sume/ui
# or
yarn add @sume/ui
# or
pnpm add @sume/ui
\`\`\`

        `
      }
    }
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes for styling'
    }
  }
};

export default meta;
type Story = StoryObj<typeof meta>;

// =================== BASIC LAYOUTS ===================

export const BasicLayouts: Story = {
  name: '🏗️ Basic Card Layouts',
  render: () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl">
      {/* Header + Body */}
      <Card className="h-fit">
        <CardHeader>
          <h3 className="text-xl font-semibold">Header + Body</h3>
          <p className="text-gray-600 dark:text-gray-400">Most common pattern</p>
        </CardHeader>
        <CardBody>
          <p className="text-gray-700 dark:text-gray-300">
            Perfect for articles, blog posts, and content that needs clear hierarchy. 
            The header establishes context while the body contains the main information.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs rounded">
              React
            </span>
            <span className="px-2 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs rounded">
              Tutorial
            </span>
          </div>
        </CardBody>
      </Card>

      {/* Body Only */}
      <Card className="h-fit">
        <CardBody>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Body Only</h3>
            <p className="text-gray-700 dark:text-gray-300">
              Clean and minimal. Perfect when you want maximum content space or 
              a centered layout without visual hierarchy.
            </p>
          </div>
        </CardBody>
      </Card>

      {/* Complete Layout */}
      <Card className="h-fit">
        <CardHeader>
          <h3 className="text-xl font-semibold">Complete Layout</h3>
          <p className="text-gray-600 dark:text-gray-400">Header, body, and footer</p>
        </CardHeader>
        <CardBody>
          <p className="text-gray-700 dark:text-gray-300">
            The full card experience with clear content sections and action areas. 
            Ideal for interactive content, forms, and products.
          </p>
        </CardBody>
        <CardFooter>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
            Primary Action
          </button>
          <button className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 transition-colors">
            Secondary
          </button>
        </CardFooter>
      </Card>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
### Layout Selection Guide

**Header + Body (70% of use cases)**  
- **When**: Articles, profiles, feature descriptions  
- **Why**: Clear hierarchy, easy to scan, familiar pattern  
- **Best for**: Blog posts, user profiles, product descriptions  

**Body Only (20% of use cases)**  
- **When**: Simple content, images, minimal layouts  
- **Why**: Maximum content space, reduces visual clutter  
- **Best for**: Photo galleries, testimonials, centered content  

**Complete Layout (10% of use cases)**  
- **When**: Interactive content, forms, product cards  
- **Why**: Complete information architecture with clear actions  
- **Best for**: E-commerce products, settings panels, contact forms  

### Implementation Tips

\`\`\`tsx
// Header + Body pattern
<Card>
  <CardHeader>
    <h3>Title Here</h3>
    <p>Subtitle or metadata</p>
  </CardHeader>
  <CardBody>
    <p>Main content goes here...</p>
  </CardBody>
</Card>

// Body only pattern
<Card>
  <CardBody>
    <div className="text-center">
      {/* Centered content */}
    </div>
  </CardBody>
</Card>

// Complete layout pattern
<Card>
  <CardHeader>{/* Title */}</CardHeader>
  <CardBody>{/* Content */}</CardBody>
  <CardFooter>{/* Actions */}</CardFooter>
</Card>
\`\`\`

💡 **Consistency Rule**: Stick to one layout pattern within the same context (e.g., all blog post cards use the same pattern).
        `
      }
    }
  }
};

// =================== CONTENT TYPES ===================

export const ContentTypes: Story = {
  name: '📝 Content Types & Patterns',
  render: () => (
    <div className="space-y-12 max-w-7xl">
      {/* Article Cards */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">📰 Article Cards</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Featured Article */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="px-2 py-1 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 text-xs rounded">
                      Featured
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">8 min read</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-2">
                    The Complete Guide to Modern React Patterns in 2024
                  </h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
                        SJ
                      </div>
                      <span>Sarah Johnson</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>Dec 15, 2024</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>12.5K views</span>
                    </div>
                  </div>
                </div>
                <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                  <Bookmark className="w-5 h-5" />
                </button>
              </div>
            </CardHeader>
            <CardBody>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Discover the latest React patterns that will make your code more maintainable, 
                    performant, and easier to understand. From hooks to context, we cover everything 
                    you need to know.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'JavaScript', 'Hooks', 'Performance'].map(tag => (
                      <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="aspect-video lg:aspect-square bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
                  <Play className="w-12 h-12 text-white" />
                </div>
              </div>
            </CardBody>
            <CardFooter>
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400">
                    <Heart className="w-4 h-4" />
                    <span>284</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                    <MessageCircle className="w-4 h-4" />
                    <span>47</span>
                  </button>
                  <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">
                    <Share2 className="w-4 h-4" />
                    <span>Share</span>
                  </button>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  Read Article
                </button>
              </div>
            </CardFooter>
          </Card>

          {/* Regular Articles */}
          {[
            {
              title: "10 CSS Grid Tricks That Will Transform Your Layouts",
              author: "Mike Chen",
              date: "Dec 12, 2024",
              readTime: "5 min read",
              views: "8.2K",
              excerpt: "Master advanced CSS Grid techniques for flexible, maintainable layouts.",
              tags: ["CSS", "Grid", "Layout"]
            },
            {
              title: "State Management in React: A Comprehensive Comparison",
              author: "Emma Rodriguez",
              date: "Dec 10, 2024", 
              readTime: "12 min read",
              views: "15.3K",
              excerpt: "Redux vs Zustand vs Context API - which should you choose for your next project?",
              tags: ["React", "State Management"]
            }
          ].map((article, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <h3 className="font-bold text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                  <span>{article.author}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
              </CardHeader>
              <CardBody>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  {article.excerpt}
                </p>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map(tag => (
                    <span key={tag} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardBody>
              <CardFooter>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-gray-500 dark:text-gray-400">{article.views} views</span>
                  </div>
                  <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
                    Read more →
                  </button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      {/* Product Cards */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">🛍️ Product Cards</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              name: "Premium Wireless Headphones",
              price: 299,
              originalPrice: 399,
              rating: 4.8,
              reviews: 1247,
              badge: "Best Seller",
              badgeType: "success"
            },
            {
              name: "Smart Fitness Tracker",
              price: 149,
              originalPrice: null,
              rating: 4.6,
              reviews: 892,
              badge: "New",
              badgeType: "info"
            },
            {
              name: "Mechanical Gaming Keyboard",
              price: 179,
              originalPrice: 229,
              rating: 4.9,
              reviews: 2156,
              badge: "20% OFF",
              badgeType: "destructive"
            },
            {
              name: "4K Webcam Pro",
              price: 89,
              originalPrice: null,
              rating: 4.4,
              reviews: 445,
              badge: "Limited",
              badgeType: "warning"
            }
          ].map((product, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300">
              <CardBody>
                <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 rounded-lg mb-4 overflow-hidden">
                  <div className={`absolute top-3 left-3 px-2 py-1 text-xs font-medium rounded text-white ${
                    product.badgeType === 'success' ? 'bg-green-500' :
                    product.badgeType === 'info' ? 'bg-blue-500' :
                    product.badgeType === 'destructive' ? 'bg-red-500' :
                    'bg-orange-500'
                  }`}>
                    {product.badge}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center text-6xl">
                    {index === 0 ? '🎧' : index === 1 ? '⌚' : index === 2 ? '⌨️' : '📹'}
                  </div>
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30">
                      <Heart className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <h3 className="font-semibold mb-2 line-clamp-2">{product.name}</h3>
                
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${
                      i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                    }`} />
                  ))}
                  <span className="text-sm text-gray-600 dark:text-gray-400 ml-1">
                    {product.rating} ({product.reviews.toLocaleString()})
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl font-bold">${product.price}</span>
                  {product.originalPrice && (
                    <>
                      <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                      <span className="text-sm text-green-600 font-medium">
                        Save ${product.originalPrice - product.price}
                      </span>
                    </>
                  )}
                </div>

                <button className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                  <ShoppingCart className="w-4 h-4" />
                  Add to Cart
                </button>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
### Content Type Patterns

**📰 Article Cards**  
- **Featured Layout**: Larger card with rich metadata and media  
- **Standard Layout**: Consistent structure across article lists  
- **Key Elements**: Author, date, read time, view count, tags  
- **Interactions**: Social actions (like, comment, share)  

**🛍️ Product Cards**  
- **Visual Hierarchy**: Product image → name → rating → price → action  
- **Social Proof**: Star ratings and review counts build trust  
- **Urgency Elements**: Badges for sales, limited stock, new items  
- **Clear CTAs**: Prominent add-to-cart buttons  

### Implementation Patterns

**Article Card Structure**  
\`\`\`tsx
<Card>
  <CardHeader>
    <div className="flex justify-between">
      <div>
        <div className="badges-and-metadata" />
        <h3 className="title" />
        <div className="author-date-stats" />
      </div>
      <button className="bookmark-action" />
    </div>
  </CardHeader>
  <CardBody>
    <div className="excerpt-and-tags" />
  </CardBody>
  <CardFooter>
    <div className="social-actions-and-cta" />
  </CardFooter>
</Card>
\`\`\`

**Product Card Structure**  
\`\`\`tsx
<Card>
  <CardBody>
    <div className="product-image-with-badges" />
    <h3 className="product-name" />
    <div className="rating-and-reviews" />
    <div className="pricing-with-discounts" />
    <button className="add-to-cart-cta" />
  </CardBody>
</Card>
\`\`\`

💡 **Conversion Tips**: Product cards with clear hierarchy, social proof, and urgency elements can increase conversion rates by 25-40%.
        `
      }
    }
  }
};

// =================== DASHBOARD CARDS ===================

export const DashboardCards: Story = {
  name: '📊 Dashboard & Analytics Cards',
  render: () => (
    <div className="space-y-8 max-w-7xl">
      {/* Metric Cards */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">📈 Key Metrics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: "Total Revenue",
              value: "$89,247",
              change: "+12.5%",
              trend: "up",
              icon: DollarSign,
              color: "green"
            },
            {
              title: "Active Users",
              value: "12,547",
              change: "+8.2%", 
              trend: "up",
              icon: Users,
              color: "blue"
            },
            {
              title: "Conversion Rate",
              value: "3.24%",
              change: "-2.1%",
              trend: "down", 
              icon: TrendingUp,
              color: "red"
            },
            {
              title: "Page Views",
              value: "847K",
              change: "+15.3%",
              trend: "up",
              icon: Eye,
              color: "purple"
            }
          ].map((metric, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardBody>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                    metric.color === 'green' ? 'bg-green-100 dark:bg-green-900' :
                    metric.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900' :
                    metric.color === 'red' ? 'bg-red-100 dark:bg-red-900' :
                    'bg-purple-100 dark:bg-purple-900'
                  }`}>
                    <metric.icon className={`w-6 h-6 ${
                      metric.color === 'green' ? 'text-green-600 dark:text-green-400' :
                      metric.color === 'blue' ? 'text-blue-600 dark:text-blue-400' :
                      metric.color === 'red' ? 'text-red-600 dark:text-red-400' :
                      'text-purple-600 dark:text-purple-400'
                    }`} />
                  </div>
                  <div className={`flex items-center gap-1 text-sm font-medium ${
                    metric.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
                  }`}>
                    <TrendingUp className={`w-4 h-4 ${metric.trend === 'down' ? 'rotate-180' : ''}`} />
                    {metric.change}
                  </div>
                </div>
                <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
                  {metric.title}
                </h3>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {metric.value}
                </p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>

      {/* System Status */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">⚡ System Status</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">Service Health</h3>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">All Systems Operational</span>
                </div>
              </div>
            </CardHeader>
            <CardBody>
              <div className="space-y-4">
                {[
                  { service: "API Gateway", status: "operational", uptime: "99.9%", response: "45ms" },
                  { service: "Database", status: "operational", uptime: "99.8%", response: "12ms" },
                  { service: "CDN", status: "degraded", uptime: "99.2%", response: "156ms" },
                  { service: "Authentication", status: "operational", uptime: "100%", response: "23ms" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className={`w-3 h-3 rounded-full ${
                        item.status === 'operational' ? 'bg-green-500' : 'bg-yellow-500'
                      }`}></div>
                      <span className="font-medium">{item.service}</span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                      <span>↑ {item.uptime}</span>
                      <span>⚡ {item.response}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-xl font-semibold">Recent Activity</h3>
            </CardHeader>
            <CardBody>
              <div className="space-y-4">
                {[
                  { action: "User registration spike detected", time: "2 min ago", type: "info" },
                  { action: "Database backup completed", time: "15 min ago", type: "success" },
                  { action: "CDN cache cleared", time: "1 hour ago", type: "warning" },
                  { action: "Security scan completed", time: "2 hours ago", type: "success" }
                ].map((activity, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      activity.type === 'success' ? 'bg-green-500' :
                      activity.type === 'warning' ? 'bg-yellow-500' :
                      'bg-blue-500'
                    }`}></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardBody>
            <CardFooter>
              <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 text-sm font-medium">
                View All Activity →
              </button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
### Dashboard Card Patterns

**📈 Metric Cards**  
- **Clear Hierarchy**: Icon → Trend → Title → Value  
- **Visual Indicators**: Color-coded icons and trend arrows  
- **Comparative Data**: Show change from previous period  
- **Consistent Layout**: Same structure across all metrics  

**⚡ Status Cards**  
- **Real-time Data**: Live system health indicators  
- **Status Colors**: Green (good), Yellow (warning), Red (critical)  
- **Contextual Info**: Uptime percentages, response times  
- **Activity Feeds**: Recent events with timestamps  

### Implementation Best Practices

**Metric Card Structure**  
\`\`\`tsx
<Card>
  <CardBody>
    <div className="flex justify-between items-center">
      <div className="icon-container" />
      <div className="trend-indicator" />
    </div>
    <h3 className="metric-title" />
    <p className="metric-value" />
  </CardBody>
</Card>
\`\`\`

**Color System**  
- **Green**: Success states, positive trends, healthy systems  
- **Red**: Errors, negative trends, critical issues  
- **Yellow**: Warnings, degraded performance, attention needed  
- **Blue**: Information, neutral states, general metrics  

💡 **Real-time Updates**: Use WebSocket connections to update dashboard cards live without page refreshes.
        `
      }
    }
  }
};

// =================== INTERACTIVE CARDS ===================

export const InteractiveCards: Story = {
  name: '🖱️ Interactive & Dynamic Cards',
  render: () => {
    const [likedPosts, setLikedPosts] = useState<number[]>([]);
    const [expandedCard, setExpandedCard] = useState<number | null>(null);
    
    const toggleLike = (postId: number) => {
      setLikedPosts(prev => 
        prev.includes(postId) 
          ? prev.filter(id => id !== postId)
          : [...prev, postId]
      );
    };

    return (
      <div className="space-y-8 max-w-4xl">
        {/* Social Media Cards */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">📱 Social Media Cards</h2>
          <div className="space-y-6">
            {[
              {
                id: 1,
                author: "Jane Designer",
                handle: "@jane_designs",
                time: "2 hours ago",
                content: "Just shipped a new design system! 🎨 The component library is now live and includes 50+ components with full accessibility support. Can't wait to see what the community builds with it!",
                likes: 47,
                comments: 12,
                shares: 8,
                image: true
              },
              {
                id: 2,
                author: "Dev Conference",
                handle: "@devconf2024",
                time: "4 hours ago", 
                content: "🚀 React 19 features that will change how you build apps:\n\n• Server Components\n• Concurrent Rendering\n• Automatic Batching\n• Suspense Improvements\n\nWhich one are you most excited about?",
                likes: 123,
                comments: 34,
                shares: 67,
                image: false
              }
            ].map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {post.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <h3 className="font-semibold">{post.author}</h3>
                        <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <span>{post.handle}</span>
                          <span>•</span>
                          <span>{post.time}</span>
                        </div>
                      </div>
                    </div>
                    <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                      <MoreVertical className="w-5 h-5" />
                    </button>
                  </div>
                </CardHeader>
                <CardBody>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 whitespace-pre-line">
                    {post.content}
                  </p>
                  {post.image && (
                    <div className="aspect-video bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center text-white">
                      <div className="text-center">
                        <div className="text-4xl mb-2">🎨</div>
                        <p>Design System Preview</p>
                      </div>
                    </div>
                  )}
                </CardBody>
                <CardFooter>
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-6">
                      <button 
                        onClick={() => toggleLike(post.id)}
                        className={`flex items-center gap-2 transition-colors ${
                          likedPosts.includes(post.id) 
                            ? 'text-red-600 dark:text-red-400' 
                            : 'text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400'
                        }`}
                      >
                        <Heart className={`w-5 h-5 ${likedPosts.includes(post.id) ? 'fill-current' : ''}`} />
                        <span>{post.likes + (likedPosts.includes(post.id) ? 1 : 0)}</span>
                      </button>
                      <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                        <MessageCircle className="w-5 h-5" />
                        <span>{post.comments}</span>
                      </button>
                      <button className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400">
                        <Share2 className="w-5 h-5" />
                        <span>{post.shares}</span>
                      </button>
                    </div>
                    <button className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400">
                      <Bookmark className="w-5 h-5" />
                    </button>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>

        {/* Expandable Cards */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">📖 Expandable Cards</h2>
          <div className="space-y-4">
            {[
              {
                id: 1,
                title: "Getting Started with React Hooks",
                preview: "Learn the basics of useState, useEffect, and custom hooks...",
                fullContent: "React Hooks revolutionized how we write React components by allowing us to use state and lifecycle methods in functional components. The most commonly used hooks are useState for managing component state and useEffect for handling side effects like API calls, subscriptions, or DOM manipulation."
              },
              {
                id: 2, 
                title: "Advanced TypeScript Patterns",
                preview: "Explore complex type manipulations and utility types...",
                fullContent: "TypeScript's type system is incredibly powerful and allows for sophisticated type manipulations. Advanced patterns include conditional types, mapped types, template literal types, and utility types like Partial, Pick, and Omit. These patterns help create more robust and maintainable codebases."
              }
            ].map((item) => (
              <Card key={item.id} className="transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <button 
                      onClick={() => setExpandedCard(expandedCard === item.id ? null : item.id)}
                      className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                    >
                      <ChevronRight className={`w-5 h-5 transition-transform ${
                        expandedCard === item.id ? 'rotate-90' : ''
                      }`} />
                    </button>
                  </div>
                </CardHeader>
                <CardBody>
                  <p className="text-gray-700 dark:text-gray-300">
                    {expandedCard === item.id ? item.fullContent : item.preview}
                  </p>
                </CardBody>
                {expandedCard === item.id && (
                  <CardFooter>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Read Full Article
                    </button>
                    <button className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200">
                      Save for Later
                    </button>
                  </CardFooter>
                )}
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: `
### Interactive Card Patterns

**📱 Social Media Cards**  
- **Real-time Interactions**: Like, comment, share with immediate feedback  
- **State Management**: Track user interactions (liked posts, bookmarks)  
- **Visual Feedback**: Color changes, icon fills, hover states  
- **Rich Content**: Support for text, images, videos, links  

**📖 Expandable Cards**  
- **Progressive Disclosure**: Show preview then full content on demand  
- **Smooth Animations**: Expand/collapse with CSS transitions  
- **Clear Indicators**: Chevron icons show expandable state  
- **Contextual Actions**: Different footer actions based on state  

### Implementation Examples

**Interactive Like Button**  
\`\`\`tsx
const [liked, setLiked] = useState(false);

<button 
  onClick={() => setLiked(!liked)}
  className={\`transition-colors \${
    liked ? 'text-red-600' : 'text-gray-600 hover:text-red-600'
  }\`}
>
  <Heart className={\`w-5 h-5 \${liked ? 'fill-current' : ''}\`} />
</button>
\`\`\`

**Expandable Card Logic**  
\`\`\`tsx
const [expanded, setExpanded] = useState(false);

<Card>
  <CardHeader>
    <button onClick={() => setExpanded(!expanded)}>
      <ChevronRight className={\`transition-transform \${
        expanded ? 'rotate-90' : ''
      }\`} />
    </button>
  </CardHeader>
  <CardBody>
    <p>{expanded ? fullContent : preview}</p>
  </CardBody>
  {expanded && (
    <CardFooter>
      {/* Additional actions when expanded */}
    </CardFooter>
  )}
</Card>
\`\`\`

💡 **Performance Tip**: Use React.memo() for cards in long lists to prevent unnecessary re-renders.
        `
      }
    }
  }
};

// =================== RESPONSIVE DESIGN ===================

export const ResponsiveDesign: Story = {
  name: '📱 Responsive Design Patterns',
  render: () => (
    <div className="space-y-12 max-w-7xl">
      {/* Mobile-First Grid */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">📱 Mobile-First Grid</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Resize your browser to see how cards adapt from mobile (1 column) to desktop (4 columns)
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
          {Array.from({ length: 8 }, (_, i) => (
            <Card key={i} className="hover:shadow-lg transition-shadow">
              <CardBody>
                <div className={`aspect-square rounded-lg mb-4 flex items-center justify-center text-white text-2xl font-bold ${
                  `bg-gradient-to-br ${
                    i % 4 === 0 ? 'from-blue-500 to-purple-500' :
                    i % 4 === 1 ? 'from-green-500 to-blue-500' :
                    i % 4 === 2 ? 'from-purple-500 to-pink-500' :
                    'from-orange-500 to-red-500'
                  }`
                }`}>
                  {i + 1}
                </div>
                <h3 className="font-semibold mb-2">Responsive Card {i + 1}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  This card adapts to different screen sizes automatically.
                </p>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>

      {/* Breakpoint Examples */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">📐 Breakpoint Examples</h2>
        <div className="space-y-8">
          {/* Mobile Layout */}
          <div>
            <h3 className="text-lg font-semibold mb-4">📱 Mobile Layout (320px - 640px)</h3>
            <div className="max-w-sm mx-auto space-y-4">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                      JD
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">John Doe</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">Software Engineer</p>
                    </div>
                  </div>
                </CardHeader>
                <CardBody>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    Mobile cards use vertical layouts with larger touch targets and simplified content.
                  </p>
                  <button className="w-full py-3 bg-blue-600 text-white rounded-lg font-medium">
                    Connect
                  </button>
                </CardBody>
              </Card>
            </div>
            <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Mobile Optimizations:</h4>
              <ul className="text-sm text-blue-800 dark:text-blue-200 space-y-1">
                <li>• Single column layout for focus</li>
                <li>• Large touch targets (44px minimum)</li>
                <li>• Full-width buttons for easy tapping</li>
                <li>• Simplified content hierarchy</li>
              </ul>
            </div>
          </div>

          {/* Tablet Layout */}
          <div>
            <h3 className="text-lg font-semibold mb-4">📱 Tablet Layout (641px - 1024px)</h3>
            <div className="max-w-2xl mx-auto">
              <div className="grid grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <h3 className="text-lg font-semibold">Project Alpha</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Due: Dec 20, 2024</p>
                  </CardHeader>
                  <CardBody>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Progress</span>
                        <span className="text-sm text-blue-600 dark:text-blue-400">75%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full w-3/4"></div>
                      </div>
                    </div>
                  </CardBody>
                  <CardFooter>
                    <button className="text-blue-600 dark:text-blue-400 text-sm">View Details</button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <h3 className="text-lg font-semibold">Project Beta</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Due: Dec 25, 2024</p>
                  </CardHeader>
                  <CardBody>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Progress</span>
                        <span className="text-sm text-green-600 dark:text-green-400">90%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div className="bg-green-600 h-2 rounded-full w-9/10"></div>
                      </div>
                    </div>
                  </CardBody>
                  <CardFooter>
                    <button className="text-blue-600 dark:text-blue-400 text-sm">View Details</button>
                  </CardFooter>
                </Card>
              </div>
            </div>
            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Tablet Optimizations:</h4>
              <ul className="text-sm text-green-800 dark:text-green-200 space-y-1">
                <li>• Two-column layouts for efficiency</li>
                <li>• Balanced content density</li>
                <li>• Touch-friendly but information-rich</li>
                <li>• Proper spacing for landscape orientation</li>
              </ul>
            </div>
          </div>

          {/* Desktop Layout */}
          <div>
            <h3 className="text-lg font-semibold mb-4">💻 Desktop Layout (1025px+)</h3>
            <div className="grid grid-cols-4 gap-4">
              {Array.from({ length: 4 }, (_, i) => (
                <Card key={i} className="hover:shadow-lg transition-shadow">
                  <CardBody>
                    <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center text-white font-semibold mb-3">
                      {i + 1}
                    </div>
                    <h3 className="font-semibold mb-2">Feature {i + 1}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Compact card perfect for desktop viewing.
                    </p>
                  </CardBody>
                </Card>
              ))}
            </div>
            <div className="mt-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Desktop Optimizations:</h4>
              <ul className="text-sm text-purple-800 dark:text-purple-200 space-y-1">
                <li>• Multi-column grids for information density</li>
                <li>• Hover effects for better interactivity</li>
                <li>• Compact layouts for efficient browsing</li>
                <li>• Mouse-optimized interactions</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
### Responsive Design Strategy

**📱 Mobile-First Approach**
Start with mobile constraints and progressively enhance for larger screens.

**Breakpoint Strategy**
- **Mobile (≤640px)**: 1 column, large touch targets, simplified content
- **Tablet (641-1024px)**: 2-3 columns, balanced density
- **Desktop (≥1025px)**: 4+ columns, hover effects, compact layouts

### Implementation Patterns

**Responsive Grid**
\\\`\\\`\\\`tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
  {items.map(item => (
    <Card key={item.id} className="hover:shadow-lg transition-shadow">
      {/* Card content */}
    </Card>
  ))}
</div>
\\\`\\\`\\\`

**Mobile-Specific Optimizations**
\\\`\\\`\\\`tsx
<Card>
  <CardBody>
    {/* Mobile: Full-width button */}
    <button className="w-full py-3 sm:w-auto sm:px-6 sm:py-2">
      Action
    </button>
  </CardBody>
</Card>
\\\`\\\`\\\`

**Touch Target Sizing**
- Minimum 44px for any interactive element on mobile
- Use larger padding and margins on smaller screens
- Provide adequate spacing between clickable elements

### Performance Considerations

**Image Optimization**
- Use responsive images with \`srcset\` for different screen densities
- Lazy load images below the fold
- Provide appropriate aspect ratios to prevent layout shift

**Layout Performance**
- Use CSS Grid for efficient layouts
- Minimize DOM depth in card content
- Use CSS transforms for animations (60fps)

💡 **Testing Tip**: Test cards at 320px width (smallest common mobile size) to ensure content doesn't break.
`

      }
    }
  }
};

// =================== ACCESSIBILITY & BEST PRACTICES ===================

export const AccessibilityBestPractices: Story = {
  name: '♿ Accessibility & Best Practices',
  render: () => (
    <div className="space-y-12 max-w-4xl">
      {/* Accessible Card Examples */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">♿ Accessible Card Design</h2>
        <div className="space-y-6">
          {/* Clickable Card */}
          <Card 
            className="cursor-pointer hover:shadow-lg transition-all focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
            role="article"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                console.log('Card activated');
              }
            }}
          >
            <CardHeader>
              <h3 className="text-xl font-semibold">
                <a href="#" className="focus:outline-none focus:underline stretched-link">
                  Accessible Article Title
                </a>
              </h3>
              <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                <time dateTime="2024-12-15">December 15, 2024</time>
                <span aria-label="Reading time">• 5 min read</span>
              </div>
            </CardHeader>
            <CardBody>
              <p className="text-gray-700 dark:text-gray-300">
                This card demonstrates proper accessibility patterns including semantic HTML, 
                ARIA labels, keyboard navigation, and focus management.
              </p>
            </CardBody>
            <CardFooter>
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                  <button 
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 rounded"
                    aria-label="Like this article (47 likes)"
                  >
                    <Heart className="w-4 h-4" />
                    <span aria-hidden="true">47</span>
                  </button>
                  <button 
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                    aria-label="View comments (12 comments)"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span aria-hidden="true">12</span>
                  </button>
                </div>
                <button 
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
                  aria-label="Bookmark this article"
                >
                  <Bookmark className="w-5 h-5" />
                </button>
              </div>
            </CardFooter>
          </Card>

          {/* Form Card */}
          <Card>
            <CardHeader>
              <h3 className="text-xl font-semibold">Contact Form</h3>
              <p className="text-gray-600 dark:text-gray-400">All fields are required unless marked optional</p>
            </CardHeader>
            <CardBody>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    aria-describedby="name-help"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800"
                  />
                  <p id="name-help" className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    Enter your first and last name
                  </p>
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    aria-describedby="email-help"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800"
                  />
                  <p id="email-help" className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    We'll never share your email address
                  </p>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    aria-describedby="message-help"
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800"
                  ></textarea>
                  <p id="message-help" className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                    Minimum 10 characters
                  </p>
                </div>
              </form>
            </CardBody>
            <CardFooter>
              <button 
                type="submit"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
              >
                Send Message
              </button>
              <button 
                type="reset"
                className="px-6 py-2 text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors"
              >
                Clear Form
              </button>
            </CardFooter>
          </Card>
        </div>
      </div>

      {/* Best Practices Guide */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">📋 Implementation Checklist</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <h3 className="text-xl font-semibold text-green-800 dark:text-green-200">✅ Accessibility Checklist</h3>
            </CardHeader>
            <CardBody>
              <div className="space-y-3">
                {[
                  "Use semantic HTML elements (article, section, etc.)",
                  "Provide proper ARIA labels for interactive elements", 
                  "Ensure keyboard navigation works for all interactions",
                  "Maintain 4.5:1 color contrast ratio for text",
                  "Add focus indicators for all interactive elements",
                  "Use heading hierarchy (h1, h2, h3) properly",
                  "Provide alternative text for images",
                  "Test with screen readers (NVDA, JAWS, VoiceOver)"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-xl font-semibold text-blue-800 dark:text-blue-200">🎯 Performance Checklist</h3>
            </CardHeader>
            <CardBody>
              <div className="space-y-3">
                {[
                  "Optimize images with proper sizes and formats",
                  "Use lazy loading for images below the fold",
                  "Minimize DOM depth and complexity",
                  "Use CSS transforms for animations (not layout properties)",
                  "Implement virtual scrolling for long card lists",
                  "Avoid unnecessary re-renders with React.memo()",
                  "Use skeleton screens while loading content",
                  "Test performance on slower devices"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Zap className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-xl font-semibold text-purple-800 dark:text-purple-200">🎨 Design Checklist</h3>
            </CardHeader>
            <CardBody>
              <div className="space-y-3">
                {[
                  "Maintain consistent spacing and typography",
                  "Use a clear visual hierarchy with proper font sizes",
                  "Ensure adequate white space around content",
                  "Provide hover states for interactive elements",
                  "Use consistent border radius and shadows",
                  "Test dark mode compatibility",
                  "Ensure mobile touch targets are 44px minimum",
                  "Keep card content focused on a single purpose"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-xl font-semibold text-orange-800 dark:text-orange-200">🔧 Development Checklist</h3>
            </CardHeader>
            <CardBody>
              <div className="space-y-3">
                {[
                  "Use TypeScript for better type safety",
                  "Implement proper error boundaries",
                  "Add loading and error states",
                  "Write unit tests for card components",
                  "Document component props and usage",
                  "Use proper Git commit messages",
                  "Follow naming conventions consistently",
                  "Review code with team members"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <Settings className="w-5 h-5 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: `
### Accessibility Implementation Guide

**♿ Semantic HTML Structure**  
\`\`\`tsx
<Card role="article" tabIndex={0}>
  <CardHeader>
    <h3>
      <a href="#" className="stretched-link">Article Title</a>
    </h3>
    <time dateTime="2024-12-15">December 15, 2024</time>
  </CardHeader>
  <CardBody>
    <p>Article content...</p>
  </CardBody>
  <CardFooter>
    <button aria-label="Like this article (47 likes)">
      <Heart /> <span aria-hidden="true">47</span>
    </button>
  </CardFooter>
</Card>
\`\`\`

**🎯 Keyboard Navigation**  
- All interactive elements must be focusable  
- Use tabIndex  for clickable cards  
- Handle Enter and Space key events  
- Provide visible focus indicators  

**📱 Touch Accessibility**  
- Minimum 44px touch targets on mobile  
- Adequate spacing between interactive elements  
- Support for assistive touch technologies  
- Clear visual feedback on touch  

### Performance Best Practices

**🖼️ Image Optimization**  
\`\`\`tsx
<img 
  src="image.jpg"
  srcSet="image-320w.jpg 320w, image-640w.jpg 640w, image-1280w.jpg 1280w"
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
  loading="lazy"
  alt="Descriptive alt text"
/>
\`\`\`

**⚡ Animation Performance**  
\`\`\`css
/* Good - animates transform */
.card:hover {
  transform: translateY(-4px);
  transition: transform 0.2s ease;
}

/* Avoid - animates layout properties */
.card:hover {
  margin-top: -4px; /* Causes layout recalculation */
}
\`\`\`

**📊 Virtual Scrolling for Large Lists**  
For lists with 100+ cards, implement virtual scrolling to maintain performance.

### Testing Checklist

**🧪 Manual Testing**  
- [ ] Test with keyboard only navigation  
- [ ] Verify screen reader announcements  
- [ ] Check color contrast ratios  
- [ ] Test on actual mobile devices  
- [ ] Verify in different browsers  

**🔬 Automated Testing**  
- [ ] Run axe-core accessibility tests  
- [ ] Lighthouse performance audits  
- [ ] Visual regression testing  
- [ ] Unit tests for interactive behavior  

💡 **Pro Tip**: Use browser dev tools to simulate different screen sizes, reduced motion preferences, and high contrast modes during development.
        `
      }
    }
  }
};
